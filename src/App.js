import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Toolbar from './components/Toolbar';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
import Novedad from './components/Novedad';
import DondeEstamos from './components/DondeEstamos';

function App() {
	const toolbarInfo={
		nombre: 'Valeria Peralta'
	}
	return (
		<div className="App">
			<Toolbar toolbarInfo={toolbarInfo}></Toolbar>
			<LandingPage></LandingPage>
			<Novedad></Novedad>
			<DondeEstamos></DondeEstamos>
			<Footer></Footer>

		</div>
	);
}

export default App;
