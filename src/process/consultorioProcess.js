const consultorioService = require("../service/consultorioService");

const getAllConsultorios = async() => {
    const consultorios = await consultorioService.getAllConsultorios();
    return consultorios;
};

const getOneConsultorio = async(id) => {
    const consultorio = await consultorioService.getOneConsultorio(id);
    return consultorio;
};

const createConsultorio = async(nombre, tipo, modalidad, capacidad_diaria, citas_ocupadas, estado, fecha_ultima_actualizacion) => {
    const consultorio = await consultorioService.createConsultorio(nombre, tipo, modalidad, capacidad_diaria, citas_ocupadas, estado, fecha_ultima_actualizacion);
    return consultorio;
};

const updateConsultorio = async(nombre, tipo, modalidad, capacidad_diaria, citas_ocupadas, estado, fecha_ultima_actualizacion, id) => {
    const consultorio = await consultorioService.updateConsultorio(nombre, tipo, modalidad, capacidad_diaria, citas_ocupadas, estado, fecha_ultima_actualizacion, id);
    return consultorio;
};

const deleteConsultorio = async(id) => {
    const consultorio = await consultorioService.deleteConsultorio(id);
    return consultorio;
};

module.exports = {
    getAllConsultorios,
    getOneConsultorio,
    createConsultorio,
    updateConsultorio,
    deleteConsultorio
};