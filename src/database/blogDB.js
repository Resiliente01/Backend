const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.HOST_DB,
    port: process.env.PORT_DB,
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.NAME_DB
});

connection.connect(error => {
    if (error)
        throw error;
    console.log('La conexión con blog si funciona');
});

// GETALL
const getAllBlogs = async() => {
    return new Promise(function (resolve, reject) {
        const sql = 'SELECT * FROM blog';
        connection.query(sql, (error, results) => {
            if(error) {
                return reject(error);
            }
            resolve(results);
        });
    });
};

// GETONE
const getoneBlog = async(id) => {
    return new Promise(function (resolve, reject) {
        const sql= 'SELECT * FROM blog WHERE id = ?';
        connection.query(sql, [id], (error, results) => {
            if(error) {
                return reject(error);
            }
            resolve(results);
        });
    });
};

// POST
const createBlog = async(titulo, contenido, images, autor, fecha) => {
    return new Promise(function (resolve, reject) {
        const sql = "INSERT INTO blog (titulo, contenido, images, autor, fecha) VALUES (?, ?, ?, ?, ?)";
        connection.query(sql, [titulo, contenido, images, autor, fecha], (error) => {
            if(error) {
                return reject(error);
            }
            resolve("Blog agregado");
        });
    });
};

// PATCH
const updateBlog = async(titulo, contenido, images, autor, fecha, id) => {
    return new Promise(function (resolve, reject) {
        const sql = "UPDATE blog SET titulo = ?, contenido = ?, images = ?, autor = ?, fecha = ? WHERE id = ?";
        connection.query(sql, [titulo, contenido, images, autor, fecha, id], (error) => {
            if(error) {
                return reject(error);
            }
            resolve("Blog actualizado");
        });
    });
};

// DELETE
const deleteBlog = async(id) => {
    return new Promise(function (resolve, reject) {
        const sql = "DELETE FROM blog WHERE id = ?";
        connection.query(sql, [id], (error) => {
            if(error) {
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
