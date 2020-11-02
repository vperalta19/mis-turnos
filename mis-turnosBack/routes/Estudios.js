//Imports
const express = require('express');
const router = express.Router();

const mysqlConnection = require('../Database');
//------------------------------------------------------------------------------------------------------------
//GET de Estudios
router.get('/getEstudios/:id',(req,res)=>{
    let idUser = req.params.id;
    let sql = "SELECT * from Estudios WHERE paciente = ?"
    mysqlConnection.query(query, [idUser], (err, result) => {
        if(err) throw err;
        res.json({status:"OK"});
    });
});

//GET estudio específico
router.get('/getEstudio/:idEstudio',(req,res)=>{
    let idEstudio = req.params.idEstudio;
    let sql = "SELECT * from Estudios WHERE idEstudios = ?"
    mysqlConnection.query(query, [idEstudio], (err, result) => {
        if(err) throw err;
        res.json({status:"OK"});
    });
});

//------------------------------------------------------------------------------------------------------------
//Crear un Estudio
router.post('/crearEstudio', (req, res) => {
    let {paciente,nombreEst,resultado,notas} = req.body;
    let query = `INSERT INTO Estudios (paciente, nombreEstudio, resultado, notas) VALUES (?,?,?,?)`;
    mysqlConnection.query(query, [paciente,nombreEst,resultado,notas], (err, result) => {
        if(err) throw err;
        res.json({status:"OK"});
    }); 
});

//------------------------------------------------------------------------------------------------------------
//Borrar un Estudio
router.delete('/borrarEstudio', (req, res) => {
    let {idEstudio} = req.body;
    let query = `DELETE FROM Estudios WHERE idEstudios = ?`;
    mysqlConnection.query(query, [idEstudio], (err, result) => {
        if(err) throw err;
        res.json({status:"OK"});
    }); 
});


//------------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------------
module.exports = router;