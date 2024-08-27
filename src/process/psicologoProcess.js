const psicologoService = require("../service/psicologoService");

const getAllPsicologo = async() => {
    const psicologo = await psicologoService.getAllPsicologo();
    return psicologo;
};

const getOnePsicologo = async(id) => {
    const psicologo = await psicologoService.getOnePsicologo(id);
    return psicologo;
};

const createPsicologo = async(nombre, especialidad, cedula, visitante) => {
    const psicologo = await psicologoService.createPsicologo(nombre, especialidad, cedula, visitante);
    return psicologo;
};

const updatePsicologo = async(nombre, especialidad, cedula, visitante, id) => {
    const psicologo = await psicologoService.updatePsicologo(nombre, especialidad, cedula, visitante, id);
    return psicologo;
};

const deletePsicologo = async(id) => {
    const psicologo = await psicologoService.deletePsicologo(id);
    return psicologo;
};

module.exports = {
    getAllPsicologo,
    getOnePsicologo,
    createPsicologo,
    updatePsicologo,
    deletePsicologo
};