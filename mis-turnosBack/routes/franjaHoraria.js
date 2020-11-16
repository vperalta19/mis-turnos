//Imports
const express = require('express');
const router = express.Router();

const mysqlConnection = require('../Database');
//------------------------------------------------------------------------------------------------------------

router.get('/getFranja', function(req, res) {
	mysqlConnection.query('SELECT * FROM FranjaHoraria' , function(err, result){
		if (err) {
			throw err;
		}
		res.send(result);
	});
});

router.post('/setFranja', function(req, res) {
	let query = "DELETE FROM FranjaHoraria WHERE dia != '';"
	for (let i = 0; i < req.body.list.length; i++) {
		const h = req.body.list[i];
		query += `INSERT INTO FranjaHoraria VALUES (${h.dia}, "${h.inicio}", "${h.fin}");`;
	}
	mysqlConnection.query(
		query,
		function(err, result) {
			if (err) {
				throw err;
			}
			res.send(result);
		}
	);
});


//------------------------------------------------------------------------------------------------------------
module.exports = router;