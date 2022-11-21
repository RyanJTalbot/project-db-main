import { BsSearch } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Search() {
	const [searchResult, setSearchResult] = useState([]);
	const [key, setKey] = useState('');

	useEffect(() => {
		const search = async () => {
			try {
				if (!key.trim()) {
					setSearchResult([]);
					return;
				}
				const res = await axios.get('http://localhost:8000/search', {
					params: { key: key, limit: 5 },
				});
				setSearchResult(res.data.data);
				console.log(res);
			} catch (error) {
				console.log(error);
			}
		};
	}, []);
	return (
		<form>
			<div className='search-wrapper'>
				<button className='search-btn'>
					{' '}
					<BsSearch />{' '}
				</button>
				<div className='form-group'>
					<input
						type='text'
						className='form-control'
						placeholder='Searching...'
						value={key}
						onChange={(e) => setKey(e.target.value)}
					/>
				</div>
				{searchResult && searchResult.length > 0 && (
					<div className='search-result'>
						{searchResult.map((zip) => (
							<div className='zip-info'>
								<p className='name'>{zip.Company}</p>
								<p>{zip.Company.Address}</p>
							</div>
						))}
					</div>
				)}
			</div>
		</form>
	);
}

// https://www.youtube.com/watch?v=OwqkFjXG_sI
