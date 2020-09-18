import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/InicioSesion.css';


function InicioSesion() {
	return (
        <div className="fondoLogSign">
            <div className = "container-fluid contenedor">
                <div className="row fil1">
                    <div className = "col-lg-4 col-md-3 col-1"> 
                    </div>
                    <div className="col-lg-4 col-10 col-md-6 login">
                        <h1 id="titleLogIn">Iniciar Sesion</h1>
                        <form id="inputLogin">
                            <input type="text" id="docid" name="docid"></input>
                            <input type="password" id="pass" name="pass"></input>
                            <input type="submit" value="Iniciar Sesion" id="sub"></input>
                        </form>
                    </div>
                </div>
                <div className="row fil2">
                    <div className = "col-lg-4 col-md-3 col-1">
                    </div>
                    <div className="col-lg-4 col-10 col-md-6 signup">
                        <h1 id="titleSignup">¿Primera vez aquí?</h1>
                        <p id="textSignup">Regístrate y empieza a utilizarlo</p>
                        <button type="button" className="buttonSignUp">Registrar</button>
                    </div>
                </div>
            </div>
        </div>
	);
}
export default InicioSesion