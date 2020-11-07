//Imports
const express = require('express');
const router = express.Router();

const mysqlConnection = require('../Database');
//------------------------------------------------------------------------------------------------------------
//Traer todos los medicamentos segun 1 usuario
router.get('/getMedicamentosUsuario/:id', (req,res)=> {
    let idUser = req.params.id;
    mysqlConnection.query('SELECT * FROM Medicamentos WHERE paciente = ?',[idUser],function(err, result){
        if(err){
            res.status(500).json({err:"Error"});
        }else{
            if(result.length == 0){
                return res.status(404).json({err:"Not found"});
            }
            res.status(200).send(result); //Esto funciona????
        }
    });
})

//Traer 1 medicamento
router.get('/getMedicamento/:id', (req,res)=> {
    let idMedicamento = req.params.id;
    mysqlConnection.query('SELECT * FROM Medicamentos WHERE idMedicamentos = ?',[idMedicamento],function(err, result){
        if(err){
            res.status(500).json({err:"Error"});
        }else{
            if(result.length == 0){
                return res.status(404).json({err:"Not found"});
            }
            res.status(200).send(result); //Esto funciona????
        }
    });
})

//------------------------------------------------------------------------------------------------------------
//Crear un medicamento
router.post('/crearMedicamento', (req, res) => {
    let {paciente,droga,dosis,notas} = req.body;
    let query = `INSERT INTO Medicamentos (paciente, droga, dosis , notas) VALUES (?,?,?,?)`;
    mysqlConnection.query(query, [paciente,droga,dosis,notas], (err, result) => {
        if(err){
            res.status(500).json({err:"Error"});
        }else{
            res.status(201).json({msg:"OK"});
        }
    }); 
});

//------------------------------------------------------------------------------------------------------------
router.delete('/crearMedicamento', (req, res) => {
    let {paciente,droga,dosis,notas} = req.body;
    let query = `INSERT INTO Medicamentos (paciente, droga, dosis , notas) VALUES (?,?,?,?)`;
    mysqlConnection.query(query, [paciente,droga,dosis,notas], (err, result) => {
        if(err){
            res.status(404).json({err:"Not found"});
        }else{
            res.status(200).json({msg:"OK"});
        }
    }); 
});

//------------------------------------------------------------------------------------------------------------
module.exports = router;