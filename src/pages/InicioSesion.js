import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/InicioSesion.css';


function InicioSesion() {
	return (
        // <div className="fondoLogSign">
        //     <div className = "container-fluid contenedor">
        //         <div className="row fil1 align-items-center">
        //             <div className = "col-lg-3 col-md-3 col-1 col-xl-4"> 
        //             </div>
        //             <div className="col-lg-6 col-10 col-md-6 col-xl-4 login">
        //                 <h1 className="titleLogIn">Iniciar Sesion</h1>
        //                 <form id="inputLogin" className="inputLogin">
        //                     <span className="doclabel">Documento</span><br></br>
        //                     <input type="text" id="docid" name="docid" className="docid"></input>
        //                     <input type="password" id="pass" name="pass" className="pass"></input>
        //                     <input type="submit" value="Iniciar Sesion" id="sub" className="sub"></input>
        //                 </form>
        //                 <button type="button" className="recovery">Olvidé mi contraseña</button>
        //             </div>
        //         </div>
        //         <div className="row fil2">
        //             <div className = "col-lg-4 col-md-3 col-1">
        //             </div>
        //             <div className="col-lg-4 col-10 col-md-6 signup">
        //                 <h1 id="titleSignup" className="titleSignup">¿Primera vez aquí?</h1>
        //                 <p id="textSignup" className="textSignup">Regístrate y empieza a utilizarlo</p>
        //                 <button type="button" className="buttonSignUp">Registrar</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div className="fondoLogSign">
            <div className = "container-fluid contenedor">
                <div className="row fil1 align-items-center">
                    <div className = "col-lg-3 col-md-3 col-1 col-xl-4"> 
                    </div>
                    <div className="col-lg-6 col-10 col-md-6 col-xl-4 login">
                        <div className="col text-center">
                            <h1 className="titleLogIn">Iniciar Sesion</h1>
                        </div>
                        <div className="col">
                            <span className="doclabel">Documento</span><br></br>
                        </div>
                        <div className="col text-center">
                            <input type="text" id="docid" name="docid" className="docid"></input>
                        </div>
                        <div className="col">
                        <span className="passLabel">Contraseña</span><br></br>
                        </div>
                        <div className="col text-center">
                            <input type="password" id="pass" name="pass" className="pass"></input>
                        </div>
                        <div className="col">
                            <button type="button" className="recovery">Olvidé mi contraseña</button> 
                            <input type="submit" value="Iniciar Sesion" id="sub" className="sub align-items-right"></input>
                        </div>
                    </div>
                </div>
                <div className="row fil2">
                    <div className = "col-lg-4 col-md-3 col-1">
                    </div>
                    <div className="col-lg-4 col-10 col-md-6 signup">
                        <h1 id="titleSignup" className="titleSignup">¿Primera vez aquí?</h1>
                        <p id="textSignup" className="textSignup">Regístrate y empieza a utilizarlo</p>
                        <button type="button" className="buttonSignUp">Registrar</button>
                    </div>
                </div>
            </div>
        </div>
	);
}
export default InicioSesion