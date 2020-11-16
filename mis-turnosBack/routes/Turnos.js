//Imports
const nodemailer = require('nodemailer');
const express = require('express');
const router = express.Router();

const mysqlConnection = require('../Database');

const mails = require('../services/mailer');

//------------------------------------------------------------------------------------------------------------

router.get('/getTurnos', function(req, res) {
	mysqlConnection.query('SELECT idTurno, fechaInicio, fechaFin, nombre, apellido, dni FROM Turnos T, Usuarios U WHERE T.paciente = U.dni' , function(err, result){
		if (err) {
			throw err;
		}
		res.send(result);
	});
});

router.get('/getTurnosPaciente/:pacienteID', function(req, res) {
	mysqlConnection.query(`SELECT idTurno, fechaInicio, fechaFin, nombre, apellido, dni FROM Turnos T, Usuarios U WHERE T.paciente = U.dni && T.paciente = ${req.params.pacienteID}` , function(err, result){
		if (err) {
			throw err;
		}
		res.send(result);
	});
});

//------------------------------------------------------------------------------------------------------------

router.post('/crearTurno', function(req, res) {
	mysqlConnection.query(
		`INSERT INTO Turnos(paciente, fechaInicio, fechaFin) VALUES (${req.body.dni}, "${req.body.inicio}", "${req.body.fin}")`,
		function(err, result) {
			if (err) {
				throw err;
			}
			
			res.send(result);

			mysqlConnection.query(
				"SELECT email FROM Usuarios WHERE dni = " +  req.body.dni,
				(err, row, field) => {
					let cuerpo = "<body>Tienes un nuevo turno el día " +req.body.inicio.substring(0, 11)+ " a las " + req.body.inicio.substring(11, 16) + "</body>";
					mails.mailSend("¡Nuevo turno agregado! - Mis-turnos.com",row[0].email,cuerpo);
				}
			)
			mysqlConnection.query(
				'SELECT email FROM Usuarios WHERE rol = "medico"',
				(err, row, field) => {
					let cuerpo = "<body>Tienes un nuevo turno el día " +req.body.inicio.substring(0, 11)+ " a las " + req.body.inicio.substring(11, 16) + "</body>";
					mails.mailSend("¡Nuevo turno agregado! - Mis-turnos.com",row[0].email,cuerpo);
				}
			)
		}
	);
});

//------------------------------------------------------------------------------------------------------------

router.delete('/eliminarTurno/:id', function(req, res) {
	mysqlConnection.query(
		`SELECT * From Turnos WHERE idTurno = ${req.params.id}`,
		function(err, result){
			if (err) {
				throw err;
			}
			console.log(result[0]);
			console.log(result[0].paciente)
			let dni = result[0].paciente;
			let inicioDate = result[0].fechaInicio;
			console.log("TODO : " + inicioDate);

			mysqlConnection.query(
				"SELECT email FROM Usuarios WHERE dni = " + dni,
				(err, row, field) => {
					let cuerpo = "<body>Se ha cancelado el turno del día " + inicioDate + "</body>";
					mails.mailSend("Turno cancelado - Mis-turnos.com",row[0].email,cuerpo);
				}
			)
			mysqlConnection.query(
				'SELECT email FROM Usuarios WHERE rol = "medico"',
				(err, row, field) => {
					let cuerpo = "<body>Se ha cancelado el turno del día " + inicioDate + "</body>";
					mails.mailSend("Turno cancelado - Mis-turnos.com",row[0].email,cuerpo);
				}
			)
		}
	);
	mysqlConnection.query(
		`DELETE From Turnos WHERE idTurno = ${req.params.id}`,
		function(err, result){
			if (err) {
				throw err;
			}
			res.send(result);
		}
	);
});

//------------------------------------------------------------------------------------------------------------
module.exports = router;