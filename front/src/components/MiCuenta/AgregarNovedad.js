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

export default class AgregarNovedad extends React.Component {
  static contextType = GlobalContext;
  constructor(props){
    super(props);
    this.state = {
      open: false,
      fileInputState: '',
      previewSource: '',
      selectedFile: null,
      descripcion: '',
      titulo: '',
      alert: false,
      alertDescript: '',
      alertType: ''

    }
  }

  handleClickOpen = () => {
    this.setState({
      open: true
    })
  };

  handleClose = () => {
    this.setState({
      open: false
    })
  };

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({
        [name]: value
    })
}
  
  handleFileInputChange = (e) => {
      const file = e.target.files[0];
      this.previewFile(file);
      this.setState({
        fileInputState: e.target.value,
        selectedFile: file
      })
  };

  previewFile = (file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
          this.setState({
            previewSource: reader.result
          })
      };
  };

  handleSubmitFile = (e) => {
    e.preventDefault();
    if (!this.state.selectedFile) {
      this.uploadImage('');
    }
    else{
      const reader = new FileReader();
      reader.readAsDataURL(this.state.selectedFile);
      reader.onloadend = () => {
          this.uploadImage(reader.result);
      };
    }
    
};

  uploadImage = async (base64EncodedImage) => {
    try {
      if(this.state.descripcion.length > 255 || this.state.titulo.length > 255){
        this.setState({
          alert:true,
          alertType:'error',
          alertDescript: 'Decripcion o Titulo muy largo'
        })
      }else{
        const novedad = {imagen: base64EncodedImage, descripcion: this.state.descripcion, titulo: this.state.titulo}
        const validacion = await this.context.NovedadesController.subirNovedad(novedad)
        if(validacion){
          this.setState({
            alert:true,
            alertType:'success',
            alertDescript: 'Novedad subida con exito'
          })
          setTimeout(() => {
            this.handleClose();
          }, 2000);
        }
        else{
          this.setState({
            alert:true,
            alertType:'error',
            alertDescript: 'No se pudo subir la novedad, intentelo de nuevo'
          })
        }
      }
    } catch (err) {
        console.error(err);
    }
  };

  render(){
    return (
      <div>
        <div className='btn-agregar-hm' onClick={this.handleClickOpen}>Agregar Novedad</div>
        
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="agregarR-Titulo"
          aria-describedby="agregarR-Contenido"
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
          <DialogTitle id="agregarR-Titulo">{"Agregar Novedad"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="agregarR-Contenido">
              <div className='container'>
                  <div className="row m-2">
                    
                    <div className='col'>
                      <div className="row m-2">
                        <span>Titulo:</span>
                      </div>
                      <div className="row m-2">
                       <input style={{ width: '100%' }} type="text" value={this.state.titulo} name='titulo' onChange={this.handleChange}></input>
                      </div>
                    </div>  
                  </div>   
                  <div className="row m-2">
                    <div className='col'>
                      <div className="row m-2">
                        <span>Descripcion:</span>
                      </div>
                      <div className="row m-2">
                       <textarea style={{ width: '100%' }} type="text" value={this.state.descripcion} name='descripcion' onChange={this.handleChange}></textarea>
                      </div>
                    </div>  
                  </div> 
                  <div className="row m-2">
                    <div className='col'>
                      <input
                          id='subirImagen'
                          type="file"
                          name="image"
                          onChange={this.handleFileInputChange}
                          value={this.state.fileInputState}
                          className="subirImagen"
                      />
                      <label for='subirImagen' className='btn-agregar-hm'>Subir Imagen</label>
                    </div>    
                    {this.state.previewSource && (
                        <img
                            src={this.state.previewSource}
                            alt="chosen"
                            style={{ width: '100%' }}
                        />
                    )}
                  </div>
                  
                  
              </div>
                  
      
              <DialogActions>
                <Button  onClick={this.handleSubmitFile}>
                  Confirmar
                </Button>
              </DialogActions>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}
