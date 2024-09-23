require('dotenv').config(); 
const { Pool } = require('pg');

// Configuración de la conexión a la base de datos PostgreSQL
const pool = new Pool({    
    host: process.env.HOST_DB,
    port: process.env.PORT_DB,
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.NAME_DB,
    connectionString: process.env.DATABASE_URL
});

// Conexión inicial a la base de datos
pool.connect()
    .then(() => console.log('Conexión exitosa con consultorio'))
    .catch(err => console.error('Error al conectar con PostgreSQL', err));

// GETALL - Obtener todos los consultorios
const getAllConsultorios = async () => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM consultorios';
        pool.query(sql, (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results.rows);
        });
    });
};

// GETONE - Obtener un solo consultorio por ID
const getOneConsultorio = async (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM consultorios WHERE id = $1';
        pool.query(sql, [id], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results.rows[0]); // Para devolver un solo consultorio
        });
    });
};

// POST - Crear un nuevo consultorio
const createConsultorio = async (nombre, tipo, modalidad, capacidad_diaria, citas_ocupadas, estado, fecha_ultima_actualizacion) => {
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO consultorios (nombre, tipo, modalidad, capacidad_diaria, citas_ocupadas, estado, fecha_ultima_actualizacion) VALUES ($1, $2, $3, $4, $5, $6, $7)";
        pool.query(sql, [nombre, tipo, modalidad, capacidad_diaria, citas_ocupadas, estado, fecha_ultima_actualizacion], (error) => {
            if (error) {
                return reject(error);
            }
            resolve("Consultorio creado");
        });
    });
};

// PATCH - Actualizar un consultorio existente
const updateConsultorio = async (id, nombre, tipo, modalidad, capacidad_diaria, citas_ocupadas, estado, fecha_ultima_actualizacion) => {
    return new Promise((resolve, reject) => {
        const sql = "UPDATE consultorios SET nombre=$1, tipo=$2, modalidad=$3, capacidad_diaria=$4, citas_ocupadas=$5, estado=$6, fecha_ultima_actualizacion=$7 WHERE id = $8";
        pool.query(sql, [nombre, tipo, modalidad, capacidad_diaria, citas_ocupadas, estado, fecha_ultima_actualizacion, id], (error) => {
            if (error) {
                return reject(error);
            }
            resolve("Consultorio actualizado");
        });
    });
};

// DELETE - Eliminar un consultorio por ID
const deleteConsultorio = async (id) => {
    return new Promise((resolve, reject) => {
        const sql = "DELETE FROM consultorios WHERE id = $1";
        pool.query(sql, [id], (error) => {
            if (error) {
                return reject(error);
            }
            resolve("Consultorio eliminado");
        });
    });
};

// Exportar las funciones del CRUD
module.exports = {
    getAllConsultorios,
    getOneConsultorio,
    createConsultorio,
    updateConsultorio,
    deleteConsultorio
};
