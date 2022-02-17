

import React from 'react';
//import './App.css';


const dataList= (props) =>{
	const {data = []}= props || {};

	var statistique = '***';
	
	var numbers2;
	if(typeof data !== "undefined"){

		 numbers2 = data.map(myFunction);
	
	function myFunction(value) {
	  return (
	  
		<tr key={`${value[0]}${value[1]}`}>
		<td>{value[0]}</td>	
		<td>{value[2]}</td>
		<td>{value[3]}</td>
		<td>{value[6]}</td>
		<td>{statistique}</td>
	</tr>
		)
	}
	}else {
		numbers2 = "aucun element"
	}
	


    return (
		<div className="App text-center">
		<table>
			<thead className=''>
				<tr>
				<th>ID</th>
				<th>Nom du Compteur</th>
				<th>Statut</th>
				<th>Annee implantation</th>
				<th>Stats</th>
				</tr>
				
			</thead>
			<tbody>
			{numbers2}
			
			</tbody>
				
		
		</table>

		https://www.golangprograms.com/data-table-in-react-js.html
		</div>

	);
}
export default dataList;



