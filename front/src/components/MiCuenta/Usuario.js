import React from 'react'
import './../../assets/css/MiCuenta.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Usuario(props) {
    const datos = props.userInfo;
    const nombre = datos.nombre;
    const email = datos.email;
    const tel = datos.tel;
    const dni = datos.dni;
    const ooss = datos.ooss;
    const nroSocio = datos.nroSocio;
    const rol = props.rol;
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col caja m-2">
                    <div className="row cajaHMInfo align-items-center">
                        <div className="col text-left">
                            <span>{nombre}</span>
                        </div>
                        {(() => {
                            if (rol === 'admin'){
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
                                    <span>{nombre}</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className="row">
                                <div className="col-4 dato">
                                    <span>DNI: </span>
                                </div>
                                <div className="col-8 info">
                                    <span>{dni}</span>
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
                                    <span>{email}</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className="row">
                                <div className="col-4 dato">
                                    <span>Obra Social: </span>
                                </div>
                                <div className="col-8 info">
                                    <span>{ooss}</span>
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
                                    <span>{tel}</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className="row">
                                <div className="col-4 dato">
                                    <span>Nro Socio: </span>
                                </div>
                                <div className="col-8 info">
                                    <span>{nroSocio}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row cajaBody">
                        <div className='col'>
                            <div className='btn-modificar'>Mas Info</div>
                        </div>
                    </div>
                </div>
                
                
                
            </div>
            
        </div>
    );
}