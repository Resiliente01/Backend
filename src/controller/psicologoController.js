const { json } = require("body-parser");
const psicologoProcess = require("../process/psicologoProcess");

const getAllPsicologo = async(req, res) => {
    try {
        const psicologo = await psicologoProcess.getAllPsicologo();
        res.status(200).json(psicologo);
    }
    catch(error){
       console.error('Error al obtener psicologos: ', error); 
       res.status(502).json({error: 'Error al obtener psicologos' }); 
    }
};

const getOnePsicologo = async(req, res) => {
    try{
        const psicologo = await psicologoProcess.getOnePsicologo(req.params.id);
        res.status(200).json(psicologo);
    } catch(error){
        console.error('Error al obtener un psicologo: ', error); 
        res.status(502).json({error: 'Error al obtener un psicologo' }); 
    }    
};

const createPsicologo = async(req, res) => {
    try{
        const { nombre, especialidad, cedula, visitante} = req.body; 
        const psicologo = await psicologoProcess.createPsicologo(nombre, especialidad, cedula, visitante);
        res.status(200).json(psicologo); 
    } catch (error){
        console.error('Error al agregar psicologo', error); 
        res.status(502).json({error: 'Error al agregar un psicologo '}); 
    }    
};

const updatePsicologo = async(req, res) => {
    try{
        const { nombre, especialidad, cedula, visitante} = req.body; 
        const psicologo = await psicologoProcess.updatePsicologo(nombre, especialidad, cedula, visitante, req.params.id);
        res.status(200),json(psicologo); 
    } catch(error){
        console.error('Error al editar al psicologo', error); 
        res.status(502).json({error: 'Error al editar al psicologo'}); 
    }
    
};

const deletePsicologo = async(req, res) => {
    try{
        const psicologo = await psicologoProcess.deletePsicologo(req.params.id);
        res.status(200).json(psicologo); 
    } catch(error){
        console.error('Error al eliminar psicologo', error); 
        res.status(502).json({error: 'Error al eliminar al psicologo'}); 
    }    
};

module.exports = {
    getAllPsicologo,
    getOnePsicologo,
    createPsicologo,
    updatePsicologo,
    deletePsicologo
};