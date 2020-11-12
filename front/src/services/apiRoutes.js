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

export const getUsuarios = async () =>{
    try {
        const response = await fetch('http://localhost:3500/getUsuarios');
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
    console.log(dni)
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
        body:  JSON.stringify(receta)
    }
    try {
        const response = await fetch('http://localhost:3500/crearReceta',options);
        return response
    } 
    catch (error) {
        console.log(error)
    }
    
}

export const subirNovedad = async (novedad) =>{
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:  JSON.stringify(novedad)
    }
    try {
        const response = await fetch('http://localhost:3500/crearNovedad',options);
        return response
    } 
    catch (error) {
        console.log(error)
    }
    
}

export const getRecetas = async (dni) =>{
    try {
        const response = await fetch('http://localhost:3500/getRecetas/'+dni);
        return response
    } 
    catch (error) {
        console.error(error)
    }
}

export const getNovedades = async () =>{
    try {
        const response = await fetch('http://localhost:3500/getNovedades/');
        return response
    } 
    catch (error) {
        console.error(error)
    }
}



export const eliminarReceta = async (id) =>{
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const response = await fetch('http://localhost:3500/borrarReceta/'+id,options);
        return response
    } 
    catch (error) {
        console.log(error)
    }
    
}

export const eliminarUsuario = async (dni) =>{
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const response = await fetch('http://localhost:3500/eliminarUsuario/'+dni,options);
        return response
    } 
    catch (error) {
        console.log(error)
    }
    
}

export const crearHistorial = async (historial) =>{
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:  JSON.stringify(historial)
    }
    try {
        const response = await fetch('http://localhost:3500/crearHistorial',options);
        return response
    } 
    catch (error) {
        console.log(error)
    }
    
}

export const getHistoriales = async (dni) =>{
    try {
        const response = await fetch('http://localhost:3500/getHistoriales/'+dni);
        return response
    } 
    catch (error) {
        console.error(error)
    }
}

export const editarHistorial = async (historial) =>{
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body:  JSON.stringify(historial)
    }
    try {
        const response = await fetch('http://localhost:3500/editarHistorial',options);
        return response
    } 
    catch (error) {
        console.log(error)
    }
    
}

export const borrarHistorial = async (id) =>{
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const response = await fetch('http://localhost:3500/borrarHistorial/'+id,options);
        return response
    } 
    catch (error) {
        console.log(error)
    }
    
}
