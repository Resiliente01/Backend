const pacienteService = require("../service/pacienteService");

const getAllpacientes = async() => {
    return await pacienteService.getAllpacientes();
};

const getOnepaciente = async(id) => {
    return await pacienteService.getOnepaciente(id);
};

const createpaciente = async(
    nombre, genero, modalidad, tipo, fecha_nacimiento, status, numero_contacto,
    frecuencia_sesiones, beca, contacto_tutor, comentarios, calle, numero,
    colonia, cp, municipio_estado_pais
) => {
    return await pacienteService.createpaciente(
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
    return await pacienteService.updatepaciente(
        nombre, genero, modalidad, tipo, fecha_nacimiento, status, numero_contacto,
        frecuencia_sesiones, beca, contacto_tutor, comentarios, calle, numero,
        colonia, cp, municipio_estado_pais, id
    );
};

const deletepaciente = async(id) => {
    return await pacienteService.deletepaciente(id);
};

const getFullName = async(nombre) => {
    return await pacienteService.getFullName(nombre); 
}

module.exports = {
    getAllpacientes,
    getOnepaciente,
    createpaciente,
    updatepaciente,
    deletepaciente, 
    getFullName
};
