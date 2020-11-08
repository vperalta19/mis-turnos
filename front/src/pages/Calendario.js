import React from 'react'

import Turno from '../classes/Turno'

import Toolbar from '../components/Toolbar'
import TurnoItem from '../components/TurnoItem'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons'

import 'bootstrap/dist/css/bootstrap.min.css'
import './../assets/css/calendario.css'
import { FormControl, FormControlLabel, FormLabel, Input, MenuItem, Radio, RadioGroup, Select } from '@material-ui/core'
import { Form } from 'react-bootstrap'
import { GlobalContext } from '../controllers/Context'

class Calendario extends React.Component {
	static contextType = GlobalContext;

	constructor() {
		super();

		this.state = {
			pacienteView: true,
			turnos: []
		}
	}

	cerrarSesion(){
		this.props.history.push("/")
	}

	async componentDidMount() {
		const user = await this.context.UsuariosController.getUsuarioLogged();
		
		this.setState({
			pacienteView: user.rol === 'paciente'
		})
		debugger;

		window.dispatchEvent(new Event('resize'));
	}

	render() {
		const toolbarInfo={
			nombre: 'Valeria Peralta'
		}
		let pacienteView = this.props.pacienteView || false;

		let turnos = this.props.turnos || [
			new Turno(1601323200000, 1601325000000, "Profesional", "Paciente"),			
			new Turno(1601323200000+86400000+3600000*2, 1601325000000+86400000+3600000*2, "Profesional", "Paciente"),
			new Turno(1601323200000+86400000*3+3600000, 1601325000000+86400000*3+3600000, "Profesional", "Paciente"),
			new Turno(1601323200000+86400000*5+3600000*-6, 1601325000000+86400000*5+3600000*-6, "Profesional", "Paciente"),
			new Turno(1601323200000+86400000*5, 1601325000000+86400000*5, "Profesional", "Paciente"),
		];

		let events = turnos.map((v) => v.getCalendarEvent(pacienteView))

		let calendar = (
			<FullCalendar
				height="calc( 100% - 15px)"
				plugins={[ dayGridPlugin, timeGridPlugin ]}
				headerToolbar={{
					left: "prev,next today",
					center: "title",
					right: "timeGridDay,timeGridWeek,dayGridMonth"
				}}
				initialView="timeGridWeek"
				allDaySlot={false}
				timeFormat={"HH:mm"} //TODO todavia no anda esto
				events={events}
				businessHours={
					pacienteView ? null : [
						{
							daysOfWeek: [ 1, 2, 4 ],
							startTime: '08:00',
							endTime: '14:00'
						},
						{
							daysOfWeek: [ 1, 2, 4 ],
							startTime: '15:30',
							endTime: '20:00'
						},
						{
							daysOfWeek: [ 6 ],
							startTime: '10:00',
							endTime: '18:00'
						}
					]
				}
			/>
		);

		let turnosList = (
			<div className="turnos-container">
				<div style={{display: "none"}} className="turno-detail-container" onClick={() => {this.closeTurno()}}>
					<div className="turno-detail" onClick={(evt) => {evt.stopPropagation()}}>
						<div onClick={() => {this.closeTurno()}}><FontAwesomeIcon className="close" icon={faTimesCircle}/></div>
						<div className="detail-title">
							<span>Info del Turno</span>
						</div>
						<div className="detail-fecha"></div>
						<div className="detail-hora"></div>
						<div className="detail-buttons">
							<button className="reprogramar">Reprogramar</button>
							<button className="cancelar">Cancelar</button>
						</div>
					</div>
				</div>
				<div style={{display: "none"}} className="franja-horaria-container" onClick={() => {this.closeFranja()}}>
					<div className="franja-horaria-popup" onClick={(evt) => {evt.stopPropagation()}}>
					<div onClick={() => {this.closeFranja()}}><FontAwesomeIcon className="close" icon={faTimesCircle}/></div>
						<div className="franja-title">
							<span>Franja Horaria</span>
						</div>
						<div className="dias">
							<Form style={{display: 'flex', flexDirection: 'column'}}>
								<FormControl>
									<FormLabel>Seleccione Día</FormLabel>
									<RadioGroup onChange={(e) => {this.updateFranja(e)}} className="dias-group">
										<div className="lat-group">
											<FormControlLabel value="Lunes" control={<Radio/>} label="Lunes" />
											<FormControlLabel value="Martes" control={<Radio/>} label="Martes" />
											<FormControlLabel value="Miércoles" control={<Radio/>} label="Miércoles" />
											<FormControlLabel value="Jueves" control={<Radio/>} label="Jueves" />
										</div>
										<div className="lat-group">
											<FormControlLabel value="Viernes" control={<Radio/>} label="Viernes" />
											<FormControlLabel value="Sábado" control={<Radio/>} label="Sábado" />
											<FormControlLabel value="Domingo" control={<Radio/>} label="Domingo" />
										</div>
									</RadioGroup>
									<FormLabel>Duración (en minutos)</FormLabel>
								</FormControl>
								{/* <select className="duration-input">
									<option>15</option>
									<option>30</option>
									<option>45</option>
									<option>60</option>
								</select> */}
								<select disabled className="horarios-select" multiple={true}>
									<option>00:00</option>
									<option>00:30</option>
									<option>01:00</option>
									<option>01:30</option>
									<option>02:00</option>
									<option>02:30</option>
									<option>03:00</option>
									<option>03:30</option>
									<option>04:00</option>
									<option>04:30</option>
									<option>05:00</option>
									<option>05:30</option>
									<option>06:00</option>
									<option>06:30</option>
									<option>07:00</option>
									<option>07:30</option>
									<option>08:00</option>
									<option>08:30</option>
									<option>09:00</option>
									<option>09:30</option>
									<option>10:00</option>
									<option>10:30</option>
									<option>11:00</option>
									<option>11:30</option>
									<option>12:00</option>
									<option>12:30</option>
									<option>13:00</option>
									<option>13:30</option>
									<option>14:00</option>
									<option>14:30</option>
									<option>15:00</option>
									<option>15:30</option>
									<option>16:00</option>
									<option>16:30</option>
									<option>17:00</option>
									<option>17:30</option>
									<option>18:00</option>
									<option>18:30</option>
									<option>19:00</option>
									<option>19:30</option>
									<option>20:00</option>
									<option>20:30</option>
									<option>21:00</option>
									<option>21:30</option>
									<option>22:00</option>
									<option>22:30</option>
									<option>23:00</option>
									<option>23:30</option>
								</select>
								<button className="confirmar">Confirmar</button>
							</Form>
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
				<div className="franja-horaria" style={{display: pacienteView ? "none":""}}>
					<div className="modificar" onClick={() => { this.openFranja()}}>
						Modificar Franja Horaria
					</div>
				</div>

			</div>
		);

		return (
			<div className='page-container'>
				<Toolbar cerrarFn={ () => { this.cerrarSesion(); } }/>
				<div id='medio' className="container-fluid" style={{height: '100%'}}>
					<div className="calendar-desktop">
						<div className="row main-container">
							<div className="col-12 col-lg-4 turnos-container-margin">
								{turnosList}
							</div>
							
							<div className="col-12 col-lg-8 ">
								<div className='calendar-container'>
									{calendar}
								</div>
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

	openFranja() {
		let franjas = document.getElementsByClassName("franja-horaria-container");
		for (let i = 0; i < franjas.length; i++) {
			franjas[i].style.display = "";
		}
	}

	closeFranja() {
		let franjas = document.getElementsByClassName("franja-horaria-container");
		for (let i = 0; i < franjas.length; i++) {
			franjas[i].style.display = "none";
		}
	}

	updateFranja() {
		let inpus = document.getElementsByClassName("horarios-select");
		for (let i = 0; i < inpus.length; i++) {
			inpus[i].disabled = false;
		}
	}
};

export default Calendario;