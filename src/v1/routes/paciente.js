const express = require('express');
const router = express.Router();
const pacienteController = require('../../controller/pacienteController');

router
    .get('/', pacienteController.getAllpacientes)
    .get('/:id', pacienteController.getOnepaciente)
    .post('/', pacienteController.createpaciente)
    .patch('/:id', pacienteController.updatepaciente)
    .delete('/:id', pacienteController.deletepaciente)
    .post('/nombre', pacienteController.getFullName)

module.exports = router;