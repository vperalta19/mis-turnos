import { login, registrar, editarUsuario, getPacientes, getUsuario } from "../services/apiRoutes";

export default class UsuariosController {
	
	contructor(){
        this._usuarioLogged = null;
        this._usuarios =[];
        this._pacientes =[];
	}

    async setUsuarioLogged(usuario){
        var validacion = false;
        const response = await registrar(usuario);
        if(response.status === 200) {
            validacion = true;
            sessionStorage.setItem('usuario',JSON.stringify(usuario));
            this._usuarioLogged = usuario;
        }
        return validacion
    }

    async getUsuarioLogged(){
        if (!this._usuarioLogged || !this._usuarioLogged.length)
		{
            this._usuarioLogged = JSON.parse(sessionStorage.getItem('usuario'));
		}
		return this._usuarioLogged;
    }

	
	async login(infoUsuario)
	{
        var validacion = false; 
        const response = await login(infoUsuario);
    
        if(response.status === 200){
            const json = await response.json();
            sessionStorage.setItem('usuario',JSON.stringify(json[0]));
            this._usuarioLogged = json[0]
            validacion = true;
        }
			
		
		return validacion;
    }

    async getPacientes()
	{
        const response = await getPacientes();
        const json  = await response.json();
        return json
    }
    
    async getUsuario(dni)
	{
        var json = null;
        const response = await getUsuario(dni);
    
        if(response.status === 200){
            json = await response.json();
        }
		return json[0];
    }

    async editarUsuario(data,dni)
	{
        var validacion = false; 
        const response = await editarUsuario(data,dni);
    
        if(response.status === 200){
            const infoUsuario ={
                dni: data.dni,
                contraseña: data.contraseña
            }
            await this.getUsuario(infoUsuario);
            validacion = true;
        }
			
		
		return validacion;
	}

}