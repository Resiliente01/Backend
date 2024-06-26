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
    console.log('La conexión con usuarios si funciona');
});

// GETALL
const getAllUsuarios = async() => {
    return new Promise(function (resolve, reject) {
        const sql = 'SELECT * FROM usuarios';
        connection.query(sql, (error, results) => {
            if(error) {
                return reject(error);
            }
            resolve(results);
        });
    });
};

// GETONE
const getOneUsuario = async(id) => {
    return new Promise(function (resolve, reject) {
        const sql = 'SELECT * FROM usuarios WHERE id = ? ';
        connection.query(sql, [id], (error, results) => {
            if(error) {
                return reject(error);
            }
            resolve(results);
        });
    });
};

// POST
const createUsuario = async(correo, passw, userName) => {
    return new Promise(function (resolve, reject) {
        const sql = "INSERT INTO usuarios (correo, passw, userName) VALUES (?, ?, ?)";
        connection.query(sql, [correo, passw, userName], (error) => {
            if(error) {
                return reject(error);
            }
            resolve("Usuario agregadoo");
        });
    });
};

// PATCH
const updateUsuario = async(correo, passw, userName, id) => {
    return new Promise(function (resolve, reject) {
        const sql = "UPDATE usuarios SET correo = ?, passw = ?, userName = ? WHERE id = ?";
        connection.query(sql, [correo, passw, userName, id], (error) => {
            if (error) {
                return reject(error);
            }
            resolve("Usuario actualizado");
        });
    });
}

// DELETE
const deleteUsuario = async(id) => {
    return new Promise(function (resolve, reject) {
        const sql ="DELETE FROM usuarios WHERE id = ?";
        connection.query(sql, [id], (error) => {
            if(error) {
                return reject(error);
            }
            resolve("Usuario eliminado");
        });
    });
};

//login process 
const loginProcess = async(correo, passw) => {
    return new Promise(function(resolve, reject) {
        const sql = "Select from usuarios where correo = ? and passw = ?"; 
        connection.query(sql, [correo, passw], (error, results) => {
            if(error){
                return reject(error); 
            }
            resolve(results); 
        }); 
    }); 
}; 

const checkEmail = async(correo) => {
    return new Promise(function(resolve, reject){
        const sql = "Select * from usuarios where correo = ? ";
        connection.query(sql, [correo], (error, results) => {
            if(error){
                return reject(error); 
            }
            resolve(results); 
        }); 
    }); 
}; 

module.exports = {
    getAllUsuarios,
    getOneUsuario,
    createUsuario,
    updateUsuario,
    deleteUsuario, 
    loginProcess, 
    checkEmail
};