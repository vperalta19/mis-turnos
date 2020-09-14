import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/landingPage.css'
import doctores from './../assets/img/doctores.png'
import calendario from './../assets/img/weeks.png'
import check from './../assets/img/interface.png'
import pcovid from './../assets/img/personasCovid.png'

export default function LandingPage() {
    return(
        <div>
            <div className="container-fluid medio">
                <div className="row">
                    <div className="col textoInicio text-left">
                        <div className='negrita'>
                            <span>LA MANERA MAS </span>FACIL<br />
                            <span>DE ADMINISTRAR TUS</span><br/>
                            TURNOS
                        </div>
                    </div>
                </div>
            </div>
            <div className="pasos">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-4 col-md-4 p-0">
                            <div className="paso-individual">
                                <div className="icon">
                                    <img src={doctores} alt="doctores"/>
                                </div>
                                <div className="letras">
                                    <span>En solo 5 minutos</span>
                                    <h3>REGISTRATE</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 p-0">
                            <div className="paso-individual">
                                <div className="icon">
                                    <img src={calendario} alt="calendario"/>
                                </div>
                                <div className="letras">
                                    <span>Elige</span>
                                    <h3>FECHA Y HORA</h3>
                                </div>
                                    
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 p-0">
                            <div className="paso-individual">
                                <div className="icon">
                                    <img src={check} alt="check"/>
                                </div>
                                <div className="letras">
                                    <h3>LISTO!</h3>
                                    <span>Pedi tu Turno</span>
                                </div>
                            </div>                
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid novedades">
                <div className="row align-items-center">
                    <div className="col-12 col-md-6 text-center sobreNosotros ">
                        <div className="row">
                            <div className="col">
                                <h1>Sobre Nosotros</h1>
                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an.</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="social_media_links">
                                    <div className="redes"><FontAwesomeIcon icon={faInstagram}/></div>
                                    <div className="redes"><FontAwesomeIcon icon={faFacebook}/></div>
                                    <div className="redes"><FontAwesomeIcon icon={faTwitter}/></div>            
                                </div>
                            </div>
                        </div>
                    </div>
                        
                    <div className="col-12 col-md-6">
                        <img src={pcovid} alt="personas covid" className="p-covid"/>
                    </div>
                </div>
            </div>
        </div>
    );
}