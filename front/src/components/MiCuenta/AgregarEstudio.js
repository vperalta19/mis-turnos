import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './../../assets/css/MiCuenta.css'

export default class AgregarEstudio extends React.Component {
  constructor(props){
    super(props)
    this.state={
      open: false
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

  handleChange = (e) => {
    this.setState({
      descripcion: e.target.value
    })
  }


  render(){
    return (
      <div>
        <div className='btn-agregar-r' onClick={this.handleClickOpen}>Agregar Estudio</div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="agregarHM-Titulo"
          aria-describedby="agregarHM-Contenido"
        >
          <DialogTitle id="agregarHM-Titulo">{"Agregar Historial Medico"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="agregarHM-Contenido">
              <div className='container'>
                  <div className="row m-2 ">
                      <div className="col-4">
                          <span>Estudios Realizados: </span>
                      </div>
                      <div className="col-8">
                          <input type="text" id="estudiosRealizados" name="estudiosRealizados"></input>
                      </div>
                  </div>
                  <div className="row m-2">
                      <div className="col-4">
                          <span>Notas:</span>
                      </div>
                      <div className="col-8">
                          <input type="text" id="notas" name="notas"></input>
                      </div>
                  </div>
                  </div>
                  
      
              
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>
              Confirmar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );  
  }
}
