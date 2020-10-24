import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './../../assets/css/MiCuenta.css'

export default function AlertDialog() {


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className='btn-Editar' onClick={handleClickOpen}>Editar Perfil</div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="editarPerfilTitulo"
        aria-describedby="editarPerfilContenido"
      >
        <DialogTitle id="editarPerfilTitulo">{"Editar Perfil"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="editarPerfilContenido">
            <div className='container'>
              <div className="row m-2">
                  <div className="col-4">
                      <span>Nombre:</span>
                  </div>
                  <div className="col-8">
                    <input type="text" id="nombre" name="nombre"></input>
                  </div>
              </div>
              <div className='row m-2'>
                <div className="col-4">
                    <span>DNI:</span>
                </div>
                <div className="col-8">
                  <input type="number" id="dni" name="dni"></input>
                </div>
              </div>
              <div className="row m-2 ">
                  <div className="col-4">
                      <span>Email: </span>
                  </div>
                  <div className="col-8">
                    <input type="email" id="email" name="email"></input>
                  </div>
              </div>
              <div className='row m-2'>
                <div className="col-4">
                    <span>Obra Social:</span>
                </div>
                <div className="col-8">
                  <input type="text" id="ooss" name="ooss"></input>
                </div>
              </div>
              <div className="row m-2">
                  <div className="col-4">
                      <span>Telefono:</span>
                  </div>
                  <div className="col-8">
                    <input type="number" id="tel" name="tel"></input>
                  </div>
              </div>
            </div>
            
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
