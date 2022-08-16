

import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Skeleton } from 'primereact/skeleton';


export const Table = ({ item = 0 }) => {


	const itemTable = [
		{
			id: 1,
			name: 'Audi',
			year: '1992',
			color: 'Black',
			vin: 'dsad231ff'
		},
		{
			id: 2,
			name: 'Audi',
			year: '1992',
			color: 'Black',
			vin: 'dsad231ff'
		},
		{
			id: 3,
			name: 'Audi',
			year: '1992',
			color: 'Black',
			vin: 'dsad231ff'
		},
		{
			id: 4,
			name: 'Audi',
			year: '1992',
			color: 'Black',
			vin: 'dsad231ff'
		},

	]
	console.log(item, 'Estoy en el componente Table')



	return (
		<div>
			<div className="card">
				{/* <h5>Flujo neto de efectivo</h5> */}
				<DataTable value={item} scrollable scrollHeight="400px" virtualScrollerOptions={{ itemSize: 46 }}>
					<Column field="year" header="Año" style={{ minWidth: '200px' }}></Column>

					<Column field="id" header="FNE" style={{ minWidth: '200px' }}></Column>
				</DataTable>
			</div>

		</div>
	);
}
