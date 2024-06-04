const comentarioService = require("../service/comentarioService");

const getAllComentarios = async() => {
    const comentarios = await comentarioService.getAllComentarios();
    return comentarios;
};

const getOneComentario = async(id) => {
    const comentarios = await comentarioService.getOneComentario(id);
    return comentarios;
};

const createComentario = async(contenido, autor, fecha) => {
    const comentarios = await comentarioService.createComentario(contenido, autor, fecha);
    return comentarios;
};

const updateComentario = async(contenido, autor, fecha, id) => {
    const comentarios = await comentarioService.updateComentario(contenido, autor, fecha, id);
    return comentarios;
};

const deleteComentario = async(id) => {
    const comentarios = await comentarioService.deleteComentario(id);
    return comentarios;
};

module.exports = {
    getAllComentarios,
    getOneComentario,
    createComentario,
    updateComentario,
    deleteComentario
};