//Imports
const express = require('express');
const router = express.Router();

const con = require('../Database');
//---------------------------------------

const { cloudinary } = require('../services/img.service');
//------------------------------------------------------------------------------------------------------------
//GET de Recetas
router.get('/getRecetas/:id',(req,res)=>{
    let idUser = req.params.id;
    let sql = "SELECT * FROM Recetas WHERE paciente = ?"
    con.query(sql, [idUser], (err, result) => {
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

//GET Receta específica
router.get('/getReceta/:idReceta',(req,res)=>{
    let idReceta = req.params.idReceta;
    let sql = "SELECT * FROM Recetas WHERE idRecetas = ?"
    con.query(sql, [idReceta], (err, result) => {
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
//Crear una Receta
router.post('/crearReceta', async (req, res) => {
    try {
        let {paciente} = req.body;
        let{descripcion} =req.body;
        let{imagen}=req.body;
        let uploadResponse = await cloudinary.uploader.upload(imagen);
        let link = uploadResponse.secure_url;
        let sql = `INSERT INTO Recetas (descripcion, imagen, paciente) VALUES (?,?,?)`;
        con.query(sql, [descripcion,link,paciente], (err, result) => {
            if(err){
                console.log(err)
                res.status(500).json({err:"Error"});
            }else{
                res.status(200).json({msg:"OK"});
            }
    }); 
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
});

//------------------------------------------------------------------------------------------------------------
//Borrar una Receta
router.delete('/borrarReceta/:idReceta', (req, res) => {
    let {idReceta} = req.params;
    let sql = `DELETE FROM Recetas WHERE idRecetas = ?`;
    con.query(sql, [idReceta], (err, result) => {
        if(err){
            res.status(404).json({err:"Not found"});
        }else{
            res.status(200).json({msg:"OK"});
        }
    }); 
});

//------------------------------------------------------------------------------------------------------------
module.exports = router;