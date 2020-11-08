import { getUsuario, registrar } from "../services/apiRoutes";

export default class TransaccionesController {
	
	contructor(){
        this._usuarioLogged = null;
        this._usuarios =[];
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
            this._usuarioLogged = sessionStorage.getItem('usuario')
			
		}
		return this._usuarioLogged;
    }

	
	async getUsuario(infoUsuario)
	{
        var validacion = false; 
        const response = await getUsuario(infoUsuario);
    
        if(response.status === 200){
            const json = await response.json();
            sessionStorage.setItem('usuario',JSON.stringify(json[0]));
            validacion = true;
        }
			
		
		return validacion;
	}

}