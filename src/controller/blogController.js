const blogProcess = require("../process/blogProcess");

// Obtener todos los blogs
const getAllBlogs = async (req, res) => {
    try {
        const blogs = await blogProcess.getAllBlogs();
        const blogsWithBase64Images = blogs.map(blog => {
            if (blog.images) {
                blog.images = Buffer.from(blog.images).toString('base64'); 
            }
            return blog; 
        }); 
        res.status(200).json(blogsWithBase64Images); 
    } catch (error) {
        console.error('Error al obtener blogs', error); 
        res.status(502).json({ error: 'Error al obtener blogs' }); 
    }            
};

// Obtener un blog por ID
const getoneBlog = async (req, res) => {
    try {
        const blog = await blogProcess.getoneBlog(req.params.id);
        if (blog) {
            if (blog.images) {
                blog.images = Buffer.from(blog.images).toString('base64'); 
            }
            res.status(200).json(blog); 
        } else {
            res.status(404).json({ error: 'Blog no encontrado' });
        }
    } catch (error) {
        console.error('Error al obtener un blog', error); 
        res.status(502).json({ error: 'Error al obtener un blog' }); 
    }    
};

// Crear un nuevo blog
const createBlog = async (req, res) => {
    try {
        const { titulo, contenido, autor, fecha } = req.body; 
        let imageBuffer = null; 
        if (req.file) {
            imageBuffer = req.file.buffer; 
        }
        const blog = await blogProcess.createBlog(titulo, contenido, imageBuffer, autor, fecha);
        res.status(200).json(blog); 
    } catch (error) {
        console.error('Error al crear un blog', error); 
        res.status(502).json({ error: 'Error al crear un blog' }); 
    }    
};

// Actualizar un blog existente
const updateBlog = async (req, res) => {
    try {
        const { titulo, contenido, autor, fecha } = req.body; 
        let imageBuffer = null; 
        if (req.file) {
            imageBuffer = req.file.buffer; 
        }
        const blog = await blogProcess.updateBlog(titulo, contenido, imageBuffer, autor, fecha, req.params.id);
        if (blog) {
            res.status(200).json(blog); 
        } else {
            res.status(404).json({ error: 'Blog no encontrado' });
        }
    } catch (error) {
        console.error('Error al actualizar un blog', error); 
        res.status(502).json({ error: 'Error al actualizar un blog' }); 
    }
};

// Eliminar un blog por ID
const deleteBlog = async (req, res) => {
    try {
        const result = await blogProcess.deleteBlog(req.params.id);
        if (result) {
            res.status(200).json({ message: 'Blog eliminado exitosamente' }); 
        } else {
            res.status(404).json({ error: 'Blog no encontrado' });
        }
    } catch (error) {
        console.error('Error al eliminar un blog', error); 
        res.status(502).json({ error: 'Error al eliminar un blog' }); 
    }
};

module.exports = {
    getAllBlogs,
    getoneBlog,
    createBlog,
    updateBlog,
    deleteBlog
};
