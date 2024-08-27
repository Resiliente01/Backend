const psicologoDB = require("../database/psicologoDB");

const getAllPsicologo = async() => {
    const psicologo = await psicologoDB.getAllPsicologo();
    return psicologo;
};

const getOnePsicologo = async(id) => {
    const psicologo = await psicologoDB.getOnePsicologo(id);
    return psicologo;
};

const createPsicologo = async(nombre, especialidad, cedula, visitante) => {
    const psicologo = await psicologoDB.createPsicologo(nombre, especialidad, cedula, visitante);
    return psicologo;
};

const updatePsicologo = async(nombre, especialidad, cedula, visitante, id) => {
    const psicologo = await psicologoDB.updatePsicologo(nombre, especialidad, cedula, visitante, id);
    return psicologo;
};

const deletePsicologo = async(id) => {
    const psicologo = await psicologoDB.deletePsicologo(id);
    return psicologo;
};

module.exports = {
    getAllPsicologo,
    getOnePsicologo,
    createPsicologo,
    updatePsicologo,
    deletePsicologo
};