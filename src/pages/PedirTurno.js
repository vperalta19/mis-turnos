import React from 'react'

import Turno from '../classes/Turno'

import Toolbar from '../components/Toolbar'

import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'

import 'bootstrap/dist/css/bootstrap.min.css'
import './../assets/css/pedirTurno.css'

class PedirTurno extends React.Component {

	componentDidMount() {
		window.dispatchEvent(new Event('resize'));
	}

	render() {
		const toolbarInfo={
			nombre: 'valeria'
		}

		let events = this.getSelectableTimeEvents()

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
				timeFormat={"HH:mm"} //TODO todavia no anda esto
				events={events}
				eventClick={(p) => { this.selectTime(p)}}
			/>
		);

		let turnoInputs = (
			<div className="turnos-container">
				<div className="turnos-title">
					<span>Turnos</span>
				</div>
			</div>
		);

		return (
			<div className='page-container'>
				<Toolbar className='p-0' toolbarInfo={toolbarInfo}></Toolbar>
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
		let time = (d) => { return `${d.getHours()}:${d.getMinutes()}`}
		alert(`Turno seleccionado: ${start}. ${time(p.event.start)}-${time(p.event.end)}`)
	}

	getSelectableTimeEvents() {
		let out = [];
		for (let i = 0; i < 12; i++) {
			out.push({
				start: 1601290800000+60000*30*i,
				end: 1601290800000+60000*30*(i+1),
				color: '#20ff20'
			})
		}
		for (let i = 0; i < 12; i++) {
			out.push({
				start: 1601377200000+60000*30*i,
				end: 1601377200000+60000*30*(i+1),
				color: '#20ff20'
			})
		}
		for (let i = 0; i < 12; i++) {
			out.push({
				start: 1601550000000+60000*30*i,
				end: 1601550000000+60000*30*(i+1),
				color: '#20ff20'
			})
		}
		for (let i = 0; i < 9; i++) {
			out.push({
				start: 1601317800000+60000*30*i,
				end: 1601317800000+60000*30*(i+1),
				color: '#20ff20'
			})
		}
		for (let i = 0; i < 9; i++) {
			out.push({
				start: 1601404200000+60000*30*i,
				end: 1601404200000+60000*30*(i+1),
				color: '#20ff20'
			})
		}
		for (let i = 0; i < 9; i++) {
			out.push({
				start: 1601577000000+60000*30*i,
				end: 1601577000000+60000*30*(i+1),
				color: '#20ff20'
			})
		}
		return out;
	}
};

export default PedirTurno;