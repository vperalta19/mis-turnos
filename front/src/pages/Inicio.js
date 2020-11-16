import React from 'react';
import Toolbar from './../components/Toolbar';
import LandingPage from './../components/Inicio/LandingPage';
import Footer from './../components/Inicio/Footer';
import Novedades from './../components/Inicio/Novedades';
import DondeEstamos from './../components/Inicio/DondeEstamos';

export default class Inicio extends React.Component{
	cerrarSesion(){
		this.props.history.push("/")
	}

	render(){
		return (
			<div className="Inicio">
				<Toolbar cerrarFn={ () => { this.cerrarSesion(); } }/>
				<LandingPage></LandingPage>
				<Novedades></Novedades>
				<DondeEstamos></DondeEstamos>
				<Footer></Footer>

			</div>
		);
	}
}