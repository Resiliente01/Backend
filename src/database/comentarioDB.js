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
    console.log('La conexión con comentarios si funciona');
});

//GETALL
const getAllComentarios = async() => {
    return new Promise(function (resolve, reject) {
        const sql = 'SELECT * FROM comentarios';
        connection.query(sql, (error, results) => {
            if(error){
                return reject(error);
            }
            resolve(results);
        });
    });
};

// GETONE
const getOneComentario = async(id) => {
    return new Promise(function (resolve, reject) {
        const sql = 'SELECT * FROM comentarios WHERE id = ?';
        connection.query(sql, [id], (error, results) => {
            if(error) {
                return reject(error);
            }
            resolve(results);
        });
    });
};

// POST
const createComentario = async(contenido, autor, fecha) => {
    return new Promise(function (resolve, reject) {
        const sql = "INSERT INTO comentarios (contenido, autor, fecha) VALUES (?, ?, ?)";
        connection.query(sql, [contenido, autor, fecha], (error, results) =>{
            if(error) {
                return reject(error);
            }
            resolve("Comentario agregado");
        });
    });
};

// PATCH
const updateComentario = async(contenido, autor, fecha, id) => {
    return new Promise(function (resolve, reject) {
        const sql = "UPDATE comentarios SET contenido = ?, autor = ?, fecha = ? WHERE id = ?";
        connection.query(sql, [contenido, autor, fecha, id], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve("Comentario actualizado");
        });
    });
};

// DELETE
const deleteComentario = async(id) => {
    return new Promise(function (resolve, reject) {
        const sql = "DELETE FROM comentarios WHERE id = ?";
        connection.query(sql, [id], (error, results) => {
            if(error) {
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