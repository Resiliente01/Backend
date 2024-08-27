const colabService = require("../service/colabService");

const getAllColab = async() => {
    const colab = await colabService.getAllColab();
    return colab;
};

const getoneColab = async(id) => {
    const colab = await colabService.getoneColab(id);
    return colab;
};

const createColab = async(acronimo, nombre_comercial, url, logotipo) => {
    const colab = await colabService.createColab(acronimo, nombre_comercial, url, logotipo);
    return colab;
};

const updateColab = async(acronimo, nombre_comercial, url, logotipo, id) => {
    const colab = await colabService.updateColab(acronimo, nombre_comercial, url, logotipo, id);
    return colab;
};

const deleteColab = async(id) => {
    const colab = await colabService.deleteColab(id);
    return colab;
};

module.exports = {
    getAllColab,
    getoneColab,
    createColab,
    updateColab,
    deleteColab
};