import React, { useState } from 'react';
import initialDetails from '../components/initialDetails';

const Search = () => {
	const providers = { initialDetails };

	const [searchInput, setSearchInput] = useState('');

	const handleChange = (e) => {
		e.preventDefault();
		setSearchInput(e.target.value);
	};

	if (searchInput.length > 0) {
		providers.filter((provider) => {
			return provider.name.match(searchInput);
		});
	}
	return (
		<div>
			<input
				type='search'
				placeholder='Search here'
				onChange={handleChange}
				value={searchInput}
			/>

			<table>
				<tr>
					<th>Country</th>
					<th>Continent</th>
				</tr>

				{providers.map((provider) => {
					<div>
						<tr>
							<td>{provider.name}</td>
							<td>{provider.zip}</td>
						</tr>
					</div>;
				})}
			</table>
		</div>
	);
};

export default Search;
