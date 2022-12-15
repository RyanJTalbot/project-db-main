import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import LoadingButton from './Button';
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module

function Search() {
	const [search, setSearch] = useState('');
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

	// Search Records here
	const searchRecords = () => {
		axios.get(`http://localhost:8000/provider/${search}`).then((responses) => {
			setSearch(responses.data);
		});
	};

	return (
		<section>
			<div className='container'>
				<h4 className='mb-3 text-center mt-4'>
					Baton Rouge Mental Health Providers
				</h4>
				<div class='input-group'>
					<input
						type='search'
						class='form-control rounded'
						placeholder='Search by Zip'
						aria-label='Search'
						aria-describedby='search-addon'
					/>
					<button type='button' class='btn btn-outline-primary'>
						search
					</button>
				</div>
				<div className='row mt-3'>
					<div className='col-sm-11'>
						<div className='input-group mb-4 mt-3'>
							{/* <div className='form-outline'>
								<input
									type='text'
									id='form1'
									// onKeyDown={searchRecords}
									// onKeyUp={searchRecords}
									onChange={(event) => {
										this.setSearch({ query: event.target.value });
									}}
									// onKeyPress={(event) => {
									// 	if (event.key === 'Enter') {
									// 		this.searchRecords();
									// 	}
									// }}
									// onChange={(e) => setSearch(e.target.value)}
									className='form-control'
									placeholder='Search by Zip'
									style={{ backgroundColor: '#ececec' }}
								/>
								LoadingButton
							</div> */}
							{/* <button type="button" onClick={searchRecords}  class="btn btn-success">
		    <i class="fa fa-search" aria-hidden="true"></i>
		</button> */}
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
					</div>
				</div>
			</div>
		</section>
	);
}

export default Search;
