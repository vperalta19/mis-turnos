import React from 'react';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/InicioSesion.css';


function InicioSesion() {
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
                            <input type="number" id="docid" name="docid" className="docid text-center"></input>
                        </div>
                        <div className="col">
                        <span>Contraseña</span><br></br>
                        </div>
                        <div className="col text-center">
                            <input type="password" id="pass" name="pass" className="pass text-center"></input>
                        </div>
                        <div className="col text-center botones">
                            <button type="button" className="recovery">Olvidé mi contraseña</button> 
                            <input type="submit" value="Iniciar Sesion" id="sub" className="sub"></input>
                        </div>
                    </div>
                </div>
                <div className="row fil2">
                    <div className = "col-lg-3 col-md-3 col-1 col-xl-4">
                    </div>
                    <div className="col-lg-6 col-10 col-md-6 col-xl-4 signup">
                        <h1 id="titleSignup" className="titleSignup">¿Primera vez aquí?</h1>
                        <p id="textSignup" className="textSignup">Regístrate y empieza a utilizarlo</p>
                        <button type="button" className="buttonSignUp"><Link to='/Registrar'>REGISTRAR</Link></button>
                    </div>
                </div>
            </div>
        </div>
	);
}
export default InicioSesion