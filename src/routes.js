import React from 'react'
import {Route, Switch} from 'react-router-dom'
import App from './App'

//Pages
import Inicio from './pages/Inicio'
import Calendario from './pages/Calendario'
import MiCuenta from './pages/MiCuenta'
import PedirTurno from './pages/PedirTurno'
import Registrar from './pages/Registrar'
import InicioSesion from './pages/InicioSesion'

const AppRoutes = ()=>
    <App>
        <Switch>
            <Route path='/' component={Inicio}/>
            <Route path='/Calendario' component={Calendario}/>
            <Route path='/MiCuenta' component={MiCuenta}/>
            <Route path='/PedirTurno' component={PedirTurno}/>
            <Route path='/Registrar' component={Registrar}/>
            <Route path='/InicioSesion' component={InicioSesion}/>
        </Switch>
    </App>;

export default AppRoutes;
