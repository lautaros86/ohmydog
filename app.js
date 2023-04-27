//imports
const express = require('express');
const path = require('path');
require("dotenv").config();


//inicializacion
const app = express();
const port = process.env.PORT;


//routers
const indexRoutes = require('./src/routes/indexRoutes');


//indicar a la app lo que debe usar
app.use(express.static('public'));



//view engine
app.set('views',path.resolve(__dirname,'./src/views'));
app.set('view engine', 'pug');


//rutas
app.use('/', indexRoutes);



app.listen(port, () => {
    console.log(`Escuchando puerto ${port}`)
  });