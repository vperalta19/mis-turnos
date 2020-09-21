import React from 'react';
import './../../assets/css/MiCuenta.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HistorialMedico(props) {
    const historialInfo = props.historialInfo;
    const fecha = historialInfo.fecha;
    const paciente = historialInfo.paciente;
    const profesional = historialInfo.profesional;
    const medicamentos = historialInfo.medicamentos;
    const estudios = historialInfo.estudios;
    const notas = historialInfo.notas;
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col caja m-2">
                    <div className="row cajaHMInfo align-items-center">
                        <div className="col text-right">
                            <span>{fecha}</span>
                        </div>
                    </div>
                    <div className="row cajaBody ">
                        <div className="col-12 col-md-6  columnas">
                            <div className="row">
                                <div className="col-4 dato">
                                    <span>Paciente: </span>
                                </div>
                                <div className="col-8 info">
                                    <span>{paciente}</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className="row">
                                <div className="col-4 dato">
                                    <span>Profesional: </span>
                                </div>
                                <div className="col-8 info">
                                    <span>{profesional}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row cajaBody ">
                        <div className='col-12 col-md-6 columnas'>
                            <div className="row">
                                <div className="col-4 dato">
                                    <span>Estudios Realizados: </span>
                                </div>
                                <div className="col-8 info">
                                    <ul>
                                        {
                                            estudios.map(
                                                (value, index)=>{
                                                    return(
                                                        <li key={index}> 
                                                            {value}
                                                        </li>
                                                    )
                                                }
                                            )
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className="row">
                                <div className="col-4 dato">
                                    <span>Medicamentos: </span>
                                </div>
                                <div className="col-8 info">
                                    <ul>
                                        {
                                            medicamentos.map(
                                                (value, index)=>{
                                                    return(
                                                        <li key={index}> 
                                                            {value}
                                                        </li>
                                                    )
                                                }
                                            )
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row cajaBody">
                        <div className="col-12 dato">
                            <span>Notas: </span>
                        </div>
                        <div className="col-12 info mb-3">
                            <span>{notas}</span>
                        </div>
                    </div>
                </div>
                
                
                
            </div>
            
        </div>
    );
}