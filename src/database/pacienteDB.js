require('dotenv').config(); 
const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.HOST_DB,
    port: process.env.PORT_DB,
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.NAME_DB,
    connectionString: process.env.DATABASE_URL
});

pool.connect()
    .then(() => console.log('Conexión exitosa con pacientes'))
    .catch(err => console.error('Error al conectar con PostgreSQL', err));

// GETALL
const getAllpacientes = async () => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM pacientes';
        pool.query(sql, (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results.rows);
        });
    });
};

// GETONE
const getOnepaciente = async (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM pacientes WHERE id = $1';
        pool.query(sql, [id], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results.rows);
        });
    });
};

// POST
const createpaciente = async (
    nombre, genero, modalidad, tipo, fecha_nacimiento, status, numero_contacto,
    frecuencia_sesiones, beca, contacto_tutor, comentarios, calle, numero,
    colonia, cp, municipio_estado_pais
) => {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO pacientes 
            (nombre, genero, modalidad, tipo, fecha_nacimiento, status, numero_contacto, 
            frecuencia_sesiones, beca, contacto_tutor, comentarios, calle, numero, colonia, cp, municipio_estado_pais) 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)`;
        pool.query(sql, [
            nombre, genero, modalidad, tipo, fecha_nacimiento, status, numero_contacto,
            frecuencia_sesiones, beca, contacto_tutor, comentarios, calle, numero,
            colonia, cp, municipio_estado_pais
        ], (error) => {
            if (error) {
                return reject(error);
            }
            resolve("Paciente agregado");
        });
    });
};

// PATCH
const updatepaciente = async (
    nombre, genero, modalidad, tipo, fecha_nacimiento, status, numero_contacto,
    frecuencia_sesiones, beca, contacto_tutor, comentarios, calle, numero,
    colonia, cp, municipio_estado_pais, id
) => {
    return new Promise((resolve, reject) => {
        const sql = `UPDATE pacientes SET 
            nombre = $1, genero = $2, modalidad = $3, tipo = $4, fecha_nacimiento = $5, 
            status = $6, numero_contacto = $7, frecuencia_sesiones = $8, beca = $9, contacto_tutor = $10, 
            comentarios = $11, calle = $12, numero = $13, colonia = $14, cp = $15, municipio_estado_pais = $16 
            WHERE id = $17`;
        pool.query(sql, [
            nombre, genero, modalidad, tipo, fecha_nacimiento, status, numero_contacto,
            frecuencia_sesiones, beca, contacto_tutor, comentarios, calle, numero,
            colonia, cp, municipio_estado_pais, id
        ], (error) => {
            if (error) {
                return reject(error);
            }
            resolve("Paciente actualizado");
        });
    });
};

// DELETE
const deletepaciente = async (id) => {
    return new Promise((resolve, reject) => {
        const sql = "DELETE FROM pacientes WHERE id = $1";
        pool.query(sql, [id], (error) => {
            if (error) {
                return reject(error);
            }
            resolve("Paciente eliminado");
        });
    });
};

// Obtener nombre de paciente 
const getFullName = async (nombre) => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT nombre FROM pacientes WHERE nombre = $1"; 
        pool.query(sql, [nombre], (error) => {
            if(error){
                return reject(error); 
            }
            resolve('Paciente encontrado :D', resolve.rows); 
        }); 
    }); 
}

module.exports = {
    getAllpacientes,
    getOnepaciente,
    createpaciente,
    updatepaciente,
    deletepaciente, 
    getFullName
};
