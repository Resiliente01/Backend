const consultorioProcess = require("../process/consultorioProcess");

const getAllConsultorios = async(req, res) => {
    try {
        const comentarios = await consultorioProcess.getAllConsultorios();
        res.status(200).json(comentarios); 
    } catch (error){
        console.error('Error al obtener los comentarios', error); 
        res.status(502).json({error: 'Error al obtener los comenarios'}); 
    }
    
};

const getOneConsultorio = async(req, res) => {
    try{
        const comentarios = await consultorioProcess.getOneConsultorio(req.params.id);
        res.status(200).json(comentarios); 
    } catch(error){
        console.error('Error al obtener el comentario', error); 
        res.status(502).json({error: 'Error al obtener el comentario'}); 
    }    
};

const createConsultorio = async(req, res) => {
    try{
        const {nombre, tipo, modalidad, capacidad_diaria, citas_ocupadas, estado, fecha_ultima_actualizacion } = req.body;         
        const comentarios = await consultorioProcess.createConsultorio(nombre, tipo, modalidad, capacidad_diaria, citas_ocupadas, estado, fecha_ultima_actualizacion);
        res.status(200).json(comentarios); 
    } catch(error){
        console.error('Error al crear un comentario', error); 
        res.status(502).json({error: 'Error al crear un comentario'}); 
    }
    
    
};

const updateConsultorio = async(req, res) => {
    try{
        const {nombre, tipo, modalidad, capacidad_diaria, citas_ocupadas, estado, fecha_ultima_actualizacion } = req.body; 
        const comentarios = await consultorioProcess.updateConsultorio(nombre, tipo, modalidad, capacidad_diaria, citas_ocupadas, estado, fecha_ultima_actualizacion, req.params.id);
        res.status(200).json(comentarios); 
    } catch(error){
        console.error('Error al actualizar comentario', error); 
        res.status(502).json({error: 'Error al actualizar comentario'}); 
    }        
};

const deleteConsultorio = async(req, res) => {
    try {
        const comentarios = await consultorioProcess.deleteComentario(req.params.id);
        res.status(200).json(comentarios); 
    } catch(error){
        console.error('Error al eliminar comentario', error); 
        res.status(502).json({error: 'Error al eliminar comentario'});
    }    
};

module.exports = {
    getAllConsultorios,
    getOneConsultorio,
    createConsultorio,
    updateConsultorio,
    deleteConsultorio,
};