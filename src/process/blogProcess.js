const blogService = require("../service/blogService");

const getAllBlogs = async() => {
    const blogs = await blogService.getAllBlogs();
    return blogs;
};

const getoneBlog = async(id) => {
    const blogs = await blogService.getoneBlog(id);
    return blogs;
};

const createBlog = async(titulo, contenido, images, autor, fecha) => {
    const blogs = await blogService.createBlog(titulo, contenido, images, autor, fecha);
    return blogs;
};

const updateBlog = async(titulo, contenido, images, autor, fecha, id) => {
    const blogs = await blogService.updateBlog(titulo, contenido, images, autor, fecha, id);
    return blogs;
};

const deleteBlog = async(id) => {
    const blogs = await blogService.deleteBlog(id);
    return blogs;
};

module.exports = {
    getAllBlogs,
    getoneBlog,
    createBlog,
    updateBlog,
    deleteBlog
};