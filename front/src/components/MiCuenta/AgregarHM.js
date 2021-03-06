import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './../../assets/css/MiCuenta.css'
import { GlobalContext } from '../../controllers/Context';
import { Alert } from '@material-ui/lab';

export default class AgregarEstudio extends React.Component {
  static contextType = GlobalContext;
  constructor(props){
    super(props)
    this.state={
      open: false,
      descripcion: '',
      alert: false,
      alertDescript: '',
      alertType: ''
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
    const usuario ={
      descripcion : this.state.descripcion,
      paciente : this.props.dni,
    }
    const validacion = await this.context.HistorialController.crearHistorial(usuario)
    if(validacion){
      this.setState({
        alert:true,
        alertType:'success',
        alertDescript: 'Historial subido con exito'
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
        alertDescript: 'No se pudo subir el historial, intentelo de nuevo'
      })
    }
    
  };


  render(){
    return (
      <div>
        <div className='btn-agregar-hm' onClick={this.handleClickOpen}>Agregar Historial Medico</div>
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
          <DialogTitle id="agregarHM-Titulo">{"Agregar Historial Medico"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="agregarHM-Contenido">
              <div className='container'>
                  <div className='row m-2'>
                      <span>Descripcion:</span>
                      <textarea style={{width: '100%', height: '250px'}} type="text" id="texto" value={this.state.descripcion} name='descripcion' onChange={this.handleChange}></textarea>
                  </div>
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
