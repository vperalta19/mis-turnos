//Imports
const express = require('express');
const router = express.Router();

const con = require('../Database');

// import {mailSend} from '../services/mailer';
const mails = require('../services/mailer');
//------------------------------------------------------------------------------------------------------------

router.post('/registrarUsuario', function(req,res){
    var registrar = req.body
    var {dni} = registrar
        con.query('SELECT dni FROM Usuarios WHERE dni = ?',  dni, function(err,row,field){
            if(err) {
                throw err;
            }
            else if (row.length > 0) {                                         
                res.status(201)
                res.send('Ya existe el Usuario')
            }
            else if(registrar.rol === 'medico' && (!registrar.matricula || !registrar.especialidad)){
                res.status(404)
            }
            else{
                if(!registrar.nroSocio){
                    registrar.nroSocio = null
                }
                if(!registrar.ooss){
                    registrar.ooss = null
                }
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
                    registrar.fechaNacimiento,
                    registrar.rol
                ];
                con.query('INSERT INTO Usuarios (dni, nombre, apellido, email, contraseña, telefono, estado, ooss, nroSocio, fechaNacimiento, rol) VALUES (?,?,?,?,?,?,?,?,?,?,?)', usuarioArray, function(err,result){
                    if(err){
                        throw err;
                    }
                    let cuerpo = "<body>Bienvenido " +registrar.nombre + " " +registrar.apellido + ".\n" + "Ya puedes sacar turnos entrando al siguiente link: \n www.mis-turnos.com</body>";
					mails.mailSend("¡BIENVENIDO a Mis-turnos.com",registrar.email,cuerpo);
                    res.status(200)
                    res.send('Usuario Creado')
                });
            } 

        });
});

router.put('/editarUsuario/:dni', function(req,res){
    var actualizar = req.body;
    var {dni} = req.params;
    var usuarioArray = [
        actualizar.dni, 
        actualizar.nombre, 
        actualizar.apellido, 
        actualizar.email, 
        actualizar.telefono, 
        actualizar.ooss,
        actualizar.nroSocio,
        actualizar.fechaNacimiento,
        actualizar.contraseña,
        dni
    ];
    con.query('SELECT dni FROM Usuarios WHERE dni = ?', dni, function(err,row,field){
        if(err) {
            throw err;
        }
        else if (row.length === 0) {  
            res.status(404)                                                 
            res.send('No existe el usuario')
        }
        else{
            con.query('UPDATE Usuarios SET dni = ?, nombre = ?, apellido = ?, email = ?, telefono = ?, ooss = ?, nroSocio = ?, fechaNacimiento = ?, contraseña = ? WHERE dni = ?', usuarioArray, function(err,result){
                if(err){
                    throw err;
                }
                res.status(200)
                res.send('se actualizo correctamente');
            });
        }
    });
});


router.put('/eliminarUsuario/:dni', function(req,res){
    var {dni} = req.params;
    console.log(dni)
    con.query('SELECT dni FROM Usuarios WHERE dni = ?', dni, function(err,row,field){
        if(err) {
            throw err;
        }
        else if (row.length === 0) {         
            res.status(404)                                          
            res.send('No existe el usuario')
        }
        else{
            con.query('UPDATE Usuarios SET estado = "2" WHERE dni = ?',dni, function(err,result){
                if(err){
                    throw err;
                }
                else{
                    con.query('DELETE FROM Turnos WHERE paciente = ?',dni, function(err,result){
                        if(err){
                            throw err;
                        }
                        else{
                            
                            res.status(200)
                            res.send('se elimino correctamente');
                        }
                        
                    });
                }
                
            });
        }
    });
    
});

router.post('/login', function(req,res){
    const {dni} = req.body
    const {contraseña} = req.body
    con.query('SELECT * FROM Usuarios WHERE dni = ? AND contraseña = ?',[dni,contraseña],  function(err,result){
        if(err) {
            throw err;
        }
        else if(result.length!==0){
            res.status(200)
            res.send(result)
        }
        else{
            res.status(404)
            res.send('no existe el usuario')
        }
        
    });
});

router.get('/getUsuarios', function(req,res){
    con.query('SELECT * FROM Usuarios WHERE rol != "admin" && estado ="Activo"', function(err,result){
        if(err) {
            throw err;
        }
        res.send(result)
    });
});

router.get('/getPacientes', function(req,res){
    con.query('SELECT * FROM Usuarios WHERE rol = "paciente" && estado ="Activo"', function(err,result){
        if(err) {
            throw err;
        }
        res.send(result)
        
    });
});

router.get('/getUsuario/:dni', function(req,res){
    const {dni} = req.params
    con.query('SELECT * FROM Usuarios WHERE dni = ?',dni, function(err,result){
        if(err) {
            throw err;
        }
        res.send(result)
        
    });
});

//------------------------------------------------------------------------------------------------------------
module.exports = router;
