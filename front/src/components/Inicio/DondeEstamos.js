
import React from 'react';
import './../../assets/css/components.css'

export default function DondeEstamos() {
    return(
        <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-12 col-md-6 col-lg-4 text-center dondeEstamos">
                    <h3>Donde Estamos</h3>
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an.</span>
                </div>
                <div className="col-12 col-md-6 col-lg-8">

                    <iframe title="Mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.4900688477414!2d-58.3841277845034!3d-34.61705396571147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaba6ac89b35%3A0x1a2dc24cbca665a7!2sUADE!5e0!3m2!1ses-419!2sar!4v1601288867642!5m2!1ses-419!2sar" width="100%" height="50%" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>
        </div>
        
    )
}
