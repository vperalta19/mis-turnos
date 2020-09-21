import React from 'react';
import './../../assets/css/MiCuenta.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Receta(props) {
    const recetaInfo = props.recetaInfo;
    const fecha = recetaInfo.fecha;
    const paciente = recetaInfo.paciente;
    const profesional = recetaInfo.profesional;
    const medicamentos = recetaInfo.medicamentos;
    const estudios = recetaInfo.estudios;
    const notas = recetaInfo.notas;
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col caja m-2">
                    <div className="row cajaRInfo align-items-center">
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
                                    <span>{paciente} </span>
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