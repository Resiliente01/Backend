const blogProcess = require("../process/blogProcess");

const getAllBlogs = async(req, res) => {
    const blogs = await blogProcess.getAllBlogs();
    res.send(blogs);
};

const getoneBlog = async(req, res) => {
    const blogs = await blogProcess.getoneBlog(req.params.id);
    res.send(blogs);
};

const createBlog = async(req, res) => {
    const blogs = await blogProcess.createBlog(req.body.titulo, req.body.contenido, req.body.images, req.body.autor, req.body.fecha);
    res.send(blogs);
};

const updateBlog = async(req, res) => {
    const blogs = await blogProcess.updateBlog(req.body.titulo, req.body.contenido, req.body.images, req.body.autor, req.body.fecha, req.params.id);
    res.send(blogs);
};

const deleteBlog = async(req, res) => {
    const blogs = await blogProcess.deleteBlog(req.params.id);
    res.send(blogs);
};

module.exports = {
    getAllBlogs,
    getoneBlog,
    createBlog,
    updateBlog,
    deleteBlog
};