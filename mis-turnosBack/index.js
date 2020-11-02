//Imports
const express = require('express');
const app = express();
//------------------------------------------------------------------------------------------------------------

//Creo port para indicar el puerto en el que va a funcionar el servidor
const port = 3500;
//------------------------------------------------------------------------------------------------------------

//Middlewares
app.use(express.json());
//------------------------------------------------------------------------------------------------------------

//Routes
// app.use(require('./routes/Usuarios'));
// app.use(require('./routes/Turnos'));
// app.use(require('./routes/Recetas'));
// app.use(require('./routes/franjaHoraria'));
// app.use(require('./routes/Medicamentos'));
// app.use(require('./routes/Estudios'));
// app.use(require('./routes/Novedades'));

//------------------------------------------------------------------------------------------------------------

//Levantando el server con express
app.listen(port,function(err){
    if(err) throw err;
    console.log('App escuchando en http://localhost:'+port);
});
//------------------------------------------------------------------------------------------------------------