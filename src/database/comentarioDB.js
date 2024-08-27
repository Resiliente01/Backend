const { Pool } = require('pg');

const pool = new Pool({    
    connectionString: 'postgres://postgres:t5tOS5ZS2r8866g@resilientedb.flycast:5432'
});

pool.connect()
    .then(() => console.log('Conexión exitosa con comentario'))
    .catch(err => console.error('Error al conectar con PostgreSQL', err));


// GETALL
const getAllComentarios = async () => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM comentarios';
        pool.query(sql, (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results.rows);
        });
    });
};

// GETONE
const getOneComentario = async (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM comentarios WHERE id = $1';
        pool.query(sql, [id], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results.rows);
        });
    });
};

// POST
const createComentario = async (contenido, autor) => {
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO comentarios (contenido, autor) VALUES ($1, $2)";
        pool.query(sql, [contenido, autor], (error) => {
            if (error) {
                return reject(error);
            }
            resolve("Comentario agregado");
        });
    });
};

// PATCH
const updateComentario = async (contenido, autor, id) => {
    return new Promise((resolve, reject) => {
        const sql = "UPDATE comentarios SET contenido = $1, autor = $2 WHERE id = $3";
        pool.query(sql, [contenido, autor, id], (error) => {
            if (error) {
                return reject(error);
            }
            resolve("Comentario actualizado");
        });
    });
};

// DELETE
const deleteComentario = async (id) => {
    return new Promise((resolve, reject) => {
        const sql = "DELETE FROM comentarios WHERE id = $1";
        pool.query(sql, [id], (error) => {
            if (error) {
                return reject(error);
            }
            resolve("Comentario eliminado");
        });
    });
};

module.exports = {
    getAllComentarios,
    getOneComentario,
    createComentario,
    updateComentario,
    deleteComentario
};
