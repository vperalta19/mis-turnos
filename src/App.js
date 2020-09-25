import React from 'react';
import	{BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Toolbar from './components/Toolbar';
import MiCuenta from './pages/MiCuenta';
import Calendario from './pages/Calendario';
import PedirTurno from './pages/PedirTurno';
import Inicio from './pages/Inicio';

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
						<Route path='/' exact component={Inicio} />
						<Route path='/Calendario' component={Calendario} />
						<Route path='/MiCuenta' component={MiCuenta} />
						<Route path='/PedirTurno' component={PedirTurno} />
					</Switch>
				</div>
			</Router>
		</div>
	);
	}
