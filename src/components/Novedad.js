import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCalendarAlt} from '@fortawesome/free-solid-svg-icons'
import './../assets/css/Novedad.css'


export default function Novedad() {
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

  let fecha = 'may 4, 2016'
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
              <OwlCarousel 
              className="owl-theme"
              items= '3'
              itemsDesktop= {[1199,3]}
              itemsDesktopSmall= {[1000,2]}
              itemsMobile= {[600,1]}
              autoplay
              loop
              {...options}
               >
                <div class="post-slide">
                    <ul class="post-info">
                        <li><FontAwesomeIcon icon={faCalendarAlt}/>{fecha}</li>
                    </ul>
                    <div class="post-img">
                        <img src="http://bestjquery.com/tutorial/news-slider/demo31/images/img-4.jpg" alt=""/>
                    </div>
                    <div class="post-content">
                        <h3 class="post-title">Latest News Post</h3>
                        <p class="post-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ducimus est, excepturi nam odit possimus? Accusantium, aut beatae commodi dolore dolores esse fugit id illum ipsam nemo nesciunt obcaecati officiis praesentium provident quasi quis quo repellat sapiente sequi temporibus voluptates.</p>
                    </div>
                </div>
                <div class="post-slide">
                    <ul class="post-info">
                        <li><FontAwesomeIcon icon={faCalendarAlt}/>{fecha}</li>
                    </ul>
                    <div class="post-img">
                        <img src="http://bestjquery.com/tutorial/news-slider/demo31/images/img-4.jpg" alt=""/>
                    </div>
                    <div class="post-content">
                        <h3 class="post-title">Latest News Post</h3>
                        <p class="post-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ducimus est, excepturi nam odit possimus? Accusantium, aut beatae commodi dolore dolores esse fugit id illum ipsam nemo nesciunt obcaecati officiis praesentium provident quasi quis quo repellat sapiente sequi temporibus voluptates.</p>
                    </div>
                </div>
                <div class="post-slide">
                    <ul class="post-info">
                        <li><FontAwesomeIcon icon={faCalendarAlt}/>{fecha}</li>
                    </ul>
                    <div class="post-img">
                        <img src="http://bestjquery.com/tutorial/news-slider/demo31/images/img-4.jpg" alt=""/>
                    </div>
                    <div class="post-content">
                        <h3 class="post-title">Latest News Post</h3>
                        <p class="post-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ducimus est, excepturi nam odit possimus? Accusantium, aut beatae commodi dolore dolores esse fugit id illum ipsam nemo nesciunt obcaecati officiis praesentium provident quasi quis quo repellat sapiente sequi temporibus voluptates.</p>
                    </div>
                </div>
                <div class="post-slide">
                    <ul class="post-info">
                        <li><FontAwesomeIcon icon={faCalendarAlt}/>{fecha}</li>
                    </ul>
                    <div class="post-img">
                        <img src="http://bestjquery.com/tutorial/news-slider/demo31/images/img-4.jpg" alt=""/>
                    </div>
                    <div class="post-content">
                        <h3 class="post-title">Latest News Post</h3>
                        <p class="post-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ducimus est, excepturi nam odit possimus? Accusantium, aut beatae commodi dolore dolores esse fugit id illum ipsam nemo nesciunt obcaecati officiis praesentium provident quasi quis quo repellat sapiente sequi temporibus voluptates.</p>
                    </div>
                </div>
                <div class="post-slide">
                    <ul class="post-info">
                        <li><FontAwesomeIcon icon={faCalendarAlt}/>{fecha}</li>
                    </ul>
                    <div class="post-img">
                        <img src="http://bestjquery.com/tutorial/news-slider/demo31/images/img-4.jpg" alt=""/>
                    </div>
                    <div class="post-content">
                        <h3 class="post-title">Latest News Post</h3>
                        <p class="post-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ducimus est, excepturi nam odit possimus? Accusantium, aut beatae commodi dolore dolores esse fugit id illum ipsam nemo nesciunt obcaecati officiis praesentium provident quasi quis quo repellat sapiente sequi temporibus voluptates.</p>
                    </div>
                </div>
              </OwlCarousel>
          </div>
      </div>
  </div>
  );
}
