import React from 'react';
import logo from './assets/img/logo.svg';
import './assets/css/App.css';
import Toolbar from './components/Toolbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MediaCard from './components/Novedad.js';
import Calendario from './pages/Calendario';

function App() {
	return (
		<div className="App">
			<Calendario></Calendario>
		</div>
	);
}

export default App;
