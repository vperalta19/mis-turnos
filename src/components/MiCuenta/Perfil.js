import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './../../assets/css/MiCuenta.css'
import Tab from './Tab'
import EditarPerfil from './EditarPerfil'
import Usuario from './Usuario'
import AgregarHM from './AgregarHM'
import AgregarR from './AgregarR'

export default function DatosPersonales(props) {
    const datos = props.userInfo;
    const nombre = datos.nombre;
    const email = datos.email;
    const tel = datos.tel;
    const dni = datos.dni;
    const ooss = datos.ooss;
    const nroSocio = datos.nroSocio;
    const usuario = datos.usuario;
    const quienVe = datos.quienVe;
    const historiales = props.historiales;
    const recetas = props.recetas;
    const pacientes = props.pacientes
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
                    {(() => {
                        if (quienVe === 'profesional'){
                            return (
                                <div className='col text-left'>
                                    <AgregarHM></AgregarHM>
                                    <AgregarR></AgregarR>
                                </div>
                            )
                        }
                        
                        return null;
                    })()}
                    <div className='col'>
                        <EditarPerfil></EditarPerfil>
                    </div>
                </div>
                
            </div>
            
            {(() => {
                if (usuario === 'paciente'){
                    return (
                        <div className='container-fluid historial-recetas'>
                            <div className='row titulo align-items-center'>
                                <div className='col'>
                                    <Tab historiales={historiales} recetas={recetas}></Tab>
                                </div>
                            </div>
                        </div> 
                    )
                }
                
                return null;
            })()}
            
            {(() => {
                if (usuario === 'profesional'){
                    return (
                        <div className='container-fluid pacientes'>
                            <div className='row titulo align-items-center'>
                                <div className='col text-center'>
                                    <h1>
                                        MIS PACIENTES
                                    </h1>
                                </div>
                            </div>
                            <div className='row align-items-center'>
                                <div className='col'>
                                    {
                                        pacientes.map(
                                            (value, index)=>{
                                                return(
                                                    <Usuario key = {index} userInfo = {value} rol='profesional'></Usuario>
                                                )
                                            }
                                        )
                                    }
                                </div>
                            </div>
                        </div> 
                    )
                }
                
                return null;
            })()}
            

             
        </div>
        
    )
}
