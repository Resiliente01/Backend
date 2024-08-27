const citaService = require("../service/citaService");

const getAllCitas = async() => {
    const citas = await citaService.getAllCitas();
    return citas;
};

const getOneCita = async(id) => {
    const citas = await citaService.getOneCita(id);
    return citas;
};

const createCita = async( nombrecompleto, correo, telefono, tipocita, fecha, horario, psicologo, cuentanosdeti) => {
    const citas = await citaService.createCita( nombrecompleto, correo, telefono, tipocita, fecha, horario, psicologo, cuentanosdeti);
    return citas;
};

const updateCita = async( nombrecompleto, correo, telefono, tipocita, fecha, horario, psicologo, cuentanosdeti, id) => {
    const citas = await citaService.updateCita( nombrecompleto, correo, telefono, tipocita, fecha, horario, psicologo, cuentanosdeti, id);
    return citas;
};

const deleteCita = async(id) => {
    const citas = await citaService.deleteCita(id);
    return citas;
};

const disponibilidad = async(horario, fecha) => {
    const citas = await citaService.disponibilidad(horario, fecha); 
    return citas; 
}; 

module.exports = {
    getAllCitas,
    getOneCita,
    createCita,
    updateCita,
    deleteCita, 
    disponibilidad
};