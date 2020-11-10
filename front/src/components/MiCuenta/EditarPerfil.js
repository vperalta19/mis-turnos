import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './../../assets/css/MiCuenta.css'
import { Alert } from '@material-ui/lab';
import { GlobalContext } from '../../controllers/Context';

export default class EditarPerfil extends React.Component {
  static contextType = GlobalContext;
  constructor(props){
    super(props);
    this.state = {
      open: false,
      alert: false,
      dniOriginal: '',
      nombre : '',
      apellido : '',
      email : '',
      telefono : '',
      dni : '',
      ooss : '',
      nroSocio : '',
      contraseña: '',
      boton: props.boton
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({
        [name]: value
    })
  }

  handleClickOpen = () => {
    this.setState({
      open:true
    })
  };

  handleClick = async () => {
    const usuario ={
      nombre : this.state.nombre,
      apellido : this.state.apellido,
      email : this.state.email,
      telefono : this.state.telefono,
      dni : this.state.dni,
      ooss : this.state.ooss,
      nroSocio : this.state.nroSocio,
      contraseña: this.state.contraseña
    }
    console.log(usuario, this.state.dniOriginal)
    const response = await this.context.UsuariosController.editarUsuario(usuario,this.state.dniOriginal)
    if (response){
      this.setState({
        open:false
      })
      window.location.reload()
    }
    else{
      this.setState({
        open:true
      })
    }
    
  };

  async componentDidMount(){
    const usuario = await this.context.UsuariosController.getUsuario(this.props.dni)
    
    this.setState({
        nombre : usuario.nombre,
        apellido : usuario.apellido,
        email : usuario.email,
        telefono : usuario.telefono,
        dni : usuario.dni,
        dniOriginal : this.props.dni,
        contraseña : usuario.contraseña,
        ooss : usuario.ooss,
        nroSocio : usuario.nroSocio,
        fechaNacimiento: usuario.fechaNacimiento
    })
}
  
  render(){
    return (
      <div>
        {(() => {
            if (this.state.boton === 'admin'){
                return (
                  <div className='btn-Modificar' onClick={this.handleClickOpen}>Modificar</div>
                )
            }
            else{
              return(
                <div className='btn-Editar' onClick={this.handleClickOpen}>Editar Perfil</div>
              )
            }
        })()}
        
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="editarPerfilTitulo"
          aria-describedby="editarPerfilContenido"
        >
          <DialogTitle id="editarPerfilTitulo">{"Editar Perfil"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="editarPerfilContenido">
              <div className='container'>
                {(() => {
                    if (this.state.alert){
                        return (
                            <Alert variant="filled" severity="error">
                                No existe usuario con ese dni
                            </Alert>
                        )
                    }
                    
                    return null;
                })()}
                <div className="row m-2">
                    <div className="col-4">
                        <span>Nombre:</span>
                    </div>
                    <div className="col-8">
                      <input type="text" value={this.state.nombre} name='nombre' onChange={this.handleChange}></input>
                    </div>
                </div>
                <div className="row m-2">
                    <div className="col-4">
                        <span>Apellido:</span>
                    </div>
                    <div className="col-8">
                      <input type="text" value={this.state.apellido} name='apellido' onChange={this.handleChange}></input>
                    </div>
                </div>
                <div className='row m-2'>
                  <div className="col-4">
                      <span>DNI:</span>
                  </div>
                  <div className="col-8">
                    <input type="number" value={this.state.dni} name='dni' onChange={this.handleChange}></input>
                  </div>
                </div>
                <div className="row m-2 ">
                    <div className="col-4">
                        <span>Email: </span>
                    </div>
                    <div className="col-8">
                      <input type="email" value={this.state.email} name='email' onChange={this.handleChange}></input>
                    </div>
                </div>
                <div className='row m-2'>
                  <div className="col-4">
                      <span>Obra Social:</span>
                  </div>
                  <div className="col-8">
                    <input type="text" value={this.state.ooss} name='ooss' onChange={this.handleChange}></input>
                  </div>
                </div>
                <div className='row m-2'>
                  <div className="col-4">
                      <span>Nro Socio:</span>
                  </div>
                  <div className="col-8">
                    <input type="number" value={this.state.nroSocio} name='nroSocio' onChange={this.handleChange}></input>
                  </div>
                </div>
                <div className="row m-2">
                    <div className="col-4">
                        <span>Telefono:</span>
                    </div>
                    <div className="col-8">
                      <input type="number" value={this.state.telefono} name='telefono' onChange={this.handleChange}></input>
                    </div>
                </div>
                <div className='row m-2'>
                  <div className="col-4">
                      <span>Fecha Nacimiento:</span>
                  </div>
                  <div className="col-8">
                  <input type="date" value={this.state.fechaNacimiento} name='fechaNacimiento' onChange={this.handleChange}></input>
                  </div>
                </div>
                <div className='row m-2'>
                  <div className="col-4">
                      <span>Contraseña:</span>
                  </div>
                  <div className="col-8">
                  <input type="password" value={this.state.contraseña} name='contraseña' onChange={this.handleChange}></input>
                  </div>
                </div>
              </div>
              
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClick}>
              Confirmar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
