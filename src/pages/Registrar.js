import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/Registrar.css';


function Registrar() {
	return (
        <div className="fondoRegistrar">
            <div className="container contenedor">
                <div className="row fil1">
                    <div className = "col-lg-4 col-md-3 col-1"> 
                    </div>
                    <div className="col-lg-4 col-10 col-md-6 registro_cont">
                        <div className="container forms_cont">
                            <div className="row fil1_r">
                                <div className="col-1">
                                </div>
                                <div className="col-12 forms_fill">
                                    <form>
                                        <input type="text" id="name" name="name"></input>
                                        <input type="text" id="surname" name="surname"></input>
                                        <input type="text" id="docid" name="docid"></input>
                                        <input type="text" id="email" name="email"></input>
                                        <input type="text" id="nacimiento" name="nacimiento"></input>
                                        <input type="text" id="obsocial" name="obsocial"></input>
                                        <input type="text" id="nsocio" name="nsocio"></input>
                                        <input type="submit" value="Registrarse" id="sub"></input>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	);
}
export default Registrar