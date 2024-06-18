const express = require('express');
const router = express.Router();
const usuarioController = require('../../controller/usuarioController');

router
    .get('/', usuarioController.getAllUsuarios)
    .get('/:id', usuarioController.getOneUsuario)
    .post('/', usuarioController.createUsuario)
    .patch('/:id', usuarioController.updateUsuario)
    .delete('/:id', usuarioController.deleteUsuario)
    .patch('/login', usuarioController.loginProcess)
    .patch('/email', usuarioController.checkEmail)

module.exports = router;