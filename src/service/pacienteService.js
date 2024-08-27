const pacienteDB = require("../database/pacienteDB");

const getAllpacientes = async() => {
    return await pacienteDB.getAllpacientes();
};

const getOnepaciente = async(id) => {
    return await pacienteDB.getOnepaciente(id);
};

const createpaciente = async(
    nombre, genero, modalidad, tipo, fecha_nacimiento, status, numero_contacto,
    frecuencia_sesiones, beca, contacto_tutor, comentarios, calle, numero,
    colonia, cp, municipio_estado_pais
) => {
    return await pacienteDB.createpaciente(
        nombre, genero, modalidad, tipo, fecha_nacimiento, status, numero_contacto,
        frecuencia_sesiones, beca, contacto_tutor, comentarios, calle, numero,
        colonia, cp, municipio_estado_pais
    );
};

const updatepaciente = async(
    nombre, genero, modalidad, tipo, fecha_nacimiento, status, numero_contacto,
    frecuencia_sesiones, beca, contacto_tutor, comentarios, calle, numero,
    colonia, cp, municipio_estado_pais, id
) => {
    return await pacienteDB.updatepaciente(
        nombre, genero, modalidad, tipo, fecha_nacimiento, status, numero_contacto,
        frecuencia_sesiones, beca, contacto_tutor, comentarios, calle, numero,
        colonia, cp, municipio_estado_pais, id
    );
};

const deletepaciente = async(id) => {
    return await pacienteDB.deletepaciente(id);
};

const getFullName = async(nombre) => {
    return await pacienteDB.getFullName(nombre); 
}

module.exports = {
    getAllpacientes,
    getOnepaciente,
    createpaciente, 
    updatepaciente,
    deletepaciente, 
    getFullName
};
