import React from 'react';
import {Link} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/InicioSesion.css';

import { Alert } from '@material-ui/lab';
import { GlobalContext } from '../controllers/Context';


export default class InicioSesion extends React.Component {
    static contextType = GlobalContext;
    constructor(props){
        super(props);
        this.state = {
            dni: '',
            contraseña: '',
            alert: false
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
          [name]: value
        })
      }

      handleClick = async () => {
        const login = {
          dni: this.state.dni,
          contraseña: this.state.contraseña,
        }
        const validacion = await this.context.UsuariosController.login(login)
        
        if(validacion){
            this.props.history.push("/")
        }
        else{
            this.setState({
                alert: true
            })
            
        }
      }


    render(){
        return (
            <div id='medio' className="fondoLogSign">
                <div className = "container-fluid contenedor">
                    <div className="row fil1 align-items-center">
                        <div className = "col-lg-3 col-md-3 col-1 col-xl-4"> 
                        </div>
                        <div className="col-lg-6 col-10 col-md-6 col-xl-4 login">
                            <div className="col text-center">
                                <h1 className="titleLogIn">Iniciar Sesión</h1>
                            </div>
                            <div className="col">
                                <span>Documento</span><br></br>
                            </div>
                            <div className="col text-center">
                                <input type="number" 
                                        id="docid" 
                                        name="dni" 
                                        value={this.state.dni} 
                                        className="docid text-center"
                                        onChange={this.handleChange}
                                        >        
                                </input>
                            </div>
                            <div className="col">
                            <span>Contraseña</span><br></br>
                            </div>
                            <div className="col text-center">
                                <input type="password" 
                                        id="pass" 
                                        name="contraseña" 
                                        value={this.state.contraseña} 
                                        className="pass text-center"
                                        onChange={this.handleChange}
                                        >
                                       
                                </input>
                            </div>
                            <div className="col text-center botones">
                                <button type="button" className="recovery">Olvidé mi contraseña</button> 
                                <input type="submit" value="Iniciar Sesion" id="sub" className="sub" onClick={this.handleClick}></input>
                                {(() => {
                                    if (this.state.alert){
                                        return (
                                            <Alert variant="filled" severity="error">
                                                Los datos no son correctos, por favor volvé a ingresarlos.
                                            </Alert>
                                        )
                                    }
                                    
                                    return null;
                                })()}
                            </div>
                        </div>
                    </div>
                    <div className="row fil2">
                        <div className = "col-lg-3 col-md-3 col-1 col-xl-4">
                        </div>
                        <div className="col-lg-6 col-10 col-md-6 col-xl-4 signup">
                            <h1 id="titleSignup" className="titleSignup">¿Primera vez aquí?</h1>
                            <p id="textSignup" className="textSignup">Regístrate y empieza a utilizarlo</p>
                            <Link to='/Registrar'><button type="button" className="buttonSignUp">REGISTRAR</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
