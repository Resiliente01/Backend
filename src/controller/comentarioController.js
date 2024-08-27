const comentarioProcess = require("../process/comentarioProcess");

const getAllComentarios = async(req, res) => {
    try {
        const comentarios = await comentarioProcess.getAllComentarios();
        res.status(200).json(comentarios); 
    } catch (error){
        console.error('Error al obtener los comentarios', error); 
        res.status(502).json({error: 'Error al obtener los comenarios'}); 
    }
    
};

const getOneComentario = async(req, res) => {
    try{
        const comentarios = await comentarioProcess.getOneComentario(req.params.id);
        res.status(200).json(comentarios); 
    } catch(error){
        console.error('Error al obtener el comentario', error); 
        res.status(502).json({error: 'Error al obtener el comentario'}); 
    }    
};

const createComentario = async(req, res) => {
    try{
        const { contenido, autor } = req.body;         
        const comentarios = await comentarioProcess.createComentario(contenido, autor);
        res.status(200).json(comentarios); 
    } catch(error){
        console.error('Error al crear un comentario', error); 
        res.status(502).json({error: 'Error al crear un comentario'}); 
    }
    
    
};

const updateComentario = async(req, res) => {
    try{
        const {contenido, autor } = req.body; 
        const comentarios = await comentarioProcess.updateComentario(contenido, autor, req.params.id);
        res.status(200).json(comentarios); 
    } catch(error){
        console.error('Error al actualizar comentario', error); 
        res.status(502).json({error: 'Error al actualizar comentario'}); 
    }        
};

const deleteComentario = async(req, res) => {
    try {
        const comentarios = await comentarioProcess.deleteComentario(req.params.id);
        res.status(200).json(comentarios); 
    } catch(error){
        console.error('Error al eliminar comentario', error); 
        res.status(502).json({error: 'Error al eliminar comentario'});
    }    
};

module.exports = {
    getAllComentarios,
    getOneComentario,
    createComentario,
    updateComentario,
    deleteComentario
};