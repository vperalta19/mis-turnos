import React from 'react';
import TurnosController from './TurnosController';
import UsuariosController from './UsuariosController';

const globalState = {
	UsuariosController: new UsuariosController(),
	TurnosController: new TurnosController()
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
