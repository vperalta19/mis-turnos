import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCalendarAlt} from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import './../../assets/css/Novedad.css'


export default class Novedad extends React.Component {
    constructor(props){
        super(props);
        const infoNovedad = props.novedad;
        console.log(props.novedad)
        this.state = {
            fecha : new Date(infoNovedad.fecha),
            img : infoNovedad.img.slice(0,50)+'w_150,h_100,c_scale/'+infoNovedad.img.slice(50),
            titulo : infoNovedad.titulo,
            texto : infoNovedad.texto,
        }
    }
    
    render(){
        return(
            <div class="post-slide">
                <ul class="post-info">
                    <li><FontAwesomeIcon icon={faCalendarAlt}/> {this.state.fecha.getDate() + '/' + this.state.fecha.getMonth() + '/' + this.state.fecha.getFullYear()}</li>
                </ul>
                <div class="post-img" >
                    <img src={this.state.img} alt=""/>
                </div>
                <div class="post-content">
                    <h3 class="post-title">{this.state.titulo}</h3>
                    <p class="post-description">{this.state.texto}</p>
                </div>
            </div>
        )  
    } 
}    
            
            