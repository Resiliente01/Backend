const { Pool } = require('pg');

const pool = new Pool({
    connectionString: 'postgres://postgres:t5tOS5ZS2r8866g@resilientedb.flycast:5432'
});

pool.connect()
    .then(() => console.log('Conexión exitosa con blog'))
    .catch(err => console.error('Error al conectar con PostgreSQL', err));

// GETALL
const getAllBlogs = async () => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM blog';
        pool.query(sql, (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results.rows);
        });
    });
};

// GETONE
const getoneBlog = async (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM blog WHERE id = $1';
        pool.query(sql, [id], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results.rows);
        });
    });
};

// POST
const createBlog = async (titulo, contenido, images, autor, fecha) => {
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO blog (titulo, contenido, images, autor, fecha) VALUES ($1, $2, $3, $4, $5)";
        pool.query(sql, [titulo, contenido, images, autor, fecha], (error) => {
            if (error) {
                return reject(error);
            }
            resolve("Blog agregado");
        });
    });
};

// PATCH
const updateBlog = async (titulo, contenido, images, autor, fecha, id) => {
    return new Promise((resolve, reject) => {
        const sql = "UPDATE blog SET titulo = $1, contenido = $2, images = $3, autor = $4, fecha = $5 WHERE id = $6";
        pool.query(sql, [titulo, contenido, images, autor, fecha, id], (error) => {
            if (error) {
                return reject(error);
            }
            resolve("Blog actualizado");
        });
    });
};

// DELETE
const deleteBlog = async (id) => {
    return new Promise((resolve, reject) => {
        const sql = "DELETE FROM blog WHERE id = $1";
        pool.query(sql, [id], (error) => {
            if (error) {
                return reject(error);
            }
            resolve("Blog Eliminado");
        });
    });
};

module.exports = {
    getAllBlogs,
    getoneBlog,
    createBlog,
    updateBlog,
    deleteBlog
};
