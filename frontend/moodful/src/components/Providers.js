import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import LoadingButton from './Button';
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module

function Providers() {
	const [record, setRecord] = useState([]);

	// On Page load display all records
	const loadProviderDetails = async () => {
		var response = fetch('http://localhost:8000/provider')
			.then(function (response) {
				return response.json();
			})
			.then(function (myJson) {
				setRecord(myJson);
			});
	};
	useEffect(() => {
		loadProviderDetails();
	}, []);

	return (
		<section>
			<div className='container'>
				<h4 className='mb-3 text-center mt-4'>
					Baton Rouge Mental Health Providers
				</h4>
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
					{/* need a key value here */}

					{record.map((name) => (
						<tr>
							<td>{name.Company}</td>
							<td>{name.Address}</td>
							<td>{name.City}</td>
							<td>{name.zip}</td>
							<td>{name.Phone}</td>
							<td>{name.Website}</td>
						</tr>
					))}
				</tbody>
			</table>
		</section>
	);
}

export default Providers;
