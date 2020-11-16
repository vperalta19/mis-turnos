import React from 'react';
import { GlobalContext } from '../controllers/Context';
import PerfilProfesional from '../components/MiCuenta/PerfilProfesional'
import PerfilPaciente from './../components/MiCuenta/PerfilPaciente'
import Toolbar from './../components/Toolbar';

export default class MiCuenta extends React.Component {
	static contextType = GlobalContext;
	constructor(props){
		super(props);
		this.state = {
			userInfo: null
		}
	}

	cerrarSesion(){
		this.props.history.push("/")
	}

	async componentDidMount(){
		this.setState({
			userInfo: await this.context.UsuariosController.getUsuarioLogged()
		})
		this.render()

	}

	render(){
		const historialInfo = {
			fecha : '23/09/2020',
			paciente : 'Juan Manuel Belgrano',
			profesional : 'Dr San Martin',
			medicamentos : ['Paracetamol'],
			estudios : ['Electrograma', 'Radiografia'],
			notas : 'Veniam tempor cupidatat veniam consectetur culpa amet do dolore aliquip cillum mollit. Elit incididunt qui deserunt consectetur. Ad irure tempor commodo eiusmod Lorem laboris Lorem nulla nostrud. Sint laboris do proident aliqua eu occaecat do commodo quis magna ullamco culpa mollit. Commodo incididunt quis sint ea veniam tempor labore consequat exercitation laborum. Reprehenderit nostrud sint tempor commodo exercitation.'
		}

		const historiales = [historialInfo,historialInfo,historialInfo];
		const recetas = [historialInfo,historialInfo];
		const pacientes = [this.state.userInfo,this.state.userInfo,this.state.userInfo,this.state.userInfo,this.state.userInfo]
		return (
			
			<div className="MiCuenta">
				<Toolbar cerrarFn={ () => { this.cerrarSesion(); } }/>
				{(() => {
					if(this.state.userInfo){
						if(this.state.userInfo.rol === 'medico' || this.state.userInfo.rol === 'secretaria' || this.state.userInfo.rol === 'admin'){
							return(
								<PerfilProfesional  userInfo={this.state.userInfo} pacientes = {pacientes}></PerfilProfesional>
							)
							
						}
						else if(this.state.userInfo.rol === 'paciente'){
							return(
								<PerfilPaciente  userInfo={this.state.userInfo} historiales ={historiales} recetas={recetas} quienVe="paciente"></PerfilPaciente>
							)
							
						}
					}
				})()}
				
				

			</div>
		);
	}
}


