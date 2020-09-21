import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './../../assets/css/MiCuenta.css'
import Tab from './Tab'
import PopUp from './PopUp'

export default function DatosPersonales(props) {
    const datos = props.userInfo;
    const nombre = datos.nombre;
    const email = datos.email;
    const tel = datos.tel;
    const dni = datos.dni;
    const ooss = datos.ooss;
    const nroSocio = datos.nroSocio;
    const rol = datos.rol
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
                                <span>{nombre}</span>
                            </div>
                            <div className="col-4 col-md-2 nombre-datos">
                                <span>DNI:</span>
                            </div>
                            <div className="col-8 col-md-4 info-datos">
                                <span>{dni}</span>
                            </div>
                        </div>
                        <div className="row filas">
                            <div className="col-4 col-md-2 nombre-datos">
                                <span>Email: </span>
                            </div>
                            <div className="col-8 col-md-4 info-datos">
                                <span>{email}</span>
                            </div>
                            <div className="col-4 col-md-2 nombre-datos">
                                <span>Obra Social:</span>
                            </div>
                            <div className="col-8 col-md-4 info-datos">
                                <span>{ooss}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4 col-md-2 nombre-datos">
                                <span>Telefono:</span>
                            </div>
                            <div className="col-8 col-md-4 info-datos">
                                <span>{tel}</span>
                            </div>
                            <div className="col-4 col-md-2 nombre-datos">
                                <span>Nro de Socio:</span>
                            </div>
                            <div className="col-8 col-md-4 info-datos">
                                <span>{nroSocio}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <PopUp></PopUp>
                    </div>
                </div>
            </div>
            <div className='container-fluid historial-recetas'>
                <div className='row titulo align-items-center'>
                    <Tab></Tab>
                </div>
            </div> 
             
        </div>
        
    )
}
