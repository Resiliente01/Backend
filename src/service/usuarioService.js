const usuarioDB = require('../database/usuarioDB');

const getAllUsuarios = async() => {
    const usuarios = await usuarioDB.getAllUsuarios();
    return usuarios;
};

const getOneUsuario = async(id) => {
    const usuarios = await usuarioDB.getOneUsuario(id);
    return usuarios;
};

const createUsuario = async(correo, passw, userName) => {
    const usuarios = await usuarioDB.createUsuario(correo, passw, userName);
    return usuarios;
};

const updateUsuario = async(correo, passw, userName, id) => {
    const usuarios = await usuarioDB.updateUsuario(correo, passw, userName, id);
    return usuarios;
};

const deleteUsuario = async(id) => {
    const usuarios = await usuarioDB.deleteUsuario(id);
    return usuarios;
};

module.exports = {
    getAllUsuarios,
    getOneUsuario,
    createUsuario,
    updateUsuario,
    deleteUsuario
};