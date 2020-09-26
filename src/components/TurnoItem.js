import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/TurnoItem.css'

class TurnoItem extends React.Component {

	render() {
		/** @type {Turno} */
		let turno = this.props.turno

		if (turno == null) {
			console.error("No se puede crear un item de turno si no se pasa un turno")
		}

		let name = this.props.pacienteView ? turno.getProfesional() : turno.getPaciente();

		return (
			<div className={(this.props.className || "") + " turno-item"}>
				<div className="time">
					<div className="dia">{turno.getStringDate()}</div>
					<div className="hora">{turno.getStringTime()}</div>
				</div>
				<div className="name">
					{name}
				</div>
			</div>
		);
	}

}

export default TurnoItem;