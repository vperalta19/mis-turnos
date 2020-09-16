import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons'
import './../assets/css/components.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './../assets/img/logo.png'

export default function Toolbar(props) {
	let name = props.toolbarInfo.nombre;
	return(
		<div className="header-area">
			{(() => {
              if (name){
                  return (
					<div  className="header-top_area d-none d-lg-block">
						<div className="container">
							<div className="row">
								<div className="col">
									<div className="usuario">
										{name}
									</div>
								</div>
								<div className="col">
									<div className="cerrarSesion">
										<div>CERRAR SESION</div>
									</div>
								</div>
							</div>
						</div>
					</div>
                  )
              }
              
              return null;
            })()}
			<div id="main-header" className="main-header-area">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-3 col-4">
							<img src={logo} alt="logo"/>
						</div>
						<div className="col-lg-6 d-none d-lg-block text-center">
							{(() => {
								if (name){
									return (
										<div className="toolbar">
											<ul>
												<li className="seccion">
													INICIO
												</li>
												<li className="seccion">
													CALENDARIO
												</li>
												<li className="seccion">
													MI CUENTA
												</li>
											</ul>
										</div>
									)
								}
								
								return null;
							})()}
							
						</div>

						<div className="col-8 d-lg-none" >
							{(() => {
								if (name){
									return (
										<div>
											<div id="mySidebar" className="sidebar">
												<div className="x" onClick={closeNav}><FontAwesomeIcon icon={faTimesCircle}/></div>
												<div className="usuario">{name}</div>
												
												<div className="seccionSideBar">INICIO</div>
												<div className="seccionSideBar">CALENDARIO</div>
												<div className="seccionSideBar">MI CUENTA</div>
												<div className="sideBarCerrarSesion">CERRAR SESION</div>
											</div>
											<div id="main">
												<div onClick={openNav}>☰</div>
											</div>
										</div>
									)
								}
								
								return null;
							})()}
							
							
						</div>
						<div className="col-lg-3 col-12" id="pedirTurno">
							<div className="pedirTurno">
							{(() => {
								if (name){
									return (
										<div>PEDIR TURNO</div>
									)
								}
								else{
									return (
										<div>INICIAR SESION</div>
									)
								}
								
							})()}
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function openNav() {
	document.getElementById("mySidebar").style.width = "250px";
	document.getElementById("main").style.marginLeft = "250px";
  }
  
function closeNav() {
	document.getElementById("mySidebar").style.width = "0";
	document.getElementById("main").style.marginLeft= "0";
}


// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyHeader() {
	// Get the navbar
	var navbar = document.getElementById("main-header");
	var pedirTurno = document.getElementById("pedirTurno");
	var medio = document.getElementById('medio');
	var headerTop = document.getElementsByClassName('header-top_area')

	// Get the offset position of the navbar
	var sticky = navbar.getBoundingClientRect().top;

	console.log(sticky);
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky"); 
        pedirTurno.classList.add("d-none");
		pedirTurno.classList.add("d-lg-block");
		console.log(headerTop);
		if(headerTop.length !== 0){
			medio.classList.add('margen')
		}
		
        
    } else {
        navbar.classList.remove("sticky");
		pedirTurno.classList.remove("d-none");
		if(headerTop.length !== 0){
			medio.classList.remove('margen')
		}
    }
}

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {stickyHeader()};




