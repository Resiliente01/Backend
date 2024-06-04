const express = require('express');
const router = express.Router();
const citaController = require('../../controller/citaController');

router
    .get('/', citaController.getAllCitas)
    .get('/:id', citaController.getOneCita)
    .post('/', citaController.createCita)
    .patch('/:id', citaController.updateCita)
    .delete('/:id', citaController.deleteCita)

module.exports = router;