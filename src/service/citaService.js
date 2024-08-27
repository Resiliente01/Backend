const citaDB = require("../database/citaDB");

const getAllCitas = async() => {
    const citas = await citaDB.getAllCitas();
    return citas;
};

const getOneCita = async(id) => {
    const citas = await citaDB.getOneCita(id);
    return citas;
};

const createCita = async(nombrecompleto, correo, telefono, tipocita, fecha, horario, psicologo, cuentanosdeti) => {
    const citas = await citaDB.createCita(nombrecompleto, correo, telefono, tipocita, fecha, horario, psicologo, cuentanosdeti);
    return citas;
};

const updateCita = async(nombrecompleto, correo, telefono, tipocita, fecha, horario, psicologo, cuentanosdeti, id) => {
    const citas = await citaDB.updateCita(nombrecompleto, correo, telefono, tipocita, fecha, horario, psicologo, cuentanosdeti, id);
    return citas;
};

const deleteCita = async(id) => {
    const citas = await citaDB.deleteCita(id);
    return citas;
};

const disponibilidad = async(horario, fecha) => {
    const citas = await citaDB.disponibilidad(horario, fecha); 
    return citas; 
}

module.exports = {
    getAllCitas,
    getOneCita,
    createCita,
    updateCita,
    deleteCita, 
    disponibilidad
};