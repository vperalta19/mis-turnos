import React from 'react';
import './assets/css/App.css';
import Toolbar from './components/Toolbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './components/LandingPage.js';

function App() {
	const toolbar = {
		nombre: 'Juan Manuel Belgrano'
	}
	return (
		<div className="App">
			<Toolbar toolbarInfo={toolbar}></Toolbar>
			<LandingPage></LandingPage>

			
		</div>
	);
}

export default App;
