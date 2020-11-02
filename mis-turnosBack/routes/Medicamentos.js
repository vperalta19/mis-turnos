//Imports
const express = require('express');
const router = express.Router();

const mysqlConnection = require('../Database');
//------------------------------------------------------------------------------------------------------------
//Traer todos los medicamentos segun 1 usuario
router.get('/getMedicamentosUsuario/:id', (req,res)=> {
    let idUser = req.params.id;
    mysqlConnection.query('SELECT * FROM Medicamentos WHERE paciente = ?',[idUser],function(err, result){
        if (err) throw err;
        res.send(result);
    });
})

//Traer 1 medicamento
router.get('/getMedicamento/:id', (req,res)=> {
    let idMedicamento = req.params.id;
    mysqlConnection.query('SELECT * FROM Medicamentos WHERE idMedicamentos = ?',[idMedicamento],function(err, result){
        if (err) throw err;
        res.send(result);
    });
})

//------------------------------------------------------------------------------------------------------------
//Crear un medicamento
router.post('/crearMedicamento', (req, res) => {
    let {paciente,droga,dosis,notas} = req.body;
    let query = `INSERT INTO Medicamentos (paciente, droga, dosis , notas) VALUES (?,?,?,?)`;
    mysqlConnection.query(query, [paciente,droga,dosis,nota], (err, result) => {
        if(err) throw err;
        res.json({status:"OK"});
    }); 
});

//------------------------------------------------------------------------------------------------------------
router.delete('/crearMedicamento', (req, res) => {
    let {paciente,droga,dosis,notas} = req.body;
    let query = `INSERT INTO Medicamentos (paciente, droga, dosis , notas) VALUES (?,?,?,?)`;
    mysqlConnection.query(query, [paciente,droga,dosis,notas], (err, result) => {
        if(err) throw err;
        res.json({status:"OK"});
    }); 
});

//------------------------------------------------------------------------------------------------------------
module.exports = router;