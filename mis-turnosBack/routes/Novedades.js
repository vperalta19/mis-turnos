//Imports
const express = require('express');
const router = express.Router();

const mysqlConnection = require('../Database');

const { cloudinary } = require('../services/img.service');
//------------------------------------------------------------------------------------------------------------
//GET Novedades
router.get('/getNovedades', (req,res)=> {
    mysqlConnection.query('SELECT * FROM Novedades ORDER BY fecha DESC',function(err, result){
        if(err){
            res.status(500).json({err:"Error"});
        }else{
            if(result.length == 0){
                return res.status(404).json({err:"Not found"});
            }
            res.status(200).send(result); //Esto funciona????
        }
    });
});

//get novedades segun un id
router.get('/getNovedad/:id', (req,res)=> {
    let idNovedad = req.params.id;
    mysqlConnection.query('SELECT * FROM Novedades WHERE idNovedad = ? ',[idNovedad],function(err, result){
        if(err){
            res.status(500).json({err:"Error"});
        }else{
            if(result.length == 0){
                return res.status(404).json({err:"Not found"});
            }
            res.status(200).send(result); //Esto funciona????
        }
    });
});

//Get Novedades desde una fecha
router.post('/getNovedadesDesde', (req,res)=> {
    let {fechaDesde} = req.body;
    mysqlConnection.query('SELECT * FROM Novedades WHERE fecha >= ? ORDER BY fecha DES',[fechaDesde],function(err, result){
        if(err){
            res.status(500).json({err:"Error"});
        }else{
            if(result.length == 0){
                return res.status(404).json({err:"Not found"});
            }
            res.status(200).send(result); //Esto funciona????
        }
    });
});

//------------------------------------------------------------------------------------------------------------
//Crear una Novedad
router.post('/crearNovedad', async (req, res) => {
    let {titulo,descripcion,imagen} = req.body;
    let uploadResponse = await cloudinary.uploader.upload(imagen);
    let link = uploadResponse.secure_url;
    let sql = `INSERT INTO Novedades (titulo,texto,img) VALUES (?,?,?);`
    mysqlConnection.query(sql, [titulo,descripcion,link], (err, result) => {
        if(err){
            console.log(err)
            res.status(500).json({ err:'Something went wrong'});
        } else{
            res.status(200).json({msg:'Ok'});
        }
    }); 
});

//------------------------------------------------------------------------------------------------------------
//Borrar una novedad
router.delete('/crearNovedad', (req, res) => {
    let {idNovedad} = req.body;
    let sql = `DELETE FROM Novedades WHERE idNovedad = ?;`
    mysqlConnection.query(sql, [idNovedad], (err, result) => {
        if(err){
            res.status(404).json({err:"Not found"});
        }else{
            res.status(200).json({msg:"OK"});
        }
    }); 
});

//------------------------------------------------------------------------------------------------------------
module.exports = router;