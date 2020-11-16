//Imports
const mysql = require('mysql');

// acquireTimeout: 1000000

// const path  = require('path')
// const  publicDirectory = path.join(__dirname, '../public/')
// app.use(express.static(publicDirectory));

//------------------------------------------------------------------------------------------------------------

//Datos de hosteo
const mysqlConnection = mysql.createConnection({
    host: 'db4free.net',
    user: 'misturnos',
    password: 'uade2020',
    database: 'misturnos',
    multipleStatements: true
});
//------------------------------------------------------------------------------------------------------------

//Conexión
mysqlConnection.connect(function (err) {
    if (err) throw err;
    console.log('Base de datos conectada.');
});
//------------------------------------------------------------------------------------------------------------

module.exports = mysqlConnection;