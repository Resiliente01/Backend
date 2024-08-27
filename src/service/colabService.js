const colabDB = require("../database/colabDB");

const getAllColab = async() => {
    const colab = await colabDB.getAllColab();
    return colab;
};

const getoneColab = async(id) => {
    const colab = await colabDB.getoneColab(id);
    return colab;
};

const createColab = async(acronimo, nombre_comercial, url, logotipo) => {
    const colab = await colabDB.createColab(acronimo, nombre_comercial, url, logotipo);
    return colab;
};

const updateColab = async(acronimo, nombre_comercial, url, logotipo, id) => {
    const colab = await colabDB.updateColab(acronimo, nombre_comercial, url, logotipo, id);
    return colab;
};

const deleteColab = async(id) => {
    const colab = await colabDB.deleteColab(id);
    return colab;
};

module.exports = {
    getAllColab,
    getoneColab,
    createColab,
    updateColab,
    deleteColab
};