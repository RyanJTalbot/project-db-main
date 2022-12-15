import React from 'react';
import Search from '../components/Search';
import background from '../img/bground_magic.jpg';
// import Search from '../components/NewSearch';
import Providers from '../components/Providers';

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
					<Providers />
				</div>
			</div>
		);
	}
}

export default FcardPage;
