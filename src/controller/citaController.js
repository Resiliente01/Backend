const citaProcess = require("../process/citaProcess");

const getAllCitas = async(req, res) => {
    const citas = await citaProcess.getAllCitas();
    res.send(citas);
};

const getOneCita = async(req, res) => {
    const citas = await citaProcess.getOneCita(req.params.id);
    res.send(citas);
};

const createCita = async(req, res) => {
    const citas = await citaProcess.createCita(req.body.userName, req.body.fecha);
    res.send(citas);
};

const updateCita = async(req, res) => {
    const citas = await citaProcess.updateCita(req.body.userName, req.body.fecha, req.params.id);
    res.send(citas);
};

const deleteCita = async(req, res) => {
    const citas = await citaProcess.deleteCita(req.params.id);
    res.send(citas);
};

module.exports = {
    getAllCitas,
    getOneCita,
    createCita,
    updateCita,
    deleteCita
};