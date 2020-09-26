import React from 'react';
import Toolbar from './../components/Toolbar';
import LandingPage from './../components/Inicio/LandingPage';
import Footer from './../components/Inicio/Footer';
import Novedades from './../components/Inicio/Novedades';
import DondeEstamos from './../components/Inicio/DondeEstamos';

export default function Inicio(){
	const toolbarInfo={
		nombre: 'valeria'
	}
	return (
		<div className="Inicio">
			<Toolbar toolbarInfo={toolbarInfo}/>
			<LandingPage></LandingPage>
			<Novedades></Novedades>
			<DondeEstamos></DondeEstamos>
			<Footer></Footer>

		</div>
	);
}