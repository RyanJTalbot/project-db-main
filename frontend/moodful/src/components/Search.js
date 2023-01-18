import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

function Search() {
	const [search, setSearch] = useState([]);
	const [record, setRecord] = useState([]);
	const searchRef = useRef();

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
		const zip = searchRef.current.value;
		if (!zip) {
			loadProviderDetails();
			return;
		}
		axios
			.get(`http://localhost:8000/provider/zip?zip=${zip}`)
			.then((responses) => {
				setRecord(responses.data);
			});
	};

	// random number generator
	function getRandomInt(max) {
		return Math.floor(Math.random() * max);
	}

	// random number saved to var num
	var num = getRandomInt(9999);

	//

	return (
		<section>
			<div className='container'>
				<h4 className='mb-3 text-center mt-4'>
					Baton Rouge Mental Health Providers
				</h4>
				<div className='input-group'>
					<input
						type='search'
						className='form-control rounded'
						placeholder='Search by Zip'
						aria-label='Search'
						aria-describedby='search-addon'
						ref={searchRef}
					/>
					<button
						type='button'
						className='btn btn-outline-primary'
						onClick={searchRecords}
					>
						search
					</button>
				</div>
				<div className='row mt-3'>
					<div className='col-sm-11'>
						<div className='input-group mb-4 mt-3'></div>
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
								{/* need a key value here used random number from the above const variable, num */}

								{record.map((name, num) => (
									<tr key={num}>
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
