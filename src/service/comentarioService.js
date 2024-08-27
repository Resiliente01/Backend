const comentarioDB = require("../database/comentarioDB");

const getAllComentarios = async() => {
    const comentarios = await comentarioDB.getAllComentarios();
    return comentarios;
};

const getOneComentario = async(id) => {
    const comentarios = await comentarioDB.getOneComentario(id);
    return comentarios;
};

const createComentario = async(contenido, autor) => {
    const comentarios = await comentarioDB.createComentario(contenido, autor);
    return comentarios;
};

const updateComentario = async(contenido, autor, id) => {
    const comentarios = await comentarioDB.updateComentario(contenido, autor, id);
    return comentarios;
};

const deleteComentario = async(id) => {
    const comentarios = await comentarioDB.deleteComentario(id);
    return comentarios;
};

module.exports = {
    getAllComentarios,
    getOneComentario,
    createComentario,
    updateComentario,
    deleteComentario
};