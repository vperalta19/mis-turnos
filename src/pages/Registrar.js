import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/Registrar.css';


function Registrar() {
	return (
        // <div className="fondoRegistrar">
        //     <div className="container contenedor">
        //         <div className="row fil1">
        //             <div className = "col-lg-4 col-md-3 col-1"> 
        //             </div>
        //             <div className="col-lg-4 col-10 col-md-6 registro_cont">
        //                 <div className="row fil1_r">
        //                     <div className="col-12 forms_fill">
        //                         <form>
        //                             <span className="namelabel">Nombre</span><br></br>
        //                             <input type="text" id="name" name="name" className="name"></input>
        //                             <span className="surnamelabel">Apellido</span><br></br>
        //                             <input type="text" id="surname" name="surname" className="surname"></input>
        //                             <span className="docidlabel">Documento</span><br></br>
        //                             <input type="text" id="docid" name="docid" className="docid"></input>
        //                             <span className="emaillabel">Email</span><br></br>
        //                             <input type="text" id="email" name="email" className="email"></input>
        //                             <span className="nacimientolabel">Fecha de nacimiento</span><br></br>
        //                             <input type="text" id="nacimiento" name="nacimiento" className="nacimiento"></input>
        //                             <span className="obsociallabel">Obra social</span><br></br>
        //                             <input type="text" id="obsocial" name="obsocial" className="obsocial"></input>
        //                             <span className="nsociolabel">Numero de socio</span><br></br>
        //                             <input type="text" id="nsocio" name="nsocio" className="nsocio"></input>
        //                             <input type="submit" value="Registrarse" id="sub" className="sub text-center"></input>
        //                         </form>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div className="fondoRegistrar">
            <div className="container contenedor">
                <div className="row fil1">
                    <div className = "col-lg-4 col-md-3 col-1"> 
                    </div>
                    <div className="col-lg-4 col-10 col-md-6 registro_cont">
                        <div className="row">
                            <div className="col-12">
                                <span className="namelabel">Nombre</span><br></br>
                                <input type="text" id="name" name="name" className="name text-center"></input>
                            </div>
                            <div className="col-12">
                                <span className="surnamelabel">Apellido</span><br></br>
                                <input type="text" id="surname" name="surname" className="surname text-center"></input>
                            </div>
                            <div className="col-12">
                                <span className="docidlabel">Documento</span><br></br>
                                <input type="text" id="docid" name="docid" className="docid text-center"></input>
                            </div>
                            <div className="col-12">
                                <span className="emaillabel">Email</span><br></br>
                                <input type="text" id="email" name="email" className="email text-center"></input>
                            </div>
                            <div className="col-12">
                                <span className="nacimientolabel">Fecha de nacimiento</span><br></br>
                                <input type="date" id="nacimiento" name="nacimiento" className="nacimiento text-center"></input>
                            </div>
                            <div className="col-12">
                                <span className="obsociallabel">Obra social</span><br></br>
                                <input type="text" id="obsocial" name="obsocial" className="obsocial text-center"></input>
                            </div>
                            <div className="col-12">
                                <span className="nsociolabel">Numero de socio</span><br></br>
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