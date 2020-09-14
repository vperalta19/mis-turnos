import React from 'react';
import logo from './assets/img/logo.svg';
import './assets/css/App.css';
import Toolbar from './components/Toolbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MediaCard from './components/Novedad.js';

function App() {
	return (
		<div className="App">
			<Toolbar></Toolbar>
			<div className="container-fluid">
				<div className="row">
					<div className="col-4">
						<MediaCard></MediaCard>
					</div>
				</div>
			</div>

			
		</div>
	);
}

export default App;
