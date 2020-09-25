import React from 'react';
import Perfil from './../components/MiCuenta/Perfil'
import Toolbar from './../components/Toolbar';

export default function MiCuenta() {
	const userInfo={
		nombre: 'Valeria Peralta',
		email: 'vaperalta2018@gmail.com',
		tel: '3855843316',
		dni: '42889052',
		ooss: 'OSPE',
		nroSocio: '123456',
		usuario: 'paciente',
		quienVe: 'paciente'
	}
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
	const pacientes = [userInfo,userInfo,userInfo,userInfo]
	const toolbarInfo={
		nombre: 'Valeria Peralta'
	}
	return (
		
		<div className="MiCuenta">
			<Toolbar toolbarInfo={toolbarInfo}/>
			<Perfil userInfo={userInfo} historiales ={historiales} recetas={recetas} pacientes = {pacientes}></Perfil>
			

		</div>
	);
}


