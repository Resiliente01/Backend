const usuarioProcess = require('../process/usuarioProcess');

const getAllUsuarios = async(req, res) => {
    const usuarios = await usuarioProcess.getAllUsuarios();
    res.send(usuarios);
};

const getOneUsuario = async(req, res) => {
    const usuarios = await usuarioProcess.getOneUsuario(req.params.id);
    res.send(usuarios);
};

const createUsuario = async(req, res) => {
    const usuarios = await usuarioProcess.createUsuario(req.body.correo, req.body.passw, req.body.userName);
    res.send(usuarios);
};

const updateUsuario = async(req, res) => {
    const usuarios = await usuarioProcess.updateUsuario(req.body.correo, req.body.passw, req.body.userName, req.params.id);
    res.send(usuarios);
};

const deleteUsuario = async(req, res) => {
    const usuarios = await usuarioProcess.deleteUsuario(req.params.id);
    res.send(usuarios);
};

// Proceso de logeo
const loginProcess = async (correo, passw) => {
    return new Promise(function (resolve, reject) {
        const sql = "SELECT * FROM usuarios WHERE correo = ? AND passw = ?";
        connection.query(sql, [correo, passw], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
};

// Proceso de verificar email
const checkEmail = async (correo) => {
    return new Promise(function (resolve, reject) {
        const sql = "SELECT correo FROM usuarios WHERE correo = ?";
        connection.query(sql, [correo], (error, results) => {
            if (error) {
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