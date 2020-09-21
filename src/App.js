import React from 'react';
import Toolbar from './components/Toolbar'
import Perfil from './components/MiCuenta/Perfil'
import PopUp from './components/MiCuenta/PopUp'

function App() {
	const toolbarInfo={
		nombre: 'Valeria Peralta'
	}
	const userInfo={
		nombre: 'Valeria Peralta',
		email: 'vaperalta2018@gmail.com',
		tel: '3855843316',
		dni: '42889052',
		ooss: 'OSPE',
		nroSocio: '123456',
		rol: 'paciente'
	}
	return (
		<div className="App">
			<Toolbar toolbarInfo={toolbarInfo}></Toolbar>
			<Perfil userInfo={userInfo}></Perfil>
			

		</div>
	);
}

export default App;
