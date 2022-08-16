import React from 'react'
import { Button } from 'primereact/button';
import { Card } from "primereact/card";

import { SplitButton } from 'primereact/splitbutton';
import { useNavigate } from 'react-router-dom';


export const Start = () => {

	const navigate = useNavigate();

	const initialCard = [
		{
			id: 1,
			name: 'Super Mercado Olbin',
			description: 'Esta es la primera simulacion',
		},
		{
			id: 2,
			name: 'Cyber Grosbin',
			description: 'Esta es la Segunda simulacion',
		},
		{
			id: 3,
			name: 'Cafeteria Rafael',
			description: 'Esta es la tercera simulacion',
		},
		{
			id: 4,
			name: 'Libreria Estefania',
			description: 'Esta es la cuarta simulacion',
		},
		{
			id: 5,
			name: 'Accesorios Marleny',
			description: 'Esta es la cuarta simulacion',
		},



	]

	const items = [
		{
			label: 'Evaluar Proyecto',
			icon: 'pi pi-chart-bar',
			command: () => {
				navigate("/evaluar-proyecto")
			}

		},
		{
			label: 'Periodo de recuperacion',
			icon: 'pi pi-calendar',
			command: () => {
				navigate("/periodo-recuperacion")
			}

		},
		// {
		// 	label: 'Delete',
		// 	icon: 'pi pi-times',

		// },
		// {
		// 	label: 'React Website',
		// 	icon: 'pi pi-external-link',
		// 	command: (e) => {
		// 		window.location.href = 'https://facebook.github.io/react/'
		// 	}
		// },
		// {
		// 	label: 'Upload',
		// 	icon: 'pi pi-upload',
		// 	command: (e) => {
		// 		window.location.hash = "/fileupload"
		// 	}
		// }
	]

	const handleDelete = () => {
		console.log('Este el el id de la simulacion borrada')
	}
	const handleUpdate = () => {
		console.log('Este el el id de la simulacion actualizada')
	}

	const handleCreateSimulation = () => {
		console.log('Se creara una simulacion')
	}

	// const buttonCard = (item) => (
	// 	<span>
	// 		<Button
	// 			label='Borrar'
	// 			className='p-button-danger'
	// 			onClick={() => handleDelete(item.id)}
	// 			icon={'pi pi-undo'}
	// 		// style={{ marginLeft: "0rem" }}
	// 		/>
	// 		<Button
	// 			label='Editar'
	// 			className='p-button-warning'
	// 			style={{ marginLeft: '3.2rem' }}
	// 			onClick={() => handleUpdate(item.id)}
	// 		/>
	// 	</span>
	// )


	const buttonCard = (item) => (
		<span>
			<Button
				label='Ver resultados'
				className='p-button-primary'
				onClick={() => handleDelete(item.id)}
				icon={'pi pi-eye'}
			// style={{ marginLeft: "0rem" }}
			/>

		</span>
	)


	const footerCard = (item) => (<>{buttonCard(item)}</>)

	return (
		<>
			{/* <Button
				className="btn space-left__button p-button-success"
				label="Crear Simulacion"
				onClick={() => handleCreateSimulation()}
			/> */}


			<div className="main">
				<div className="space-left__button">
					<SplitButton label="Crear Simulación" className="btn  p-button-success p-button-raised" model={items} icon="pi pi-plus" />
				</div>
				<div className="container">
					{
						initialCard.slice(0).reverse().map((item) => (
							<div className="card__container" key={item.id} style={{ textAlign: 'center' }}>
								<Card
									subTitle={item.name}
									// header={item.description}
									footer={footerCard(item)}
									className="justify-content-center align-content-center cursor-pointer"
								>
									<h5>{item.description}</h5>
									{/* <Button className="btn btn-primary" label={'Entrar'} /> */}
								</Card>
							</div>
						))
					}
				</div>
			</div>
		</>
	)
}
