const { Pool } = require('pg');

const pool = new Pool({
    connectionString: 'postgres://postgres:t5tOS5ZS2r8866g@resilientedb.flycast:5432'
});

pool.connect()
    .then(() => console.log('Conexión exitosa con colabs'))
    .catch(err => console.error('Error al conectar con PostgreSQL', err));

// GETALL
const getAllColab = async () => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM colabs';
        pool.query(sql, (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results.rows);
        });
    });
};

// GETONE
const getoneColab = async (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM colabs WHERE id = $1';
        pool.query(sql, [id], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results.rows);
        });
    });
};

// POST
const createColab = async (acronimo, nombre_comercial, url, logotipo) => {
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO colabs (acronimo, nombre_comercial, url, logotipo) VALUES ($1, $2, $3, $4)";
        pool.query(sql, [acronimo, nombre_comercial, url, logotipo], (error) => {
            if (error) {
                return reject(error);
            }
            resolve("Colab agregada");
        });
    });
};

// PATCH
const updateColab = async (acronimo, nombre_comercial, url, logotipo, id) => {
    return new Promise((resolve, reject) => {
        const sql = "UPDATE colabs SET acronimo = $1, nombre_comercial = $2, url = $3, logotipo = $4 WHERE id = $5";
        pool.query(sql, [acronimo, nombre_comercial, url, logotipo, id], (error) => {
            if (error) {
                return reject(error);
            }
            resolve("Blog actualizado");
        });
    });
};

// DELETE
const deleteColab = async (id) => {
    return new Promise((resolve, reject) => {
        const sql = "DELETE FROM colabs WHERE id = $1";
        pool.query(sql, [id], (error) => {
            if (error) {
                return reject(error);
            }
            resolve("Blog Eliminado");
        });
    });
};

module.exports = {
    getAllColab,
    getoneColab,
    createColab,
    updateColab,
    deleteColab
};
