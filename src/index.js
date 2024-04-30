require('dotenv').config();
const express = require('express');
const req = require('express/lib/request');

const app = express();
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Jalando en el puerto ${PORT} ヽ(•‿•)ノ`);
})