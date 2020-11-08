import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './../../assets/css/MiCuenta.css'
import EditarPerfil from './EditarPerfil'
import Usuario from './Usuario'
import AgregarNovedad from './AgregarNovedad'
import { GlobalContext } from '../../controllers/Context';


export default class Perfil extends React.Component {
    static contextType = GlobalContext;
    constructor(props){
        super(props);
        const usuario = props.userInfo;
        this.state = {
            nombre : usuario.nombre,
            apellido : usuario.apellido,
            email : usuario.email,
            telefono : usuario.telefono,
            dni : usuario.dni,
            especialidad : usuario.especialidad,
            matricula : usuario.matricula,
            pacientes : []
        }
    }

    async componentDidMount(){
        const pacientes = await this.context.UsuariosController.getPacientes()
        this.setState({
            pacientes: pacientes
        })
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
                                    <span>Especialidad:</span>
                                </div>
                                <div className="col-8 col-md-4 info-datos">
                                    <span>{this.state.especialidad}</span>
                                </div>
                                <div className="col-4 col-md-2 nombre-datos">
                                    <span>Matricula:</span>
                                </div>
                                <div className="col-8 col-md-4 info-datos">
                                    <span>{this.state.matricula}</span>
                                </div>
                            </div>
                                
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col text-right'>
                            <EditarPerfil></EditarPerfil>
                            <AgregarNovedad></AgregarNovedad>
                        </div>
                    </div>
                    
                </div>
                
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
                            {(this.state.pacientes.length && this.state.pacientes.map(
                                    (value, index)=>{
                                        return(
                                            <Usuario key = {index} userInfo = {value} rol='profesional'></Usuario>
                                        )
                                    }
                                ))}
                        </div>
                    </div>
                </div> 
                

                
            </div>
            
        )
    }
}