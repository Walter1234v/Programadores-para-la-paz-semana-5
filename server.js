const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hola mundo desde Express');
});

app.get('/saludo', (req, res) => {
    res.send('Bienvenido a saludo');
});

app.get('/usuario/:nombre', (req, res) => {
    res.send(`Hola ${req.params.nombre}`);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

