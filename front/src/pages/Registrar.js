import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/Registrar.css';
import { Alert } from '@material-ui/lab';
import { GlobalContext } from '../controllers/Context';


export default class Registrar extends React.Component {
    static contextType = GlobalContext;
    constructor(props){
        super(props);
        this.state={
          nombre: '',
          apellido: '',
          email: '',
          dni: '',
          ooss: '',
          nroSocio: '',
          contraseña: '',
          fechaNacimiento: null,
          telefono: '',
          alert: false,
          alertDescripcion: '',
          submit: false,
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }
  
    handleClick = async () => {
        const usuario = {
            nombre: this.state.nombre,
            apellido: this.state.apellido,
            email: this.state.email,
            dni: this.state.dni,
            ooss: this.state.ooss,
            nroSocio: this.state.nroSocio,
            contraseña: this.state.contraseña,
            fechaNacimiento: this.state.fechaNacimiento,
            telefono: this.state.telefono,
            rol: 'Paciente'
        }
        
        if(!usuario.nombre.length || !usuario.apellido.length || !usuario.email.length || !usuario.dni.length || !usuario.contraseña.length || !usuario.fechaNacimiento || !usuario.telefono.length){
            this.setState({submit:true})
        }
        else{
            const validacion = await this.context.UsuariosController.setUsuarioLogged(usuario)
            if(validacion) {
                this.props.history.push("/")
            }
            else {this.setState({alert:true,alertDescripcion:'El usuario ya existe'})}
            
        }
        
        
        
        // this.props.history.push("/")
    }

    render(){
        return (
            <div id='medio' className="fondoRegistrar">
                <div className="container-fluid contenedor">
                    <div className="row fil1">
                        <div className = "col-xl-4 col-md-3 col-1"> 
                        </div>
                        <div className="col-xl-4 col-10 col-md-6 registro_cont">
                            <div className="row">
                                {(() => {
                                    if (this.state.alert){
                                        return (
                                            <Alert style={{width:'100%'}} variant="filled" severity="error">
                                                {this.state.alertDescripcion}
                                            </Alert>
                                        )
                                    }
                                    
                                    return null;
                                })()}
                                <div className="col-12">
                                    <span className={(!this.state.nombre && this.state.submit) ? 'rojo' : '' }>Nombre</span><br></br>
                                    <input type="text" id="name" className="text-center" value={this.state.nombre} name='nombre' onChange={this.handleChange}></input>
                                </div>
                                <div className="col-12">
                                    <span className={(!this.state.apellido.length && this.state.submit) ? 'rojo' : '' }>Apellido</span><br></br>
                                    <input type="text" id="surname" className="text-center" value={this.state.apellido} name='apellido' onChange={this.handleChange}></input>
                                </div>
                                <div className="col-12">
                                    <span className={(!this.state.dni.length && this.state.submit) ? 'rojo' : '' }>Documento</span><br></br>
                                    <input type="number" id="docid" className="text-center" value={this.state.dni} name='dni' onChange={this.handleChange}></input>
                                </div>
                                <div className="col-12">
                                    <span className={(!this.state.email.length && this.state.submit) ? 'rojo' : '' }>Email</span><br></br>
                                    <input type="text" id="email" className="text-center" value={this.state.email} name='email' onChange={this.handleChange}></input>
                                </div>
                                <div className="col-12">
                                    <span >Obra social</span><br></br>
                                    <input type="text" id="obsocial" className="text-center" value={this.state.ooss} name='ooss' onChange={this.handleChange}></input>
                                </div>
                                <div className="col-12">
                                    <span >Numero de socio</span><br></br>
                                    <input type="number" id="nsocio" className="text-center" value={this.state.nroSocio} name='nroSocio' onChange={this.handleChange}></input>
                                </div>
                                <div className="col-12">
                                    <span className={(!this.state.fechaNacimiento && this.state.submit) ? 'rojo' : '' }>Fecha de nacimiento</span><br></br>
                                    <input type="date" id="nacimiento" className=" text-center" value={this.state.fechaNacimiento} name='fechaNacimiento' onChange={this.handleChange}></input>
                                </div>
                                <div className="col-12">
                                    <span className={(!this.state.telefono.length && this.state.submit) ? 'rojo' : '' }>Telefono de Contato</span><br></br>
                                    <input type="number" id="telefono" className="text-center" value={this.state.telefono} name='telefono' onChange={this.handleChange}></input>
                                </div>
                                <div className="col-12">
                                    <span className={(!this.state.contraseña.length && this.state.submit) ? 'rojo' : '' }>Contraseña</span><br></br>
                                    <input type="password" id="contraseña" className="text-center" value={this.state.contraseña} name='contraseña' onChange={this.handleChange}></input>
                                </div>
                                <div className="col-12 text-center">
                                    <button type="submit" className="sub text-center" onClick={this.handleClick}>Registrarse</button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
