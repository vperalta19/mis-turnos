import React from 'react';
import EditarHistorial from './EditarHistorial'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'

import './../../assets/css/MiCuenta.css'
import { GlobalContext } from '../../controllers/Context';

export default class HistorialMedico extends React.Component {
    static contextType = GlobalContext;
    constructor(props){
        super(props);
        const historialInfo = props.historialInfo;
        this.state = {
            fecha : new Date(historialInfo.fecha),
            descripcion : historialInfo.descripcion,
            idHistorialMedico: historialInfo.idHistorialMedico
        }
    }
    

    async eliminar(){
        const validacion = await this.context.HistorialController.borrarHistorial(this.state.idHistorialMedico)
        if(validacion){
            window.location.reload()
        }
    }

    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col caja m-2">
                        <div className="row cajaHMInfo align-items-center">
                            <div className="col text-left">
                                <span>{this.state.fecha.getDate() + '/' + this.state.fecha.getMonth() + '/' + this.state.fecha.getFullYear()}</span>
                            </div>
                            <div className='col text-right'>
                                <FontAwesomeIcon style={{color:'white'}} icon={faTrashAlt} onClick={this.eliminar.bind(this)}></FontAwesomeIcon>
                                
                            </div>
                        </div>
                        <div className="row cajaBody">
                            <div className="col-12 dato">
                                <span>Descripción: </span>
                            </div>
                            <div className="col-12 info mb-3">
                                <span>{this.state.descripcion}</span>
                            </div>
                        </div>
                        <div className="row cajaBody">
                            <div className='col'>
                                <EditarHistorial historial={this.props.historialInfo}></EditarHistorial>
                            </div>
                        </div>
                    </div>
                    
                    
                    
                </div>
                
            </div>
        );
    }
}