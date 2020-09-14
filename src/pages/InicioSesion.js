import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/InicioSesion.css'

/*export default function InicioSesion() {
	return (
        <div className="App">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="test">
                        PRUEBA
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="login">
                            asdasdasd
                        </div>
                    </div>
                </div>       
            </div> 
        </div>
	);
}*/

export default function InicioSesion() {
	return (
        <div className="App">
            <div className = "container">
                <div className="row h-100 align-items-center justify-content-center">
                    <div className="col-lg-6 col-12">
                        <div className="main-login">   
                            <div className="test">
                                PRUEBA
                            </div> 
                            <div className="login">
                                asdasdasd
                            </div>        
                        </div>
                        <div className="main-signup">
                            <div className="signup">
                                ¿Primera vez aqui?
                            </div>
                        </div>       
                    </div>
                </div>
            </div>
        </div>
	);
}