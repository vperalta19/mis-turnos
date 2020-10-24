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
      <div className='btn-agregar-hm' onClick={handleClickOpen}>Agregar Historial Medico</div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="agregarHM-Titulo"
        aria-describedby="agregarHM-Contenido"
      >
        <DialogTitle id="agregarHM-Titulo">{"Agregar Historial Medico"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="agregarHM-Contenido">
            <div className='container'>
                <div className="row m-2">
                    <div className="col-4">
                        <span>Fecha:</span>
                    </div>
                    <div className="col-8">
                        <input type="date" id="fecha" name="fecha"></input>
                    </div>
                </div>
                <div className="row m-2">
                    <div className="col-4">
                        <span>Paciente:</span>
                    </div>
                    <div className="col-8">
                        <input type="text" id="paciente" name="paciente"></input>
                    </div>
                </div>
                <div className='row m-2'>
                    <div className="col-4">
                        <span>Profesional:</span>
                    </div>
                    <div className="col-8">
                    <input type="text" id="profesional" name="profesional"></input>
                    </div>
                </div>
                <div className="row m-2 ">
                    <div className="col-4">
                        <span>Estudios Realizados: </span>
                    </div>
                    <div className="col-8">
                        <input type="text" id="estudiosRealizados" name="estudiosRealizados"></input>
                    </div>
                </div>
                <div className='row m-2'>
                    <div className="col-4">
                        <span>Medicamentos:</span>
                    </div>
                    <div className="col-8">
                    <input type="text" id="medicamentos" name="medicamentos"></input>
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
          <Button onClick={handleClose}>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
