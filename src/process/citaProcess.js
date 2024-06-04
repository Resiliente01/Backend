const citaService = require("../service/citaService");

const getAllCitas = async() => {
    const citas = await citaService.getAllCitas();
    return citas;
};

const getOneCita = async(id) => {
    const citas = await citaService.getOneCita(id);
    return citas;
};

const createCita = async(userName, fecha) => {
    const citas = await citaService.createCita(userName, fecha);
    return citas;
};

const updateCita = async(userName, fecha, id) => {
    const citas = await citaService.updateCita(userName, fecha, id);
    return citas;
};

const deleteCita = async(id) => {
    const citas = await citaService.deleteCita(id);
    return citas;
};

module.exports = {
    getAllCitas,
    getOneCita,
    createCita,
    updateCita,
    deleteCita
};