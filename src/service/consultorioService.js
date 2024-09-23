const consultorioDB = require("../database/consultorioDB");

const getAllConsultorios = async () => {
    const consultorios = await consultorioDB.getAllConsultorios();
    return consultorios;
};

const getOneConsultorio = async (id) => {
    const consultorio = await consultorioDB.getOneConsultorio(id);
    return consultorio;
};

const createConsultorio = async (nombre, tipo, modalidad, capacidad_diaria, citas_ocupadas, estado, fecha_ultima_actualizacion) => {
    const consultorio = await consultorioDB.createConsultorio(nombre, tipo, modalidad, capacidad_diaria, citas_ocupadas, estado, fecha_ultima_actualizacion);
    return consultorio;
};

const updateConsultorio = async (id, nombre, tipo, modalidad, capacidad_diaria, citas_ocupadas, estado, fecha_ultima_actualizacion) => {
    const consultorio = await consultorioDB.updateConsultorio(id, nombre, tipo, modalidad, capacidad_diaria, citas_ocupadas, estado, fecha_ultima_actualizacion);
    return consultorio;
};

const deleteConsultorio = async (id) => {
    const consultorio = await consultorioDB.deleteConsultorio(id);
    return consultorio;
};

module.exports = {
    getAllConsultorios,
    getOneConsultorio,
    createConsultorio,
    updateConsultorio,
    deleteConsultorio
};
