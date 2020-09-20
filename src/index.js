import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';

import * as serviceWorker from './serviceWorker';
import App from './App';
import InicioSesion from './pages/InicioSesion'
import Registrar from './pages/Registrar'

ReactDOM.render(
  <React.StrictMode>
    {/* <App/> */}
    <InicioSesion/>
    {/* <Registrar/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
