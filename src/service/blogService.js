const blogDB = require("../database/blogDB");

const getAllBlogs = async() => {
    const blogs = await blogDB.getAllBlogs();
    return blogs;
};

const getoneBlog = async(id) => {
    const blogs = await blogDB.getoneBlog(id);
    return blogs;
};

const createBlog = async(titulo, contenido, images, autor, fecha) => {
    const blogs = await blogDB.createBlog(titulo, contenido, images, autor, fecha);
    return blogs;
};

const updateBlog = async(titulo, contenido, images, autor, fecha, id) => {
    const blogs = await blogDB.updateBlog(titulo, contenido, images, autor, fecha, id);
    return blogs;
};

const deleteBlog = async(id) => {
    const blogs = await blogDB.deleteBlog(id);
    return blogs;
};

module.exports = {
    getAllBlogs,
    getoneBlog,
    createBlog,
    updateBlog,
    deleteBlog
};