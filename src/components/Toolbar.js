import React, {Component} from 'react';

class Componente extends Component{
    render(){
        return(
            fasdf
        );
    }
}

export default Componente

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
        <div class="header-area">
            <div  class="header-top_area d-none d-lg-block">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="usuario">
                                <a href="#">Juan Manuel Belgrano</a>
                            </div>
                        </div>
                        <div class="col">
                            <div class="cerrarSesion">
                                <a href="#">CERRAR SESION</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div id="main-header" class="main-header-area">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-3 col-4">
                            <a href="#">
                                <img src="css/img/logo.png" alt="logo">
                            </a>
                        </div>
                        <div class="col-lg-6 d-none d-lg-block text-center">
                            <div class="toolbar">
                                <ul>
                                    <li>
                                        <a href="#">INICIO</a>
                                    </li>
                                    <li>
                                        <a href="#">CALENDARIO</a>
                                    </li>
                                    <li>
                                        <a href="#">MI CUENTA</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-8 d-lg-none" >
                            <div id="mySidebar" class="sidebar">
                                <a href="#" onclick="closeNav()"><i class="fas fa-times-circle"></i></a>
                                <a href="#" style="font-size: 15px;">Juan Manuel Belgrano</a>
                                <a href="#">INICIO</a>
                                <a href="#">CALENDARIO</a>
                                <a href="#">MI CUENTA</a>
                                <a href="#">CERRAR SESION</a>
                              </div>
                              
                              <div id="main">
                                <a onclick="openNav()">☰</a> 
                              </div>
                            
                        </div>
                        <div class="col-lg-3 col-12" id="pedirTurno">
                            <div class="pedirTurno">
                                <a href="#">PEDIR TURNO</a>
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

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyHeader() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky"); 
        pedirTurno.classList.add("d-none");
        pedirTurno.classList.add("d-lg-block");
        medio.classList.add("margen");
    } else {
        navbar.classList.remove("sticky");
        pedirTurno.classList.remove("d-none");
        medio.classList.remove("margen");
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