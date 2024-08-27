const pacienteProcess = require("../process/pacienteProcess");

const getAllpacientes = async(req, res) => {
    try {
        const pacientes = await pacienteProcess.getAllpacientes();
        res.status(200).json(pacientes);
    } catch (error) {
        console.error('Error al obtener pacientes: ', error);
        res.status(502).json({ error: 'Error al obtener pacientes' });
    }
};

const getOnepaciente = async(req, res) => {
    try {
        const paciente = await pacienteProcess.getOnepaciente(req.params.id);
        res.status(200).json(paciente);
    } catch (error) {
        console.error('Error al obtener un paciente: ', error);
        res.status(502).json({ error: 'Error al obtener un paciente' });
    }
};

const createpaciente = async(req, res) => {
    try {
        const {
            nombre, genero, modalidad, tipo, fecha_nacimiento, status, numero_contacto,
            frecuencia_sesiones, beca, contacto_tutor, comentarios, calle, numero,
            colonia, cp, municipio_estado_pais
        } = req.body;
        const paciente = await pacienteProcess.createpaciente(
            nombre, genero, modalidad, tipo, fecha_nacimiento, status, numero_contacto,
            frecuencia_sesiones, beca, contacto_tutor, comentarios, calle, numero,
            colonia, cp, municipio_estado_pais
        );
        res.status(200).json(paciente);
    } catch (error) {
        console.error('Error al agregar paciente', error);
        res.status(502).json({ error: 'Error al agregar un paciente' });
    }
};

const updatepaciente = async(req, res) => {
    try {
        const {
            nombre, genero, modalidad, tipo, fecha_nacimiento, status, numero_contacto,
            frecuencia_sesiones, beca, contacto_tutor, comentarios, calle, numero,
            colonia, cp, municipio_estado_pais
        } = req.body;
        const paciente = await pacienteProcess.updatepaciente(
            nombre, genero, modalidad, tipo, fecha_nacimiento, status, numero_contacto,
            frecuencia_sesiones, beca, contacto_tutor, comentarios, calle, numero,
            colonia, cp, municipio_estado_pais, req.params.id
        );
        res.status(200).json(paciente);
    } catch (error) {
        console.error('Error al editar al paciente', error);
        res.status(502).json({ error: 'Error al editar al paciente' });
    }
};

const deletepaciente = async(req, res) => {
    try {
        const paciente = await pacienteProcess.deletepaciente(req.params.id);
        res.status(200).json(paciente);
    } catch (error) {
        console.error('Error al eliminar paciente', error);
        res.status(502).json({ error: 'Error al eliminar al paciente' });
    }
};

const getFullName = async(req, res) => {
    try{
        const paciente = await pacienteProcess.getFullName(req.params.nombre); 
        res.status(200).json(paciente); 
    } catch (error){
        console.error('Error al encontrar el paciente', error); 
        res.status(502).json({error: 'Error al econtrar al paciente'}); 
    }
}; 

module.exports = {
    getAllpacientes,
    getOnepaciente,
    createpaciente,
    updatepaciente,
    deletepaciente,
    getFullName
};
