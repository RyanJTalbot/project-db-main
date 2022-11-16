import React from 'react';
// import Searchbar from '../components/Searchbar';
// import Search from '../components/Search';
import background from '../img/1-color-hex-1.jpg';
import Search from '../components/NewSearch';

class FcardPage extends React.Component {
	render() {
		return (
			<div
				style={{
					backgroundImage: `url(${background})`,
				}}
			>
				<div className='card-page'>
					<Search />
				</div>
			</div>
		);
	}
}

export default FcardPage;
