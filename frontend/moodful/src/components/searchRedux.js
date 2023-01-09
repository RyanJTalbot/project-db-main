import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Search() {
	// useState Hooks
	const [providers, setProviders] = useState([]);
	const [showAns, setShowAns] = useState(false);

	// Axios async connection to backend
	const getProviders = async () => {
		try {
			const daProviders = await axios.get('/zip');

			// Set Data
			setProviders(daProviders.data);
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		getProviders();
	}, []);

	return (
		<>
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
						/>
						<button
							type='button'
							className='btn btn-outline-primary'
							// onClick={() => setShowAns(!showAns)
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
									{providers.map((providerz) => (
										<h3 key={providerz._id}>{providerz.question}</h3>
									))}

									{providers.map((name) => (
										<tr key={name._id}>
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

			<br />
			{/* Show Answer Button */}
			{/* <Row>
					<Col>
						<Button
							style={{ marginTop: '2rem' }}
							variant='secondary'
							size='lg'
							block
							onClick={() => setShowAns(!showAns)}
						>
							Answer
						</Button>

						{showAns && (
							<div
								className='ans'
								style={{ textAlign: 'center', fontSize: '8rem' }}
							>
								{providers.map((providerz) => (
									<h2 key={providerz._id}>{providerz.answer}</h2>
								))}
							</div>
						)}
					</Col>
				</Row>
			</Container> */}
		</>
	);
}
