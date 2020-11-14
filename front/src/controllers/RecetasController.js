import { getRecetas, subirReceta, eliminarReceta } from "../services/apiRoutes";

export default class RecetasController{
    constructor(){
        this._recetas = []
    }

    async subirReceta(receta){
        var validacion = false;
        const response = await subirReceta(receta);
        if(response.status === 200) {
            validacion = true;
        }
        return validacion
    }

    async getRecetas(paciente){
        const response = await getRecetas(paciente);
        if(response.status === 200) {
            const json = await response.json()
            this._recetas = json;
            return json
        }
        return this._recetas
    }

    async eliminarReceta(id){
        const response = await eliminarReceta(id);
        return response
    }

    
}