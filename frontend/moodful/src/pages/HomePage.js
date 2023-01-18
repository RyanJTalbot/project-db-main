import React from 'react';
import Search from '../components/Search';
import background from '../img/bground_magic.jpg';

class FcardPage extends React.Component {
	render() {
		return (
			<div
				style={{
					backgroundImage: `url(${background})`,
				}}
			>
				<Search />
			</div>
		);
	}
}

export default FcardPage;
