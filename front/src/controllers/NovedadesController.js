import { getNovedades, subirNovedad } from "../services/apiRoutes";

export default class NovedadesController{
    constructor(){
        this._novedades = []
    }

    async subirNovedad(novedad){
        var validacion = false;
        const response = await subirNovedad(novedad);
        if(response.status === 200) {
            validacion = true;
        }
        return validacion
    }

    async getNovedades(){
        if (!!this._novedades ){
            const response = await getNovedades();
            if(response.status === 200) {
                const json = await response.json()
                this._novedades = json;
                return json
            }
        }
        return this._novedades
    }

    
}