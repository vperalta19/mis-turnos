import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './../../assets/css/MiCuenta.css'
import Tab from './Tab'
import EditarPerfil from './EditarPerfil'

import { GlobalContext } from '../../controllers/Context';

export default class Perfil extends React.Component {
    static contextType = GlobalContext;
    constructor(props){
        super(props);
        const usuario = this.props.userInfo;
        this.state = {
            nombre : usuario.nombre,
            apellido : usuario.apellido,
            email : usuario.email,
            telefono : usuario.telefono,
            dni : usuario.dni,
            ooss : usuario.ooss,
            nroSocio : usuario.nroSocio,
            rol : usuario.rol,
            quienVe : this.props.quienVe,
            historiales : props.historiales,
            recetas : []
        }
    }

    async componentDidMount(){
        const recetas = await this.context.RecetasController.getRecetas(this.state.dni)
        this.setState({
            recetas: recetas
        })
        this.render()
    }
    
    render(){
        return(
            <div>
                <div id="medio" className='container-fluid datosPersonales'>
                    <div className='row titulo align-items-center'>
                        <div className='col text-center'>
                            <h1>
                                DATOS PERSONALES
                            </h1>
                        </div>
                    </div>
                    <div className="row box-datos">
                        <div className="col">
                            <div className="row filas">
                                <div className="col-4 col-md-2 nombre-datos">
                                    <span>Nombre:</span>
                                </div>
                                <div className="col-8 col-md-4 info-datos">
                                    <span>{this.state.nombre + ' ' + this.state.apellido}</span>
                                </div>
                                <div className="col-4 col-md-2 nombre-datos">
                                    <span>DNI:</span>
                                </div>
                                <div className="col-8 col-md-4 info-datos">
                                    <span>{this.state.dni}</span>
                                </div>
                            </div>
                            <div className="row filas">
                                <div className="col-4 col-md-2 nombre-datos">
                                    <span>Email: </span>
                                </div>
                                <div className="col-8 col-md-4 info-datos">
                                    <span>{this.state.email}</span>
                                </div>
                                <div className="col-4 col-md-2 nombre-datos">
                                    <span>Telefono:</span>
                                </div>
                                <div className="col-8 col-md-4 info-datos">
                                    <span>{this.state.telefono}</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4 col-md-2 nombre-datos">
                                    <span>Obra Social:</span>
                                </div>
                                <div className="col-8 col-md-4 info-datos">
                                    <span>{this.state.ooss}</span>
                                </div>
                                <div className="col-4 col-md-2 nombre-datos">
                                    <span>Nro de Socio:</span>
                                </div>
                                <div className="col-8 col-md-4 info-datos">
                                    <span>{this.state.nroSocio}</span>
                                </div>
                            </div>
                                
                        </div>
                    </div>
                    <div className='row'>
                        {(() => {
                            if(this.state.quienVe === 'paciente' ){
                                return (
                                    <div className='col text-right'>
                                        <EditarPerfil dni={this.state.dni}></EditarPerfil>
                                    </div>
                                )
                            }
                            
                            return null;
                        })()}
                        
                    </div>
                    
                </div>
                <div className='container-fluid historial-recetas'>
                    <div className='row titulo align-items-center'>
                        <div className='col'>
                            <Tab historiales={this.state.historiales} recetas={this.state.recetas} quienVe={this.state.quienVe} dni={this.state.dni}></Tab>
                        </div>
                    </div>
                </div> 
            </div>
            
        )
    }
}
