import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCalendarAlt} from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import './../../assets/css/Novedad.css'


export default function Novedad(props) {
    const infoNovedad = props.infoNovedad;
    const fecha = infoNovedad.fecha;
    const img = infoNovedad.img;
    const titulo = infoNovedad.titulo;
    const texto = infoNovedad.texto;
    return(
        <div class="post-slide">
            <ul class="post-info">
                <li><FontAwesomeIcon icon={faCalendarAlt}/>{fecha}</li>
            </ul>
            <div class="post-img">
                <img src={img} alt=""/>
            </div>
            <div class="post-content">
                <h3 class="post-title">{titulo}</h3>
                <p class="post-description">{texto}</p>
            </div>
        </div>
     )   
}    
            
            