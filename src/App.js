import React from 'react';
import './assets/css/App.css';
import Toolbar from './components/Toolbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MediaCard from './components/Novedad.js';

function App() {
	const toolbar = {
		nombre: ''
	}
	return (
		<div className="App">
			<Toolbar toolbarInfo={toolbar}></Toolbar>
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
