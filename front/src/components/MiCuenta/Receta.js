import React from 'react';
import './../../assets/css/MiCuenta.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload} from '@fortawesome/free-solid-svg-icons'
import { GlobalContext } from '../../controllers/Context';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'

export default class Receta extends React.Component {
    static contextType = GlobalContext;
    constructor(props){
        super(props);
        const receta = props.receta;
        this.state={
            fecha: new Date(receta.fecha),
            descripcion: receta.descripcion,
            imagen: receta.imagen.slice(0,50)+'fl_attachment/'+receta.imagen.slice(50),
            id: receta.idRecetas
        }
    }

    async eliminarReceta(){
        console.log(this.state.id)
        const response = await this.context.RecetasController.eliminarReceta(this.state.id)
        if (response.status ===200){
            window.location.reload()
        }
    }
    
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col caja m-2">
                        <div className="row cajaRInfo align-items-center">
                            <div className="col text-left">
                                <span>{this.state.fecha.getDate() + '/' + this.state.fecha.getMonth() + '/' + this.state.fecha.getFullYear()}</span>
                            </div>
                            <div className='col text-right'>
                                <FontAwesomeIcon style={{color:'white'}} icon={faTrashAlt} onClick={this.eliminarReceta.bind(this)}></FontAwesomeIcon>
                                
                            </div>
                        </div>
                        
                        <div className="row cajaBody">
                            <div className="col-12 dato">
                                <span>Descripcion: </span>
                            </div>
                            <div className="col-12 info mb-3">
                                <span>{this.state.descripcion}</span>
                            </div>
                            <div className='col-12 m-2 text-right descargar'>
                                <a href={this.state.imagen} download className='btn-agregar-hm'>Descargar Receta <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon></a>
                            </div>

                        </div>
                    </div>
                    
                    
                    
                </div>
                
            </div>
        );
    }
}