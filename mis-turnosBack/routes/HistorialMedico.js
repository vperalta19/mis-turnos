//Imports
const express = require('express');
const router = express.Router();

const mysqlConnection = require('../Database');
//------------------------------------------------------------------------------------------------------------
//GET de Historiales
router.get('/getHistoriales/:id',(req,res)=>{
    let idUser = req.params.id;
    let sql = "SELECT * FROM HistorialMedico WHERE paciente = ?"
    mysqlConnection.query(sql, [idUser], (err, result) => {
        if(err){
            res.status(500).json({err:"Error"});
        }else{
            if(result.length == 0){
                return res.status(404).json({err:"Not found"});
            }
            res.status(200).send(result); 
        }
    });
});

//------------------------------------------------------------------------------------------------------------
//Crear un Historial
router.post('/crearHistorial', (req, res) => {
    let {paciente,descripcion} = req.body;
    let sql = `INSERT INTO HistorialMedico (paciente, descripcion) VALUES (?,?)`;
    mysqlConnection.query(sql, [paciente,descripcion], (err, result) => {
        if(err){
            res.status(500)
            console.log(err)
            res.send('error')
        }else{
            res.status(200)
            res.send('exito')
        }
    }); 
});

//------------------------------------------------------------------------------------------------------------
//Editar un Historial
router.put('/editarHistorial', (req, res) => {
    let {descripcion, idHistorialMedico} = req.body;
    let sql = `UPDATE HistorialMedico SET descripcion = ? WHERE idHistorialMedico = ?`;
    mysqlConnection.query(sql, [descripcion, idHistorialMedico], (err, result) => {
        if(err){
            res.status(404)
            res.send('error')
        }else{
            res.status(200)
            res.send('exito')
        }
    }); 
});

//------------------------------------------------------------------------------------------------------------
//Borrar un Historial
router.delete('/borrarHistorial/:idHistorialMedico', (req, res) => {
    let {idHistorialMedico} = req.params;
    let sql = `DELETE FROM HistorialMedico WHERE idHistorialMedico = ?`;
    mysqlConnection.query(sql, [idHistorialMedico], (err, result) => {
        if(err){
            res.status(404)
            res.send('error')
        }else{
            res.status(200)
            res.send('exito')
        }
    }); 
});

//------------------------------------------------------------------------------------------------------------
module.exports = router;