import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/Registrar.css';


function Registrar() {
	return (
        <div id='medio' className="fondoRegistrar">
            <div className="container-fluid contenedor">
                <div className="row fil1">
                    <div className = "col-xl-4 col-md-3 col-1"> 
                    </div>
                    <div className="col-xl-4 col-10 col-md-6 registro_cont">
                        <div className="row">
                            <div className="col-12">
                                <span>Nombre</span><br></br>
                                <input type="text" id="name" name="name" className="name text-center"></input>
                            </div>
                            <div className="col-12">
                                <span >Apellido</span><br></br>
                                <input type="text" id="surname" name="surname" className="surname text-center"></input>
                            </div>
                            <div className="col-12">
                                <span >Documento</span><br></br>
                                <input type="number" id="docid" name="docid" className="docid text-center"></input>
                            </div>
                            <div className="col-12">
                                <span >Email</span><br></br>
                                <input type="text" id="email" name="email" className="email text-center"></input>
                            </div>
                            <div className="col-12">
                                <span >Fecha de nacimiento</span><br></br>
                                <input type="date" id="nacimiento" name="nacimiento" className="nacimiento text-center"></input>
                            </div>
                            <div className="col-12">
                                <span >Obra social</span><br></br>
                                <input type="text" id="obsocial" name="obsocial" className="obsocial text-center"></input>
                            </div>
                            <div className="col-12">
                                <span >Numero de socio</span><br></br>
                                <input type="number" id="nsocio" name="nsocio" className="nsocio text-center"></input>
                            </div>
                            <div className="col-12 text-center">
                                <button type="button" className="sub text-center">Registrarse</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	);
}
export default Registrar