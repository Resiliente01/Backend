require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const req = require("express/lib/request");
const cors = require('cors');

const v1Usuario = require('./v1/routes/usuarioRoutes');
const v1Comentario = require('./v1/routes/comentarioRoutes')

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());
app.use("/api/v1/usuario", v1Usuario);
app.use("/api/v1/comentario", v1Comentario);

app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT} ヽ(•‿•)ノ`);
})