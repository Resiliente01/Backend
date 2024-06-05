const express = require('express');
const router = express.Router();
const blogController = require('../../controller/blogController');

router
    .get('/', blogController.getAllBlogs)
    .get('/:id', blogController.getoneBlog)
    .post('/', blogController.createBlog)
    .patch('/:id', blogController.updateBlog)
    .delete('/:id', blogController.deleteBlog)

module.exports = router;