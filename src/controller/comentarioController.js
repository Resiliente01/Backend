const comentarioProcess = require("../process/comentarioProcess");

const getAllComentarios = async(req, res) => {
    const comentarios = await comentarioProcess.getAllComentarios();
    res.send(comentarios);
};

const getOneComentario = async(req, res) => {
    const comentarios = await comentarioProcess.getOneComentario(req.params.id);
    res.send(comentarios);
};

const createComentario = async(req, res) => {
    const comentarios = await comentarioProcess.createComentario(req.body.contenido, req.body.autor, req.body.fecha);
    res.send(comentarios);
};

const updateComentario = async(req, res) => {
    const comentarios = await comentarioProcess.updateComentario(req.body.contenido, req.body.autor, req.body.fecha, req.params.id);
    res.send(comentarios);
};

const deleteComentario = async(req, res) => {
    const comentarios = await comentarioProcess.deleteComentario(req.params.id);
    res.send(comentarios);
};

module.exports = {
    getAllComentarios,
    getOneComentario,
    createComentario,
    updateComentario,
    deleteComentario
};