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