import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import EditarPerfil from './EditarPerfil';
import { GlobalContext } from '../../controllers/Context';
import './../../assets/css/MiCuenta.css'

export default class Usuario extends React.Component {
    static contextType = GlobalContext;
    constructor(props){
        super(props);
        const datos = props.userInfo;
        this.state ={
            datos: datos,
            nombre : datos.nombre,
            apellido: datos.apellido,
            email : datos.email,
            tel : datos.tel,
            dni : datos.dni,
            ooss : datos.ooss,
            nroSocio : datos.nroSocio,
            rolUsuario: datos.rol,
            rol : props.rol,
        }
    }

    handleClick(){
        sessionStorage.setItem('pacienteVista',JSON.stringify(this.state.datos))
        
    }

    async eliminarUsuario(){
        const response = await this.context.UsuariosController.eliminarUsuario(this.state.dni)
        if(response.status === 200){
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
                                <span>{this.state.nombre + ' ' + this.state.apellido + ' (' + this.state.rolUsuario.toUpperCase() + ')'}</span>
                            </div>
                            {(() => {
                                if (this.state.rol === 'admin'){
                                    return (
                                        <div className='col text-right'>
                                            <EditarPerfil dni={this.state.dni} boton='admin'></EditarPerfil>
                                            <buton className='btn-eliminar' onClick={this.eliminarUsuario.bind(this)}>Eliminar</buton>
                                        </div>
                                    )
                                }
                                
                                    return null;
                                })()
                            }
                        </div>
                        <div className="row cajaBody ">
                            <div className="col-12 col-md-6  columnas">
                                <div className="row">
                                    <div className="col-4 dato">
                                        <span>Nombre: </span>
                                    </div>
                                    <div className="col-8 info">
                                        <span>{this.state.nombre + ' ' + this.state.apellido}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-6'>
                                <div className="row">
                                    <div className="col-4 dato">
                                        <span>DNI: </span>
                                    </div>
                                    <div className="col-8 info">
                                        <span>{this.state.dni}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row cajaBody ">
                            <div className='col-12 col-md-6 columnas'>
                                <div className="row">
                                    <div className="col-4 dato">
                                        <span>Email: </span>
                                    </div>
                                    <div className="col-8 info">
                                        <span>{this.state.email}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-6'>
                                <div className="row">
                                    <div className="col-4 dato">
                                        <span>Obra Social: </span>
                                    </div>
                                    <div className="col-8 info">
                                        <span>{this.state.ooss}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row cajaBody">
                            <div className='col-12 col-md-6 columnas'>
                                <div className="row">
                                    <div className="col-4 dato">
                                        <span>Telefono: </span>
                                    </div>
                                    <div className="col-8 info">
                                        <span>{this.state.tel}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-6'>
                                <div className="row">
                                    <div className="col-4 dato">
                                        <span>Nro Socio: </span>
                                    </div>
                                    <div className="col-8 info">
                                        <span>{this.state.nroSocio}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row cajaBody">
                            <div className='col'>
                                {(() => {
                                    if(this.state.rolUsuario === 'paciente' ){
                                        return (
                                            <Link to="/Paciente"><div className='btn-modificar' onClick={this.handleClick.bind(this)}>Mas Info</div></Link>
                                        )
                                    }
                                    
                                    return null;
                                })()}
                                
                            </div>
                        </div>
                    </div>
                    
                    
                    
                </div>
                
            </div>
        );
    }
}