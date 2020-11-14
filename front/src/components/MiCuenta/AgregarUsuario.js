import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './../../assets/css/MiCuenta.css'
import { GlobalContext } from '../../controllers/Context';
import { FormControl, InputLabel, Select } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

export default class AgregarEstudio extends React.Component {
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
        rol: '',
        matricula: '',
        especialidad: '',
        alert: false,
        alertDescripcion: '',
        submit: false,
        open: false,
        }
    }

    handleClickOpen = () => {
        this.setState({
          open:true
        })
      };
    
      handleClose = () => {
        this.setState({
          open:false
        })
      };
    
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
            rol: this.state.rol
        }
        
        if(!usuario.nombre.length || !usuario.apellido.length || !usuario.email.length || !usuario.dni.length || !usuario.contraseña.length || !usuario.fechaNacimiento || !usuario.telefono.length){
            this.setState({submit:true})
        }
        else{
            
            const validacion = await this.context.UsuariosController.registrar(usuario)
            if(validacion){
                this.setState({
                  alert:true,
                  alertType:'success',
                  alertDescript: 'Usuario creado con exito'
                })
                setTimeout(() => {
                  this.handleClose();
                  window.location.reload()
                }, 2000);
              }
              else{
                this.setState({
                  alert:true,
                  alertType:'error',
                  alertDescript: 'No se pudo crear el usuario, intentelo de nuevo'
                })
              }
              
            };
            
        }
    


  render(){
    return (
      <div>
        <div className='btn-agregar-r' onClick={this.handleClickOpen}>Agregar Usuario</div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="agregarHM-Titulo"
          aria-describedby="agregarHM-Contenido"
        >
          {(() => {
            if (this.state.alert){
                return (
                    <Alert style={{width:'100%'}} variant="filled" severity={this.state.alertType}>
                        {this.state.alertDescript}
                    </Alert>
                )
            }
            
            return null;
          })()}
          <DialogTitle id="agregarHM-Titulo">{"Agregar Usuario"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="agregarHM-Contenido">
              <div className='container'>
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
                    
                    <div className="col-12">
                        <span >Obra social</span><br></br>
                        <input type="text" id="obsocial" className="text-center" value={this.state.ooss} name='ooss' onChange={this.handleChange}></input>
                    </div>
                    <div className="col-12">
                        <span >Numero de socio</span><br></br>
                        <input type="number" id="nsocio" className="text-center" value={this.state.nroSocio} name='nroSocio' onChange={this.handleChange}></input>
                    </div>
                    <div className="col-12">
                        <span >Matricula</span><br></br>
                        <input type="text" id="matricula" className="text-center" value={this.state.matricula} name='matricula' onChange={this.handleChange}></input>
                    </div>
                    <div className="col-12">
                        <span >Especialidad</span><br></br>
                        <input type="number" id="especialidad" className="text-center" value={this.state.especialidad} name='especialidad' onChange={this.handleChange}></input>
                    </div>
                    <FormControl variant="filled" className='integrantes-control text-center'>
                        <InputLabel htmlFor="filled-age-native-simple">Rol</InputLabel>
                        <Select
                            native
                            name='rol'
                            value={this.state.rol}
                            onChange={this.handleChange}
                            label="Rol"
                            inputProps={{
                                name: 'rol',
                                id: 'filled-age-native-simple',
                            }}
                            >
                                <option aria-label="None" value="" />
                                <option value='Paciente'>Paciente</option>
                                <option value='Medico'>Medico</option>
                                <option value='Secretaria'>Secretaria</option>
                        </Select>
                    </FormControl>
                </div>
                  
      
              
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClick.bind(this)}>
              Confirmar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );  
                    
  }
}
