const colabProcess = require('../process/colabProcess'); 

const getAllColab = async(req, res) => {
    try{
        const colab = await colabProcess.getAllColab(); 
        const colabWithBase64Images = colab.map(colab => {
            if(colab.logotipo){
                colab.logotipo = Buffer.from(colab.logotipo).toString('base64'); 
            }
            return colab; 
        }); 
        res.status(200).json(colabWithBase64Images); 
    } catch (error){
        console.error('Error al obtener colaboraciones', error); 
        res.status(502).json({error: "Error al obtener colaboraciones"}); 
    }
}

const getoneColab = async(req, res) => {
    try{
        const colab = await colabProcess.getoneColab(req.params.id); 
        if(colab){
            if(colab.logotipo){
                colab.logotipo = Buffer.from(colab.logotipo).toString('base64'); 
            }
            res.status(200).json(colab); 
        } else {
            res.status(404).json({error: "Colab no encontrado"}); 
        }
    } catch (error){
        console.error('Error al obtener colaboracion', error); 
        res.status(502).json({error: "Error al obtener colaboracion"}); 
    }
}

const createColab = async(req, res) => {
    try{
        const { acronimo, nombre_comercial, url } = req.body; 
        let logotipoBuffer = null; 
        if (req.file){
            logotipoBuffer = req.file.buffer; 
        }
        const colab = await colabProcess.createColab(acronimo, nombre_comercial, url, logotipoBuffer); 
        res.status(200).json(colab); 
    } catch (error){
        console.error('Error al crear una colab', error); 
        res.status(502).json({error: "Error al crear una colab"}); 
    }
}

const updateColab = async(req, res) => {
    try{
        const { acronimo, nombre_comercial, url } = req.body; 
        let logotipoBuffer = null; 
        if (req.file){
            logotipoBuffer = req.file.buffer; 
        }
        const colab = await colabProcess.updateColab(acronimo, nombre_comercial, url, logotipoBuffer, req.params.id); 
        if(colab){
            res.status(200).json(colab); 
        } else {
            res.status(404).json('La colab no encontrado'); 
        }
    } catch (error){
        console.error('Error al actualizar la colab', error); 
        res.status(502).json({error: 'Error al actualizar colab'}); 
    }
}

const deleteColab = async(req, res) => {
    try {
        const result = await colabProcess.deleteColab(req.params.id);
        if (result) {
            res.status(200).json({ message: 'Colab eliminado exitosamente' }); 
        } else {
            res.status(404).json({ error: 'Colab no encontrado' });
        }
    } catch (error) {
        console.error('Error al eliminar un colab', error); 
        res.status(502).json({ error: 'Error al eliminar un colab' }); 
    }
}


module.exports = {
    getAllColab, 
    getoneColab,
    createColab, 
    updateColab, 
    deleteColab
}

