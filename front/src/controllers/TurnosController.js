import { eliminarTunro, addTurno, getFranja, getTurnos, getTurnosPaciente, setFranja } from "../services/apiRoutes";

export default class TurnosController {
	
	contructor(){

	}

	async getTurnosPaciente(idPaciente)
	{
		let out = null;

		const response = await getTurnosPaciente(idPaciente);
	
		if(response.status === 200){
			const json = await response.json();
			out = json;
		}
		
		return out;
	}

	async getTurnos() {
		let out = null;

        const response = await getTurnos();
    
        if(response.status === 200) {
            const json = await response.json();
            out = json;
        }
		
		return out;
	}

	async addTurno(t) {
		let out = null;

        const response = await addTurno(t);
    
        if(response.status === 200) {
            const json = await response.json();
            out = json;
        }
		
		return out;
	}

	async eliminarTunro(id) {
		let out = null;

		const response = await eliminarTunro(id);
	
		if(response.status === 200) {
			const json = await response.json();
			out = json;
		}
		
		return out;
	}

	async getFranja() {
		let out = null;

        const response = await getFranja();
    
        if(response.status === 200) {
            const json = await response.json();
            out = json;
        }
		
		return out.map(
			(f) => {
				return {
					daysOfWeek: [f.dia],
					startTime: f.horaInicio,
					endTime: f.horaFin
				}
			}
		);
	}

	async setFranja(disp) {
        await setFranja(disp);
	}

}