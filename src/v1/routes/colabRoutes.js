const express = require('express');
const router = express.Router();
const colabController = require('../../controller/colabController');

const multer = require('multer'); 

const storage = multer.memoryStorage(); 
const upload = multer({ storage }); 

router
    .get('/', colabController.getAllColab)
    .get('/:id', colabController.getoneColab)
    .post('/', upload.single('logotipo'), colabController.createColab)
    .patch('/:id', upload.single('logotipo'), colabController.updateColab)
    .delete('/:id', colabController.deleteColab);

module.exports = router;