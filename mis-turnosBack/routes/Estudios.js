//Imports
const express = require('express');
const router = express.Router();

const mysqlConnection = require('../Database');
//------------------------------------------------------------------------------------------------------------
//GET de Estudios
router.get('/getEstudios/:id',(req,res)=>{
    let idUser = req.params.id;
    let sql = "SELECT * from Estudios WHERE paciente = ?"
    mysqlConnection.query(sql, [idUser], (err, result) => {
        if(err){
            res.status(404).json({err:"Not found"});
        }else{
            res.status(200).send(result); //Esto funciona????
        }
    });
});

//GET estudio específico
router.get('/getEstudio/:idEstudio',(req,res)=>{
    let idEstudio = req.params.idEstudio;
    let sql = "SELECT * from Estudios WHERE idEstudios = ?"
    mysqlConnection.query(sql, [idEstudio], (err, result) => {
        if(err){
            res.status(404).json({err:"Not found"});
        }else{
            res.status(200).send(result); //Esto funciona????
        }
    });
});

//------------------------------------------------------------------------------------------------------------
//Crear un Estudio
router.post('/crearEstudio', (req, res) => {
    let {paciente,nombreEst,resultado,notas} = req.body;
    let sql = `INSERT INTO Estudios (paciente, nombreEstudio, resultado, notas) VALUES (?,?,?,?)`;
    mysqlConnection.query(sql, [paciente,nombreEst,resultado,notas], (err, result) => {
        if(err) throw err;
        res.json({status:"OK"});
    }); 
});

//------------------------------------------------------------------------------------------------------------
//Borrar un Estudio
router.delete('/borrarEstudio', (req, res) => {
    let {idEstudio} = req.body;
    let sql = `DELETE FROM Estudios WHERE idEstudios = ?`;
    mysqlConnection.query(sql, [idEstudio], (err, result) => {
        if(err) throw err;
        res.json({status:"OK"});
    }); 
});

//------------------------------------------------------------------------------------------------------------
module.exports = router;