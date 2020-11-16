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
			openTurno: null,
			pacienteView: true,
			turnos: [],
			franjaMostrar: [],
			franja: {
				"Lunes": [],
				"Martes": [],
				"Miercoles": [],
				"Jueves": [],
				"Viernes": [],
				"Sabado": [],
				"Domingo": [],
			},
			franjaDia: ""
		}
	}

	cerrarSesion(){
		this.props.history.push("/")
	}

	setTimes(v) {
		const horarios = this.getSelectValues(v.target);

		let franja = {
			"Lunes": this.state.franja.Lunes,
			"Martes": this.state.franja.Martes,
			"Miercoles": this.state.franja.Miercoles,
			"Jueves": this.state.franja.Jueves,
			"Viernes": this.state.franja.Viernes,
			"Sabado": this.state.franja.Sabado,
			"Domingo": this.state.franja.Domingo,
		}

		franja[this.state.franjaDia] = horarios;

		this.setState({
			franja: franja
		});
	}

	getSelectValues(select) {
		let result = [];
		let options = select && select.options;
		let opt;
	
		for (let i=0, iLen=options.length; i<iLen; i++) {
			opt = options[i];
			if (opt.selected) {
				result.push(opt.value || opt.text);
			}
		}
		return result;
	}

	updateDiaFranja(e) {
		this.setState({
			franjaDia: e.target.value
		})
	}

	async confirmFranja() {
		let out = [];
		for (let d in this.state.franja) {
			const dia = this.state.franja[d];
			for (let h = 0; h < dia.length; h++) {
				const horario = dia[h];
				out.push({
					dia: ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"].indexOf(d),
					inicio: horario + ":00",
					fin: horario.substring(0,3) + (horario.substring(3,4) == "3" ? "59:59" : "29:59") 
				})
			}
		}
		this.context.TurnosController.setFranja(out);
	}


	async componentDidMount() {
		const user = await this.context.UsuariosController.getUsuarioLogged();
		let turnos;

		this.setState({
			pacienteView: user.rol === 'paciente'
		})

		if (user.rol === 'paciente') {
			turnos = await this.context.TurnosController.getTurnosPaciente(user.dni);
		} else {

			turnos = await this.context.TurnosController.getTurnos();

			const franjaMostrar = await this.context.TurnosController.getFranja();

			let franja = {
				"Lunes": [],
				"Martes": [],
				"Miercoles": [],
				"Jueves": [],
				"Viernes": [],
				"Sabado": [],
				"Domingo": [],
			}

			for (let i = 0; i < franjaMostrar.length; i++) {
				const f = franjaMostrar[i];
				const dia = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"][f.daysOfWeek[0]];
				franja[dia].push(f.startTime.substring(0, 5));
			}

			this.setState({
				franjaMostrar: franjaMostrar,
				franja: franja
			});
		}

		turnos = turnos.filter(
			(t) => {
				return new Date(t.fechaInicio).getTime() - new Date().getTime() > 0;
			}
		)
		turnos.sort(
			(a, b) => {
				return new Date(a.fechaInicio).getTime() - new Date(b.fechaInicio).getTime()
			}
		)

		this.setState({
			turnos: turnos.map(
				(t) => {
					return new Turno(
						t.idTurno,
						new Date(t.fechaInicio),
						new Date(t.fechaFin),
						"",
						t.nombre + " " + t.apellido,
						t.dni
					)
				}
			)
		})

		window.dispatchEvent(new Event('resize'));
	}

	render() {
		const toolbarInfo={
			nombre: 'Valeria Peralta'
		}

		let events = this.state.turnos.length > 0 ? this.state.turnos.map((v) => v.getCalendarEvent(this.state.pacienteView)) : [];

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
				eventTimeFormat={{ hour12: false, hour: '2-digit', minute: '2-digit' }}
				events={events}
				businessHours={
					this.state.franjaMostrar.length == 0 ?
					[{ daysOfWeek: 0, startTime: "00:00:00", endTime: "00:00:01"}]	:
					this.state.franjaMostrar
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
						<div className="detail-fecha">Fecha: {!this.state.openTurno ? "" : this.state.openTurno.getStringFullDate()}</div>
						<div className="detail-hora">Horario: {!this.state.openTurno ? "" : this.state.openTurno.getStringTime()}</div>
						<div className="detail-buttons">
							<button className="reprogramar"
								onClick={
									() => {
										this.context.TurnosController.selectedTurno = this.state.openTurno;
										this.props.history.push("/Reprogramar");
									}
								}
							>Reprogramar</button>
							<button className="cancelar"
								onClick={
									() => {
										this.context.TurnosController.eliminarTunro(this.state.openTurno.id);
										window.location.reload();
									}
								}
							>Cancelar</button>
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
									<RadioGroup value={this.state.franjaDia} onChange={(e) => {this.updateDiaFranja(e)}} className="dias-group">
										<div className="lat-group">
											<FormControlLabel value="Lunes" control={<Radio/>} label="Lunes" />
											<FormControlLabel value="Martes" control={<Radio/>} label="Martes" />
											<FormControlLabel value="Miercoles" control={<Radio/>} label="Miércoles" />
											<FormControlLabel value="Jueves" control={<Radio/>} label="Jueves" />
										</div>
										<div className="lat-group">
											<FormControlLabel value="Viernes" control={<Radio/>} label="Viernes" />
											<FormControlLabel value="Sabado" control={<Radio/>} label="Sábado" />
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
								<select value={this.state.franja[this.state.franjaDia] || []} onChange={ (v) => { this.setTimes(v); }} disabled={this.state.franjaDia===""} className="horarios-select" multiple={true}>
									<option>00:00</option><option>00:30</option><option>01:00</option><option>01:30</option><option>02:00</option><option>02:30</option><option>03:00</option><option>03:30</option><option>04:00</option><option>04:30</option>
									<option>05:00</option><option>05:30</option><option>06:00</option><option>06:30</option><option>07:00</option><option>07:30</option><option>08:00</option><option>08:30</option><option>09:00</option><option>09:30</option>
									<option>10:00</option><option>10:30</option><option>11:00</option><option>11:30</option><option>12:00</option><option>12:30</option><option>13:00</option><option>13:30</option><option>14:00</option><option>14:30</option>
									<option>15:00</option><option>15:30</option><option>16:00</option><option>16:30</option><option>17:00</option><option>17:30</option><option>18:00</option><option>18:30</option><option>19:00</option><option>19:30</option>
									<option>20:00</option><option>20:30</option><option>21:00</option><option>21:30</option><option>22:00</option><option>22:30</option><option>23:00</option><option>23:30</option>
								</select>
								<button className="confirmar" onClick={ () => { this.confirmFranja(); }}>Confirmar</button>
							</Form>
						</div>
					</div>
				</div>
				<div className="turnos-title">
					<span>Turnos</span>
				</div>
				<ul className="turnos-list">
					{
						this.state.turnos.map(
							(value, index) => {
								return (
									<li className="turno-container" key={index} onClick={() => {this.openTurno(value)}}>
										<TurnoItem className="turno" turno={value} pacienteView={this.state.pacienteView}></TurnoItem>
									</li>
								)
							}
						)
					}
				</ul>
				<div className="franja-horaria" style={{display: this.state.pacienteView ? "none":""}}>
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

		this.setState({
			openTurno: turno
		})
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
};

export default Calendario;