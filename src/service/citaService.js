const citaDB = require("../database/citaDB");

const getAllCitas = async() => {
    const citas = await citaDB.getAllCitas();
    return citas;
};

const getOneCita = async(id) => {
    const citas = await citaDB.getOneCita(id);
    return citas;
};

const createCita = async(userName, fecha) => {
    const citas = await citaDB.createCita(userName, fecha);
    return citas;
};

const updateCita = async(userName, fecha, id) => {
    const citas = await citaDB.updateCita(userName, fecha, id);
    return citas;
};

const deleteCita = async(id) => {
    const citas = await citaDB.deleteCita(id);
    return citas;
};

module.exports = {
    getAllCitas,
    getOneCita,
    createCita,
    updateCita,
    deleteCita
};