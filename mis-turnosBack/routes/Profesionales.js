//Imports
const express = require('express');
const router = express.Router();

const con = require('../Database');
//------------------------------------------------------------------------------------------------------------
router.post('/registrarPaciente', function(req,res){
    var registrar = req.body
    var dni = registrar.dni
    con.query('SELECT dni FROM Pacientes WHERE dni = ?',  dni, function(err,row,field){
        if(err) {
            throw err;
        }
        else if (row.length > 0) {                                                   
            return res.send('ese dni ya esta registrado')
        }
        else{
            var usuarioArray = [
                dni, 
                registrar.nombre, 
                registrar.apellido, 
                registrar.email, 
                registrar.contraseña, 
                registrar.telefono, 
                1,
                registrar.ooss,
                registrar.nroSocio,
                registrar.fechaNacimiento
            ];
            con.query('INSERT INTO Pacientes (dni, nombre, apellido, email, contraseña, telefono, estado, ooss, nroSocio, fechaNacimiento) VALUES (?,?,?,?,?,?,?,?,?,?)', usuarioArray, function(err,result){
                if(err){
                    throw err;
                }
                res.send('cree el paciente: ' + result.insertId);
            });
        } 

     });
});

router.post('/registrarProfesional', function(req,res){
    var registrar = req.body;
    con.query('SELECT dni FROM Profesionales WHERE dni = ?',  registrar.dni, function(err,row,field){
        if(err) {
            throw err;
        }
        else if (row.length > 0) {                                                   
            return res.send('ese dni ya esta registrado')
        }
        else{
            var usuarioArray = [
                registrar.dni, 
                registrar.nombre, 
                registrar.apellido, 
                registrar.email, 
                registrar.contraseña, 
                registrar.telefono, 
                registrar.estado,
                registrar.matricula,
                registrar.especialidad,
                registrar.rol
            ];
            con.query('INSERT INTO Profesionales (dni, nombre, apellido, email, contraseña, telefono, estado, matricula, especialidad, rol) VALUES (?,?,?,?,?,?,?,?,?,?)', usuarioArray, function(err,result){
                if(err){
                    throw err;
                }
                res.send('cree el usuario: ' + result.insertId);
            });
        } 

     });
});

router.put('/editarProfesional/:dni', function(req,res){
    var actualizar = req.body;
    var dni = req.params.dni;
    var usuarioArray = [
        actualizar.dni, 
        actualizar.nombre, 
        actualizar.apellido, 
        actualizar.email, 
        actualizar.telefono, 
        registrar.matricula,
        registrar.especialidad,
        registrar.rol,
        dni
    ];
    con.query('SELECT dni FROM Profesionales WHERE dni = ?', dni, function(err,row,field){
        if(err) {
            throw err;
        }
        else if (row.length === 0) {                                                   
            res.send('No existe el usuario')
        }
        else{
            con.query('UPDATE Profesionales SET dni = ?, nombre = ?, apellido = ?, email = ?, contraseña = ?, telefono = ?, matricula = ?, especialidad = ?', usuarioArray, function(err,result){
                if(err){
                    throw err;
                }
                res.send('se actualizo correctamente');
            });
        }
    });
});


router.delete('/eliminarProfesional/:dni', function(req,res){
    var {dni} = req.params;
    con.query('SELECT dni FROM Profesionales WHERE dni = ?', dni, function(err,row,field){
        if(err) {
            throw err;
        }
        else if (row.length === 0) {                                                   
            res.send('No existe el usuario')
        }
        else{
            con.query('UPDATE Profesionales SET estado = 0', function(err,result){
                if(err){
                    throw err;
                }
                res.send('se elimino correctamente');
            });
        }
    });
    
});

//------------------------------------------------------------------------------------------------------------
module.exports = router;