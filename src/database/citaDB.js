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
    .then(() => console.log('Conexión exitosa con cita'))
    .catch(err => console.error('Error al conectar con PostgreSQL', err));


// GETALL
const getAllCitas = async () => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM citas';
        pool.query(sql, (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results.rows);
        });
    });
};

// GETONE
const getOneCita = async (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM citas WHERE id = $1';
        pool.query(sql, [id], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results.rows);
        });
    });
};

// POST
const createCita = async ( nombrecompleto, correo, telefono, tipocita, modalidad, fecha, horario, psicologo, cuentanosdeti) => {
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO citas ( nombrecompleto, correo, telefono, tipocita, modalidad, fecha, horario, psicologo, cuentanosdeti) VALUES ($1, $2, $3, $4, $5, $6, $7, $8,)";
        pool.query(sql, [ nombrecompleto, correo, telefono, tipocita, modalidad, fecha, horario, psicologo, cuentanosdeti], (error) => {
            if (error) {
                return reject(error);
            }
            resolve("Cita agregada");
        });
    });
};

// PATCH
const updateCita = async ( nombrecompleto, correo, telefono, tipocita, modalidad, fecha, horario, psicologo, cuentanosdeti, id) => {
    return new Promise((resolve, reject) => {
        const sql = "UPDATE citas SET nombrecompleto = $1, correo = $2, telefono = $3, tipocita = $4, modalidad = $5, fecha = $6, horario = $7, psicologo = $8, cuentanosdeti = $9 WHERE id = $10";
        pool.query(sql, [ nombrecompleto, correo, telefono, tipocita, modalidad, fecha, horario, psicologo, cuentanosdeti, id], (error) => {
            if (error) {
                return reject(error);
            }
            resolve("Cita actualizada");
        });
    });
};

// DELETE
const deleteCita = async (id) => {
    return new Promise((resolve, reject) => {
        const sql = "DELETE FROM citas WHERE id = $1";
        pool.query(sql, [id], (error) => {
            if (error) {
                return reject(error);
            }
            resolve("Cita eliminada");
        });
    });
};

const disponibilidad = async (fecha, hora) => {
    return new Promise((resolve, reject) => {
        const sql = 'Select * from citas where fecha = $1 and hora = $2'; 
        pool.query(sql, [fecha, hora], (error) => {
            if (error) {
                return reject(error); 
            }
            resolve('Cita existente'); 
        });
    }); 
}


module.exports = {
    getAllCitas,
    getOneCita,
    createCita,
    updateCita,
    deleteCita, 
    disponibilidad
};
