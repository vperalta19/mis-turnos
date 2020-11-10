import React from 'react';
import UsuariosController from './UsuariosController';
import RecetasController from './RecetasController';
import NovedadesController from './NovedadesController';

const globalState = {
	UsuariosController: new UsuariosController(),
	NovedadesController: new NovedadesController(),
	RecetasController: new RecetasController(),
};

export const GlobalContext = React.createContext(globalState);
const GlobalContextProvider = (props) => {
	return (
		<GlobalContext.Provider value={globalState}>
			{props.children}
		</GlobalContext.Provider>
	);
};
export default GlobalContextProvider;
