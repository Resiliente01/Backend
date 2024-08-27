const express = require('express');
const router = express.Router();
const psicologoController = require('../../controller/psicologoController');

router
    .get('/', psicologoController.getAllPsicologo)
    .get('/:id', psicologoController.getOnePsicologo)
    .post('/', psicologoController.createPsicologo)
    .patch('/:id', psicologoController.updatePsicologo)
    .delete('/:id', psicologoController.deletePsicologo)

module.exports = router;