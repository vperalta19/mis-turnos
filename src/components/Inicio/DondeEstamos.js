
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
                    
                    <iframe title="Mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.40687884328!2d-58.40656798477058!3d-34.59387148046198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca9a9f0e8cb9%3A0x95fc444776ee9d31!2sAv.%20Santa%20Fe%202644%2C%20C1425%20BGO%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1601151577765!5m2!1ses-419!2sar" width="100%" height="50%" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>
        </div>
        
    )
}
