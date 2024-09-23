const citaProcess = require("../process/citaProcess");
const { route } = require("../v1/routes/citaRoutes");

const getAllCitas = async(req, res) => {
    try {
        const citas = await citaProcess.getAllCitas();
        res.status(200).json(citas); 
    } catch(error){
        console.error('Error al obtener citas', error); 
        res.status(502).json({error: 'Error al obtener citas'}); 
    }        
};

const getOneCita = async(req, res) => {
    try {
        const citas = await citaProcess.getOneCita(req.params.id);
        res.status(200).json(citas);
    } catch(error){
        console.error('Error al obtener una cita', error); 
        res.status(502).json({error: 'Error al obtener una cita'}); 
    }        
};

const createCita = async(req, res) => {
    try{
        const { nombrecompleto, correo, telefono, tipocita, modalidad, fecha, horario, psicologo, cuentanosdeti } = req.body; 
        const citas = await citaProcess.createCita(nombrecompleto, correo, telefono, tipocita, modalidad, fecha, horario, psicologo, cuentanosdeti);
        res.status(200).json(citas); 
    } catch(error){
        console.error('Error al crear una cita', error); 
        res.status(502).json({error: 'Error al crear una cita'}); 
    }       
};

const updateCita = async(req, res) => {
    try{
        const { nombrecompleto, correo, telefono, tipocita, modalidad, fecha, horario, psicologo, cuentanosdeti } = req.body;        
        const citas = await citaProcess.updateCita( nombrecompleto, correo, telefono, tipocita, modalidad, fecha, horario, psicologo, cuentanosdeti, req.params.id);
        res.status(200).json(citas);         
    } catch(error){
        console.error('Error al editar cita', error); 
        res.status(502).json({error: 'Error al editar cita'}); 
    }        
};

const deleteCita = async(req, res) => {
    try {
        const citas = await citaProcess.deleteCita(req.params.id);
        res.status(200).json(citas); 
    } catch(error){
        console.error('Error al eliminar cita', error); 
        res.status(502).json({error: 'Error al eliminar cita'}); 
    }        
};



const disponibilidad = async (req, res) => {
    const { fecha, horario, tipocita } = req.query;
    try {
      const disponibilidad = await checkConsultorioDisponibilidad(fecha, horario, tipocita);
      if (disponibilidad.disponible) {
        res.json({
          consultorioDisponible: true,
          psicologoAsignado: disponibilidad.psicologoAsignado
        });
      } else {
        res.json({
          consultorioDisponible: false
        });
      }
    } catch (error) {
      console.error('Error al verificar la disponibilidad del consultorio', error);
      res.status(502).json({ error: 'Error al verificar la disponibilidad del consultorio' });
    }
  };
  
  async function checkConsultorioDisponibilidad(fecha, horario, tipocita) {
    const consultorios = [
      { nombre: 'Infantil', maxCitas: 6, tiposPermitidos: ['Atención para niños'] },
      { nombre: 'Rosa', maxCitas: 6, tiposPermitidos: ['Atención para adolescentes', 'Atención para adultos', 'Psicoterapia de pareja', 'Acompañamiento tanatológico'] },
      { nombre: 'Lila', maxCitas: 6, tiposPermitidos: ['Atención para adolescentes', 'Atención para adultos', 'Psicoterapia de pareja', 'Acompañamiento tanatológico'] },
      { nombre: 'Sala de juntas', maxCitas: 6, tiposPermitidos: ['Consultoría empresarial', 'Cursos y talleres', 'Conferencias', 'Orientación vocacional', 'Atención para adultos', 'Psicoterapia de pareja', 'Acompañamiento tanatológico'] }
    ];
  
    const citasExistentes = await disponibilidadFechaYHora(fecha, horario);
  
    for (const consultorio of consultorios) {
      if (consultorio.tiposPermitidos.includes(tipocita)) {
        const citasEnConsultorio = citasExistentes.filter(cita => cita.consultorio === consultorio.nombre);
        if (citasEnConsultorio.length < consultorio.maxCitas) {
          return { disponible: true, psicologoAsignado: 'Nombre del psicólogo' };
        }
      }
    }
  
    return { disponible: false };
  }
  
  async function disponibilidadFechaYHora(fecha, horario) {
    
    return await citaProcess.getCitasParaFechaYHorario(fecha, horario);
  }

module.exports = {
    getAllCitas,
    getOneCita,
    createCita,
    updateCita,
    deleteCita, 
    disponibilidad,

};