export const login = async (data) =>{
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    try {
        const response = await fetch('http://localhost:3500/login',options);
        return response
    } 
    catch (error) {
        console.error(error)
    }
}

export const getPacientes = async () =>{
    try {
        const response = await fetch('http://localhost:3500/getPacientes');
        return response
    } 
    catch (error) {
        console.error(error)
    }
}

export const getUsuario = async (dni) =>{
    try {
        const response = await fetch('http://localhost:3500/getUsuario/'+dni);
        return response
    } 
    catch (error) {
        console.error(error)
    }
}

export const registrar = async (data) =>{
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    try {
        const response = await fetch('http://localhost:3500/registrarUsuario/',options);
        return response
    } 
    catch (error) {
        console.log(error)
    }
}

export const editarUsuario = async (data,dni) =>{
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    try {
        const response = await fetch('http://localhost:3500/editarUsuario/'+dni,options);
        return response
    } 
    catch (error) {
        console.log(error)
    }
}

export const subirReceta = async (receta) =>{
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:  JSON.stringify({ receta })
    }
    try {
        console.log(receta)
        // const response = await fetch('http://localhost:3500/subirReceta',options);
        // console.log(response)
    } 
    catch (error) {
        console.log(error)
    }
    
}

export const subirNovedad = async (receta) =>{
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:  JSON.stringify({ receta })
    }
    try {
        console.log(receta)
        // const response = await fetch('http://localhost:3500/subirReceta',options);
        // console.log(response)
    } 
    catch (error) {
        console.log(error)
    }
    
}

export const getTurnosPaciente = async (idPaciente) => {
	try {
		const response = await fetch('http://localhost:3500/getTurnosPaciente/'+idPaciente);
		return response;
	} catch (error) {
		console.error(error);
	}
}

export const getTurnos = async () => {
	try {
		const response = await fetch('http://localhost:3500/getTurnos');
		return response;
	} catch (error) {
		console.error(error);
	}
}

export const addTurno = async (t) => {
	const i = new Date(t.inicio);
	const f = new Date(t.fin);

	const readDate = (date) => { return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours() < 10 ? "0":""}${date.getHours()}:${date.getMinutes() < 10 ? "0":""}${date.getMinutes()}:00`}

	const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:  JSON.stringify(
			{
				dni: t.dni,
				inicio: readDate(i),
				fin: readDate(f)
			})
    }
    try {
		const response = await fetch('http://localhost:3500/crearTurno',options);
		return response;
    } 
    catch (error) {
		console.log(error)
		return {};
    }
}

export const eliminarTunro = async (id) => {
	const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
		const response = await fetch('http://localhost:3500/eliminarTurno/' + id, options);
		return response;
    } 
    catch (error) {
		console.log(error)
		return {};
    }
}

export const getFranja = async () => {
	try {
		const response = await fetch('http://localhost:3500/getFranja');
		return response;
	} catch (error) {
		console.error(error);
	}
}

export const setFranja = async (disp) => {
	const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:  JSON.stringify({ list: disp })
    }
    try {
        const response = await fetch('http://localhost:3500/setFranja',options);
    } 
    catch (error) {
        console.log(error)
    }
}
