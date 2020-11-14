//Imports
const express = require('express');
const router = express.Router();

const mysqlConnection = require('../Database');

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
	mysqlConnection.query(`SELECT * FROM Turnos WHERE paciente = ${req.params.pacienteID}` , function(err, result){
		if (err) {
			throw err;
		}
		res.send(result);
	});
});

router.post('/crearTurno', function(req, res) {
	mysqlConnection.query(
		`INSERT INTO Turnos(paciente, fechaInicio, fechaFin) VALUES (${req.body.dni}, "${req.body.inicio}", "${req.body.fin}")`,
		function(err, result){
			if (err) {
				throw err;
			}
			res.send(result);
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