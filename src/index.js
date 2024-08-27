require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Client } = require('pg');

const v1Usuario = require('./v1/routes/usuarioRoutes');
const v1Comentario = require('./v1/routes/comentarioRoutes');
const v1Cita = require('./v1/routes/citaRoutes');
const v1Blog = require('./v1/routes/blogRoutes');
const v1Psicologo = require('./v1/routes/psicologoRoutes');
const v1Paciente = require('./v1/routes/paciente'); 
const v1Colabs = require('./v1/routes/colabRoutes'); 

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/v1/usuario", v1Usuario);
app.use("/api/v1/comentario", v1Comentario);
app.use("/api/v1/cita", v1Cita);
app.use("/api/v1/blog", v1Blog);
app.use("/api/v1/psicologo", v1Psicologo);
app.use("/api/v1/paciente", v1Paciente); 
app.use("/api/v1/colab", v1Colabs); 

app.get('/', (req, res) => {
    res.send("Backend encendido ");
});

app.get('/ping', async (req, res) => {
    const client = new Client({
        connectionString: process.env.DATABASE_URL
    });

    try {
        await client.connect();
        const result = await client.query("SELECT $1::text as message", ['BD conectada']);
        console.log(result.rows[0].message);
        res.json(result.rows[0]);        
    } catch (error) {
        console.error('Error al conectar con PostgreSQL', error);
        res.status(500).send('Error al conectar con la base de datos');
    } finally {
        await client.end();
    }
});



// Middleware para capturar errores en rutas no definidas
app.use((req, res, next) => {
    res.status(404).send('Ruta no encontrada');
});

// Middleware para manejar errores
app.use((err, req, res, next) => {
    console.error('Error interno:', err.stack);
    res.status(500).send('Error interno del servidor');
});

app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT} ヽ(•‿ •)ノ`);
});
