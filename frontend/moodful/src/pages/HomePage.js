import React from 'react';
import Search from '../components/Search';
import background from '../img/bground.jpg';
// import Search from '../components/NewSearch';

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
