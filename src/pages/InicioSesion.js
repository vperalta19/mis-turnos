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
                    </div>
                </div>
                <div className="row fil2">
                    <div className = "col-lg-4 col-md-3 col-1">
                    </div>
                    <div className="col-lg-4 col-10 col-md-6 signup">
                        <h1 id="titleSignup">¿Primera vez aquí?</h1>
                    </div>
                </div>
            </div>
        </div>

            // <div className="container-fluid fondoLogSign">
            //     <div className="row">
            //     </div>
            //     <div className="row fil1">
            //         <div className="col-lg-4 col-md-3">
            //         </div>
            //         <div className="col-lg-4 col-12 col-md-6 login">
            //         </div>
            //     </div>
            //     <div className="row">
            //         <div className="col-lg-4 col-md-3">
            //         </div>
            //         <div className="col-lg-4 col-12 col-md-6 signup">
            //         </div>
            //     </div>  
            // </div> 
	);
}
export default InicioSesion