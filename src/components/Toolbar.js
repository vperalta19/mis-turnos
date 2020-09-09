import React, {Component} from 'react';

class Toolbar extends Component{
	render() {
		return(
			<div className="header-area">
				<div  className="header-top_area d-none d-lg-block">
					<div className="container">
						<div className="row">
							<div className="col">
								<div className="usuario">
									<div>Juan Manuel Belgrano</div>
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
				<div id="main-header" className="main-header-area">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-3 col-4">
								<img src="css/img/logo.png" alt="logo"/>
							</div>
							<div className="col-lg-6 d-none d-lg-block text-center">
								<div className="toolbar">
									<ul>
										<li>
											<div>INICIO</div>
										</li>
										<li>
											<div>CALENDARIO</div>
										</li>
										<li>
											<div>MI CUENTA</div>
										</li>
									</ul>
								</div>
							</div>

							<div className="col-8 d-lg-none" >
								<div id="mySidebar" className="sidebar">
									<div onclick="closeNav()"><i className="fas fa-times-circle"></i></div>
									<div>Juan Manuel Belgrano</div>
									<div>INICIO</div>
									<div>CALENDARIO</div>
									<div>MI CUENTA</div>
									<div>CERRAR SESION</div>
								</div>
								<div id="main">
									<div onclick="openNav()">☰</div>
								</div>
								
							</div>
							<div className="col-lg-3 col-12" id="pedirTurno">
								<div className="pedirTurno">
									<div>PEDIR TURNO</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Toolbar

//HTML

/*<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<link rel="stylesheet" href="css/fontawesome-free-5.14.0-web/css/all.css">
	<link rel="stylesheet" href="css/styles.css">
	<title>Document</title>
</head>
<body>
	<header>
		<div className="header-area">
			<div  className="header-top_area d-none d-lg-block">
				<div className="container">
					<div className="row">
						<div className="col">
							<div className="usuario">
								<div>Juan Manuel Belgrano</div>
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
			<div id="main-header" className="main-header-area">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-3 col-4">
							<div>
								<img src="css/img/logo.png" alt="logo">
							</div>
						</div>
						<div className="col-lg-6 d-none d-lg-block text-center">
							<div className="toolbar">
								<ul>
									<li>
										<div>INICIO</div>
									</li>
									<li>
										<div>CALENDARIO</div>
									</li>
									<li>
										<div>MI CUENTA</div>
									</li>
								</ul>
							</div>
						</div>

						<div className="col-8 d-lg-none" >
							<div id="mySidebar" className="sidebar">
								<a href="#" onclick="closeNav()"><i className="fas fa-times-circle"></i></div>
								<a href="#" style="font-size: 15px;">Juan Manuel Belgrano</div>
								<div>INICIO</div>
								<div>CALENDARIO</div>
								<div>MI CUENTA</div>
								<div>CERRAR SESION</div>
							  </div>
							  
							  <div id="main">
								<a onclick="openNav()">☰</div> 
							  </div>
							
						</div>
						<div className="col-lg-3 col-12" id="pedirTurno">
							<div className="pedirTurno">
								<div>PEDIR TURNO</div>
							</div>
						</div>

				</div>
			</div>
		</div>
	</header>
	<script type="text/javascript" src="js/navbar.js"></script>
</body>
</html> */

//JS
/*// When the user scrolls the page, execute myFunction 
window.onscroll = function() {stickyHeader()};

// Get the navbar
var navbar = document.getElementById("main-header");
var pedirTurno = document.getElementById("pedirTurno");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky className to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyHeader() {
	if (window.pageYOffset >= sticky) {
		navbar.classNameList.add("sticky"); 
		pedirTurno.classNameList.add("d-none");
		pedirTurno.classNameList.add("d-lg-block");
		medio.classNameList.add("margen");
	} else {
		navbar.classNameList.remove("sticky");
		pedirTurno.classNameList.remove("d-none");
		medio.classNameList.remove("margen");
	}
}

function openNav() {
	document.getElementById("mySidebar").style.width = "250px";
	document.getElementById("main").style.marginLeft = "250px";
  }
  
function closeNav() {
	document.getElementById("mySidebar").style.width = "0";
	document.getElementById("main").style.marginLeft= "0";
} */