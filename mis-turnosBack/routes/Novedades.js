//Imports
const express = require('express');
const router = express.Router();

const mysqlConnection = require('../Database');
//------------------------------------------------------------------------------------------------------------
//GET Novedades
router.get('/getNovedades', (req,res)=> {
    mysqlConnection.query('SELECT * FROM Novedades ORDER BY fecha DESC',function(err, result){
        if (err) throw err;
        res.send(result);
    });
});

//get novedades segun un id
router.get('/getNovedad/:id', (req,res)=> {
    let idNovedad = req.params.id;
    mysqlConnection.query('SELECT * FROM Novedades WHERE idNovedad = ? ',[idNovedad],function(err, result){
        if (err) throw err;
        res.send(result);
    });
});

//Get Novedades desde una fecha
router.post('/getNovedadesDesde', (req,res)=> {
    let {fechaDesde} = req.body;
    mysqlConnection.query('SELECT * FROM Novedades WHERE fecha >= ? ORDER BY fecha DES',[fechaDesde],function(err, result){
        if (err) throw err;
        res.send(result);
    });
});

//------------------------------------------------------------------------------------------------------------
//Crear una Novedad
router.post('/crearNovedad', (req, res) => {
    let {titulo,texto,img} = req.body;
    let query = `INSERT INTO Novedades (titulo,texto,img) VALUES (?,?,?);`
    mysqlConnection.query(query, [titulo,texto,img], (err, result) => {
        if(err){
            res.json({status:"Error"});
        } else{
            res.json({status:"OK"});
        }
    }); 
});

//------------------------------------------------------------------------------------------------------------
//Borrar una novedad
router.delete('/crearNovedad', (req, res) => {
    let {idNovedad} = req.body;
    let query = `DELETE FROM Novedades WHERE idNovedad = ?;`
    mysqlConnection.query(query, [idNovedad], (err, result) => {
        if(err){
            res.json({status:"Error"});
        } else{
            res.json({status:"OK"});
        }
    }); 
});

//------------------------------------------------------------------------------------------------------------

router.post('/imagenUpload', async (req, res) => {
    try {
        const fileStr = req.body.data;
        const uploadResponse = await cloudinary.uploader.upload(fileStr);
        console.log(uploadResponse.secure_url);
        res.json({ msg: 'yaya' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
});

//------------------------------------------------------------------------------------------------------------
module.exports = router;