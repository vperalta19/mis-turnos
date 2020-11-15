//Imports
const nodemailer = require('nodemailer');
const express = require('express');
const router = express.Router();

const mysqlConnection = require('../Database');

// import {mailSend} from '../services/mailer';
const mails = require('../services/mailer');

//------------------------------------------------------------------------------------------------------------

// function mail(correoDireccion, htmlContenido, subject){
//     let transporter = nodemailer.createTransport({
//         service: 'hotmail',
//         auth: {
//         user: '-',
//         pass: '-'
//         }
//     });

//     let mailOptions = {
//     from: 'vaperalta@uade.edu.ar',
//     to: correoDireccion,
//     subject: subject,
//     html: htmlContenido
//     };

//     transporter.sendMail(mailOptions, function(error, info) {
// 		if (error) {
// 			console.log(error);
// 		} else {
// 			console.log('Email sent: ' + info.response);
// 		}
//     });
// }

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
					// mail(row[0].email, "Tienes un nuevo turno el día " + req.body.inicio.substring(0, 11), "Nuevo Turno");
					let cuerpo = "<body>Tienes un nuevo turno el día " +req.body.inicio.substring(0, 11)+ "</body>";
					mails.mailSend("¡Nuevo turno agregado! - Mis-turnos.com",row[0].email,cuerpo);
				}
			)
			mysqlConnection.query(
				'SELECT email FROM Usuarios WHERE rol = "medico"',
				(err, row, field) => {
					// mail(row[0].email, "Tienes un nuevo turno el día " + req.body.inicio.substring(0, 11), "Nuevo Turno");
					let cuerpo = "<body>Tienes un nuevo turno el día " +req.body.inicio.substring(0, 11)+ "</body>";
					mails.mailSend("¡Nuevo turno agregado! - Mis-turnos.com",row[0].email,cuerpo);
				}
			)
		}
	);
});

router.delete('/eliminarTurno/:id', function(req, res) {
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