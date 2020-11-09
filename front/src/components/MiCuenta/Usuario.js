import React from 'react'
import './../../assets/css/MiCuenta.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default class Usuario extends React.Component {
    constructor(props){
        super(props);
        const datos = props.userInfo;
        this.state ={
            datos: datos,
            nombre : datos.nombre,
            email : datos.email,
            tel : datos.tel,
            dni : datos.dni,
            ooss : datos.ooss,
            nroSocio : datos.nroSocio,
            rol : props.rol,
        }
    }

    handleClick(){
        sessionStorage.setItem('pacienteVista',JSON.stringify(this.state.datos))
        
    }

    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col caja m-2">
                        <div className="row cajaHMInfo align-items-center">
                            <div className="col text-left">
                                <span>{this.state.nombre}</span>
                            </div>
                            {(() => {
                                if (this.state.rol === 'admin'){
                                    return (
                                        <div className='col text-right'>
                                            <div className='btn-modificar'>Modificar</div>
                                            <div className='btn-eliminar'>Eliminar</div>
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
                                        <span>{this.state.nombre}</span>
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
                                <Link to="/Paciente"><div className='btn-modificar' onClick={this.handleClick.bind(this)}>Mas Info</div></Link>
                            </div>
                        </div>
                    </div>
                    
                    
                    
                </div>
                
            </div>
        );
    }
}