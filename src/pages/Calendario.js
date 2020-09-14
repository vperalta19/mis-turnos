import React from 'react';
import Toolbar from '../components/Toolbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/calendario.css'

export default function Calendario() {
	return (
		<div className="container-fluid page-container">
			<div className="row row-no-padding">
				<div className="col p-0">
					<Toolbar></Toolbar>
				</div>
			</div>
			<div className="row main-container">
				<div className="col-12 col-lg-4 turnos-container-margin">
					<div className="turnos-container">
						<div className="turnos-title">
							<span>Turnos</span>
						</div>
					</div>
				</div>
				<div className="col-12 col-lg-8 calendar-container">

				</div>
			</div>
		</div>
	);
}