import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function LoadingButton() {
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

	useEffect(() => {
		if (search) {
			searchRecords().then(() => {
				setSearch(false);
			});
		}
	}, []);

	const handleClick = () => setSearch(true);

	return (
		<Button
			variant='primary'
			disabled={search}
			onClick={!search ? handleClick : null}
		>
			{search ? 'Loading…' : 'Click to load'}
		</Button>
	);
}

export default LoadingButton;
