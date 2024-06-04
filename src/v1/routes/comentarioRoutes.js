const express = require('express');
const router = express.Router();
const comentarioController = require('../../controller/comentarioController');

router
    .get('/', comentarioController.getAllComentarios)
    .get('/:id', comentarioController.getOneComentario)
    .post('/', comentarioController.createComentario)
    .patch('/:id', comentarioController.updateComentario)
    .delete('/:id', comentarioController.deleteComentario)

module.exports = router;