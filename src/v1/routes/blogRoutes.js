const express = require('express');
const router = express.Router();
const blogController = require('../../controller/blogController');

const multer = require('multer'); 

const storage = multer.memoryStorage(); 
const upload = multer({ storage }); 

router
    .get('/', blogController.getAllBlogs)
    .get('/:id', blogController.getoneBlog)
    .post('/', upload.single('images'), blogController.createBlog)
    .patch('/:id', upload.single('images'), blogController.updateBlog)
    .delete('/:id', blogController.deleteBlog);

module.exports = router;