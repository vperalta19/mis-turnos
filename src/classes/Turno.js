export default class Turno {

	static days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

	constructor(inicio, fin, profesional, paciente) {
		this._inicio = inicio;
		this._fin = fin;
		this._profesional = profesional;
		this._paciente = paciente;
	}

	getStringDate() {
		let date = new Date(this._inicio);
		return `${Turno.days[date.getDay()]} ${date.getDate()}`;
	}

	getStringFullDate() {
		let date = new Date(this._inicio);
		return `${Turno.days[date.getDay()]} ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
	}

	getStringTime() {
		let date = new Date(this._inicio);
		return `${date.getHours()}:${ date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}`;
	}

	getPaciente() {
		return this._paciente;
	}

	getProfesional() {
		return this._profesional;
	}

	getCalendarEvent(pacienteView) {
		return {
			title: pacienteView ? this.getProfesional() : this.getPaciente(),
			start: this._inicio,
			end: this._fin
			//color: '#'
		};
	}
}