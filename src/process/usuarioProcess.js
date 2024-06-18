const usuarioService = require('../service/usuarioService');

const getAllUsuarios = async() => {
    const usuarios = await usuarioService.getAllUsuarios();
    return usuarios;
};

const getOneUsuario = async(id) => {
    const usuarios = await usuarioService.getOneUsuario(id);
    return usuarios;
};

const createUsuario = async(correo, passw, userName) => {
    const usuarios = await usuarioService.createUsuario(correo, passw, userName);
    return usuarios;
};

const updateUsuario = async(correo, passw, userName, id) => {
    const usuarios = await usuarioService.updateUsuario(correo, passw, userName, id);
    return usuarios;
};

const deleteUsuario = async(id) => {
    const usuarios = await usuarioService.deleteUsuario(id);
    return usuarios;
};

const loginProcess = async(correo, passw) => {
    const usuarios = await usuarioService.loginProcess(correo, passw); 
    return usuarios; 
}; 

const checkEmail = async(correo) => {
    const usuarios = await usuarioService.checkEmail(correo); 
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