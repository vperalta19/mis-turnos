import React from 'react';
import	{BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Toolbar from './components/Toolbar';
import MiCuenta from './pages/MiCuenta';
import Calendario from './pages/Calendario';
import PedirTurno from './pages/PedirTurno';
import Inicio from './pages/Inicio';
import InicioSesion from './pages/InicioSesion';
import Registrar from './pages/Registrar';

export default function App() {
	const toolbarInfo={
		nombre: 'Valeria Peralta'
	}
	return (
		<div className="App">
			<Router>
				<div className="App">
					<Toolbar toolbarInfo={toolbarInfo}/>
					<Switch>
						<Route path='/' component={Inicio} />
						<Route path='/Calendario' component={Calendario} />
						<Route path='/MiCuenta' component={MiCuenta} />
						<Route path='/PedirTurno' component={PedirTurno} />
						<Route path='/InicioSesion' component={InicioSesion} />
						<Route path='/Registrar' component={Registrar} />
					</Switch>
				</div>
			</Router>
		</div>
	);
	}
