import React from 'react';

function Card({ person }) {
	return (
		<section>
			<div className='container'>
				<h4 className='mb-3 text-center mt-4'> </h4>
			</div>
			<table className='table table-hover  table-striped table-bordered ml-4 '>
				<thead>
					<tr>
						<th>Company</th>
						<th>Address</th>
						<th>City</th>
						<th>Zip</th>
						<th>Phone</th>
						<th>Website</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{person.Company}</td>
						<td>{person.Address}</td>
						<td>{person.City}</td>
						<td>{person.zip}</td>
						<td>{person.Phone}</td>
						<td>{person.Website}</td>
					</tr>
				</tbody>
			</table>
		</section>
	);
}

export default Card;
