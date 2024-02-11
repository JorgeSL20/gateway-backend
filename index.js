/* const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

//Crearemos el servidor
const app = express();

//Conectamos a la bd
conectarDB();

app.use(cors());

app.use(express.json());

app.use('/api/productos', require('./routes/producto'));

app.listen(4000, () => {
    console.log('el servidor esta corriendo perfectamente');
}) */
// index.js

const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

// Crearemos el servidor
const app = express();

// Conectamos a la bd
conectarDB();

// Middleware para habilitar CORS
app.use(cors());

app.use(express.json());

// Rutas de la API
app.use('/api/productos', require('./routes/producto'));

// Puerto en el que escucha el servidor
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`El servidor está corriendo en el puerto ${PORT}`);
});
