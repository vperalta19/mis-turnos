import React from 'react';
import	{BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import MiCuenta from './pages/MiCuenta';
import Calendario from './pages/Calendario';
import PedirTurno from './pages/PedirTurno';
import Inicio from './pages/Inicio';
import InicioSesion from './pages/InicioSesion';
import Registrar from './pages/Registrar';
import Paciente from './pages/Paciente';


export default class App extends React.Component {

	render(){
		return (
			<Router>
				<div className="App">
					<Switch>
						<Route path='/' exact render={props => (<Inicio {...props} ></Inicio>)} />
						<Route path='/Calendario'  component={Calendario} />
						<Route path='/MiCuenta'  component={MiCuenta} />
						<Route path='/Paciente/:dni'  render={props => (<Paciente {...props} getUsuario={(dni)=>{this.getUsuario(dni)}} ></Paciente>)}  />
						<Route path='/PedirTurno'  component={PedirTurno} />
						<Route path='/InicioSesion' 
						render={props => (<InicioSesion {...props}></InicioSesion>)}
						/>
						
						<Route path='/Registrar' render={props => (<Registrar {...props} ></Registrar>)} />
					</Switch>
				</div>
			</Router>
		);
	}
}

