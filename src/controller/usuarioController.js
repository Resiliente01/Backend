const usuarioProcess = require('../process/usuarioProcess');
const jwt = require('jsonwebtoken'); 

const getAllUsuarios = async (req, res) => {
    try {
        const usuarios = await usuarioProcess.getAllUsuarios();
        res.status(200).json(usuarios);
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({ error: 'Error al obtener usuarios' });
    }
};

const getOneUsuario = async (req, res) => {
    try {
        const usuario = await usuarioProcess.getOneUsuario(req.params.id);
        res.status(200).json(usuario);
    } catch (error) {
        console.error('Error al obtener usuario:', error);
        res.status(500).json({ error: 'Error al obtener usuario' });
    }
};

const createUsuario = async (req, res) => {
    console.log('Llamada a crear usuario'); 
    console.log('Cuerpo de solicitud', req.body); 

    try {
        const { correo, passw, username } = req.body;
        const nuevoUsuario = await usuarioProcess.createUsuario(correo, passw, username);
        res.status(200).json(nuevoUsuario);
        console.log('Usuario creado'); 
    } catch (error) {
        console.error('Error al crear usuario:', error);
        res.status(500).json({ error: 'Error al crear usuario' });
    }
};

const updateUsuario = async (req, res) => {
    try {
        const { correo, passw, username } = req.body;
        const usuarioActualizado = await usuarioProcess.updateUsuario(correo, passw, username, req.params.id);
        res.status(200).json(usuarioActualizado);
    } catch (error) {
        console.error('Error al actualizar usuario:', error);
        res.status(500).json({ error: 'Error al actualizar usuario' });
    }
};

const deleteUsuario = async (req, res) => {
    try {
        const usuarioEliminado = await usuarioProcess.deleteUsuario(req.params.id);
        res.status(200).json(usuarioEliminado);
    } catch (error) {
        console.error('Error al eliminar usuario:', error);
        res.status(500).json({ error: 'Error al eliminar usuario' });
    }
};

const loginProcess = async (req, res) => {
    try {
        const { correo, passw } = req.body;
        const result = await usuarioProcess.loginProcess(correo, passw);
        if (result){
            const token = jwt.sign({ userId: result.id}, '2669b8ed7a44f4d158db2ae72923ce9d9eb9cd49ca0a839bb70fd4bbca89b96f', { expiresIn: '1h'}); 
            res.status(200).json({ success: true, result, token}); 
        } else {
            res.status(401).json({ success: false});
        }        
        
    } catch (error) {
        console.error('Error en el proceso de login:', error);
        res.status(500).json({ error: 'Error en el proceso de login' });
    }
};

const checkEmail = async (req, res) => {
    try {
        const { correo } = req.body;
        const result = await usuarioProcess.checkEmail(correo);
        res.status(200).json(result);
    } catch (error) {
        console.error('Error al verificar email:', error);
        res.status(500).json({ error: 'Error al verificar email' });
    }
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
