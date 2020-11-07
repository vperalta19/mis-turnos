//Imports
const express = require('express');
const router = express.Router();

const mysqlConnection = require('../Database');

const { cloudinary } = require('../services/img.service');
//------------------------------------------------------------------------------------------------------------
//GET de Recetas
router.get('/getRecetas/:id',(req,res)=>{
    let idUser = req.params.id;
    let sql = "SELECT * from Recetas WHERE paciente = ?"
    mysqlConnection.query(sql, [idUser], (err, result) => {
        if(err){
            res.status(404).json({err:"Not found"});
        }else{
            res.status(200).send(result); //Esto funciona????
        }
    });
});

//GET Receta específica
router.get('/getReceta/:idReceta',(req,res)=>{
    let idReceta = req.params.idReceta;
    let sql = "SELECT * from Recetas WHERE idRecetas = ?"
    mysqlConnection.query(sql, [idReceta], (err, result) => {
        if(err){
            res.status(404).json({err:"Not found"});
        }else{
            res.status(200).send(result); //Esto funciona????
        }
    });
});

//------------------------------------------------------------------------------------------------------------
//Crear una Receta
router.post('/crearReceta', (req, res) => {
    let {paciente,descripcion,imagen} = req.body;
    let uploadResponse = await cloudinary.uploader.upload(imagen);
    let link = uploadResponse.secure_url;
    let sql = `INSERT INTO Estudios (descripcion, imagen, paciente) VALUES (?,?,?,?)`;
    mysqlConnection.query(sql, [descripcion,link,paciente], (err, result) => {
        if(err){
            res.status(500).json({err:"Error"});
        }else{
            res.status(201).json({msg:"OK"});
        }
    }); 
});

//------------------------------------------------------------------------------------------------------------
//Borrar una Receta
router.delete('/borrarReceta', (req, res) => {
    let {idReceta} = req.body;
    let sql = `DELETE FROM Recetas WHERE idRecetas = ?`;
    mysqlConnection.query(sql, [idReceta], (err, result) => {
        if(err){
            res.status(404).json({err:"Not found"});
        }else{
            res.status(200).json({msg:"OK"});
        }
    }); 
});

//------------------------------------------------------------------------------------------------------------
module.exports = router;