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
    console.log('La conexión con citas si funciona');
});

// GETALL
const getAllCitas = async () => {
    return new Promise(function (resolve, reject) {
        const sql = 'SELECT * FROM citas';
        connection.query(sql, (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
};

// GETONE
const getOneCita = async (id) => {
    return new Promise(function (resolve, reject) {
        const sql = 'SELECT * FROM citas WHERE id = ?';
        connection.query(sql, [id], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
};

// POST
const createCita = async (userName, fecha) => {
    return new Promise(function (resolve, reject) {
        const sql = "INSERT INTO citas (userName, fecha) VALUES (?, ?)";
        connection.query(sql, [userName, fecha], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve("Cita agregada");
        });
    });
};

// PATCH
const updateCita = async(userName, fecha, id) => {
    return new Promise(function (resolve, reject) {
        const sql = "UPDATE citas SET userName = ?, fecha = ? WHERE id = ?";
        connection.query(sql, [userName, fecha, id], (error, results) => {
            if(error) {
                return reject(error);
            }
            resolve("Cita actuializada");
        });
    });
};

// DELETE
const deleteCita = async(id) => {
    return new Promise(function (resolve, reject) {
        const sql = "DELETE FROM citas WHERE id = ?";
        connection.query(sql, [id], (error, results) => {
            if(error) {
                return reject(error);
            }
            resolve("Cita eliminada");
        });
    });
};

module.exports = {
    getAllCitas,
    getOneCita,
    createCita,
    updateCita,
    deleteCita
};