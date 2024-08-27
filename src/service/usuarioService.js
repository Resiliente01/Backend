const usuarioDB = require('../database/usuarioDB');

const getAllUsuarios = async() => {
    const usuarios = await usuarioDB.getAllUsuarios();
    return usuarios;
};

const getOneUsuario = async(id) => {
    const usuarios = await usuarioDB.getOneUsuario(id);
    return usuarios;
};

const createUsuario = async(correo, passw, username) => {
    const usuarios = await usuarioDB.createUsuario(correo, passw, username);
    return usuarios;
};

const updateUsuario = async(correo, passw, username, id) => {
    const usuarios = await usuarioDB.updateUsuario(correo, passw, username, id);
    return usuarios;
};

const deleteUsuario = async(id) => {
    const usuarios = await usuarioDB.deleteUsuario(id);
    return usuarios;
};

const loginProcess = async(correo, passw) => {
    const usuarios = await usuarioDB.loginProcess(correo, passw); 
    return usuarios; 
};

const checkEmail = async(correo) => {
    const usuarios = await usuarioDB.checkEmail(correo); 
    return usuarios; 
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