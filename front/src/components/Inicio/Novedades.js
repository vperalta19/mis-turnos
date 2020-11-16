import React from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Novedad from './Novedad'
import './../../assets/css/Novedad.css'
import { GlobalContext } from '../../controllers/Context';


export default class Novedades extends React.Component {
  static contextType = GlobalContext;
  constructor(props){
    super(props);
    this.state = {
      novedades: []
    }
  }
  async componentDidMount(){
    const novedades = await this.context.NovedadesController.getNovedades();
    this.setState({
        novedades: novedades
    })
    this.render()
  } 

  render(){
    const options={
      responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
      }
    }

    return (
      <div class="container-fluid novedad">
        <div className="row align-items-center titulo">
          <div className="col text-center">
            <h1>
              NOVEDADES
            </h1>
          </div>
        </div>
        <div class="row noticias">
            <div class="col-md-12">
              {this.state.novedades.length && (
              <OwlCarousel 
              className="owl-theme"
              items= '3'
              {...options}>
                {this.state.novedades.map(
                  (index) => {
                    return (
                      <Novedad novedad={index}></Novedad>
                    );
                  }
                )}
              </OwlCarousel>)}
            </div>
        </div>
    </div>
    );
  }
}
