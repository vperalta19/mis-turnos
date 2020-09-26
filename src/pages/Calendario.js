import React from 'react'

import Turno from '../classes/Turno'

import Toolbar from '../components/Toolbar'
import TurnoItem from '../components/TurnoItem'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listGridPlugin from '@fullcalendar/list'

import 'bootstrap/dist/css/bootstrap.min.css'
import './../assets/css/calendario.css'

class Calendario extends React.Component {

	componentDidMount() {
		window.dispatchEvent(new Event('resize'));
	}

	render() {
		
		let pacienteView = this.props.pacienteView || true;

		let turnos = [
			new Turno(1601323200000, 1601325000000, "Profesional", "Paciente")
		];

		let events = turnos.map((v) => v.getCalendarEvent(pacienteView))

		let calendar = (
			<FullCalendar
				height="100%"
				plugins={[ dayGridPlugin, timeGridPlugin, listGridPlugin ]}
				headerToolbar={{
					left: "prev,next today",
					center: "title",
					right: "timeGridDay,timeGridWeek,dayGridMonth,listWeek"
				}}
				initialView="timeGridWeek"
				allDaySlot={false}
				timeFormat={"HH:mm"} //TODO todavia no anda esto
				events={events}
			/>
		);

		let turnosList = (
			<div className="turnos-container">
				<div id="turno-detail" style={{display: "none"}} className="turno-detail-container">
					<div className="turno-detail">
						<div className="detail-title">
							<span>Info del Turno</span>
						</div>
						<div className="close"><span></span></div>
						<div id="detail-fecha" className="detail-fecha"></div>
						<div id="detail-hora" className="detail-hora"></div>
						<div className="detail-buttons">
							<button className="reprogramar">Reprogramar</button>
							<button className="cancelar">Cancelar</button>
						</div>
					</div>
				</div>
				<div className="turnos-title">
					<span>Turnos</span>
				</div>
				<ul className="turnos-list">
					{
						turnos.map(
							(value, index) => {
								return (
									<li className="turno-container" key={index} onClick={() => {this.openTurno(value)}}>
										<TurnoItem className="turno" turno={value} pacienteView={pacienteView}></TurnoItem>
									</li>
								)
							}
						)
					}
				</ul>
			</div>
		);

		return (
			<div className="container-fluid page-container">
				<div className="row row-no-padding">
					<div className="col p-0">
						<Toolbar></Toolbar>
					</div>
				</div>
				<div className="calendar-desktop">
					<div className="row main-container">
						<div className="col-12 col-lg-4 turnos-container-margin">
							{turnosList}
						</div>
						<div className="col-12 col-lg-8 calendar-container">
							{calendar}
						</div>
					</div>
				</div>
				<div className="calendar-mobile">
					<div className="row turnos-row">
						<div className="col-12 col-lg-4 turnos-container-margin">
							{turnosList}
						</div>
					</div>
					<div className="row calendar-row">
						<div className="col-12 col-lg-8 calendar-container">
							{calendar}
						</div>
					</div>
				</div>
			</div>
		);
	}

	/**
	 * @param {Turno} turno
	 */
	openTurno(turno) {
		let details = document.getElementsByClassName("turno-detail-container");
		for (let i = 0; i < details.length; i++) {
			details[i].style.display = "";
		}

		let fechas = document.getElementsByClassName("detail-fecha");
		for (let i = 0; i < fechas.length; i++) {
			fechas[i].innerHTML = "Fecha: " + turno.getStringFullDate();
		}

		let horas = document.getElementsByClassName("detail-hora");
		for (let i = 0; i < horas.length; i++) {
			horas[i].innerHTML = "Horario: " + turno.getStringTime();;
		}
	}

	closeTurno() {
		let details = document.getElementsByClassName("turno-detail-container");
		for (let i = 0; i < details.length; i++) {
			details[i].style.display = "none";
		}
	}
};

export default Calendario;