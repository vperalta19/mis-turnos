import React from 'react';

import LandingPage from './../components/Inicio/LandingPage';
import Footer from './../components/Inicio/Footer';
import Novedades from './../components/Inicio/Novedades';
import DondeEstamos from './../components/Inicio/DondeEstamos';

export default function Inicio(){
	
	return (
		<div className="Inicio">
			<LandingPage></LandingPage>
			<Novedades></Novedades>
			<DondeEstamos></DondeEstamos>
			<Footer></Footer>

		</div>
	);
}