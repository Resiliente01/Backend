const { Pool } = require('pg');

const pool = new Pool({
    connectionString: 'postgres://postgres:t5tOS5ZS2r8866g@resilientedb.flycast:5432'
});

pool.connect()
    .then(() => console.log('Conexión exitosa con psicologo'))
    .catch(err => console.error('Error al conectar con PostgreSQL', err));

// getall 
const getAllPsicologo = async () => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM psicologo';
        pool.query(sql, (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results.rows);
        });
    });
};

// GETONE
const getOnePsicologo = async (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM psicologo WHERE id = $1';
        pool.query(sql, [id], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results.rows);
        });
    });
};

// POST
const createPsicologo = async (nombre, especialidad, cedula, visitante) => {
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO psicologo (nombre, especialidad, cedula, visitante) VALUES ($1, $2, $3, $4)";
        pool.query(sql, [nombre, especialidad, cedula, visitante ], (error) => {
            if (error) {
                return reject(error);
            }
            resolve("Psicologo agregado");
        });
    });
};

// PATCH
const updatePsicologo = async (nombre, especialidad, cedula, visitante, id) => {
    return new Promise((resolve, reject) => {
        const sql = "UPDATE psicologo SET nombre = $1, especialidad = $2, cedula = $3, visitante = $4 WHERE id = $5";
        pool.query(sql, [nombre, especialidad, cedula, visitante, id], (error) => {
            if (error) {
                return reject(error);
            }
            resolve("Psicologo actualizado");
        });
    });
}

// DELETE
const deletePsicologo = async (id) => {
    return new Promise((resolve, reject) => {
        const sql = "DELETE FROM psicologo WHERE id = $1";
        pool.query(sql, [id], (error) => {
            if (error) {
                return reject(error);
            }
            resolve("Psicologo eliminado");
        });
    });
};

module.exports = {
    getAllPsicologo, 
    getOnePsicologo, 
    createPsicologo, 
    updatePsicologo, 
    deletePsicologo
}; 