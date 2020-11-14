import React from 'react'

import Turno from '../classes/Turno'

import Toolbar from '../components/Toolbar'

import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'

import 'bootstrap/dist/css/bootstrap.min.css'
import './../assets/css/pedirTurno.css'
import { GlobalContext } from '../controllers/Context'
import { faSleigh } from '@fortawesome/free-solid-svg-icons'

export default class ReprogramarTurno extends React.Component {
	static contextType = GlobalContext;
	
	constructor(props){
		super(props)
		this.state = {
			eventsInfo: false,
			turno: null,
			inicioDate: "",
			inicioTime: ""
		}
		this.turnos = [];
		this.franja = [];
	}

	cerrarSesion(){
		this.props.history.push("/")
	}

	async componentDidMount() {
		const turno = this.context.TurnosController.selectedTurno;
		this.setState({
			turno: turno,
			inicioDate: turno.getStringFullDate(),
			inicioTime: turno.getStringTime()
		})

		this.turnos = await this.context.TurnosController.getTurnos();
		this.franja = await this.context.TurnosController.getFranja();

		this.setState({
			eventsInfo: true
		});

		window.dispatchEvent(new Event('resize'));
	}

	render() {
		const toolbarInfo={
			nombre: 'Valeria Peralta'
		}

		var turnos = this.turnos;
		var franja = this.franja;
		
		let events = !this.state.eventsInfo ? [] :
			(params, fn) => {
				let disp = [];
				for (let i = 0; i < franja.length; i++) {
					const f = franja[i];
					const d = Number.parseInt(f.daysOfWeek[0]);
					const h = Number.parseInt(f.startTime.substring(0,2));
					const m = Number.parseInt(f.startTime.substring(3,5));

					let newDate = new Date(params.start);
					newDate.setDate( newDate.getDate() + d);
					newDate.setHours( newDate.getHours() + h);
					newDate.setMinutes( newDate.getMinutes() + m);

					if (newDate.getTime() - (new Date()).getTime() <= 0) continue;

					let out = false;
					for (let j = 0; j < turnos.length; j++) {
						const t = turnos[j];
						if(t.fechaInicio == newDate.toISOString()){
							out = true;
							break;
						}
					}
					if (out) continue;

					disp.push({
						start: newDate.getTime(),
						end: newDate.getTime() + 1800000,
						color: '#20ff20'
					})
				}
				fn(disp);
			};

		let calendar = (
			<FullCalendar
				height="calc( 100% - 15px)"
				plugins={[ timeGridPlugin ]}
				headerToolbar={{
					left: "prev,next today",
					center: "title",
					right: "timeGridWeek"
				}}
				initialView="timeGridWeek"
				allDaySlot={false}
				// timeFormat={"HH:mm"} //TODO todavia no anda esto
				events={events}
				eventClick={(p) => { this.selectTime(p)}}
			/>
		);

		let turnoInputs = (
			<div className="turnos-container">
				<div className="turnos-title">
					<span>Detalles</span>
				</div>
				<div className="turnos-detail">
					<div className="turno-line">
						<div>Fecha: </div>
						<input value={this.state.inicioDate} className="turno-detail-fecha" disabled></input>
					</div>
					<div className="turno-line">
						<div>Horario: </div>
						<input value={this.state.inicioTime} className="turno-detail-horario" disabled></input>
					</div>
					{/* <div className="turno-line">
						<div>Obra Social</div>
						<input value={this.state.ooss} onChange={ (v) => { this.setState({ooss: v.target.value}); } } className="turno-detail-ooss" disabled={this.state.pacienteView}></input>
					</div> */}
					<div className="turno-line">
						<div>DNI</div>
						<input value={this.state.turno ? this.state.turno._dni : "-"} className="turno-detail-dni" disabled></input>
					</div>
					<button className="aceptar"
						onClick={
							() => {
								if (this.state.turno == null) {
									alert("Hube un error. Intente nuevamente.");
									return;
								}
								this.context.TurnosController.eliminarTunro(this.state.turno.id);
								this.context.TurnosController.addTurno({
									dni: this.state.turno._dni,
									inicio: this.state.turno._inicio.getTime(),
									fin: this.state.turno._inicio.getTime() + 1800000
								});
								setTimeout(
									() => {
										this.props.history.push("/Calendario");
									}, 100
								)	
							}
						}>Confirmar</button>
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
								{turnoInputs}
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
								{turnoInputs}
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

	selectTime(p) {
		let start = `${p.event.start.getDate()}/${p.event.start.getMonth()+1}/${p.event.start.getFullYear()}`
		let time = (d) => { return `${(d.getHours() < 10 ? "0" : "") + d.getHours()}:${d.getMinutes() + (d.getMinutes() < 10 ? "0" : "")}`}

		this.state.turno._inicio = p.event.start;

		this.setState({
			inicioDate: start,
			inicioTime: time(p.event.start)
		});
	}
};
