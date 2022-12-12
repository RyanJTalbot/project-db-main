import './App.css';
import HomePage from './pages/HomePage';
// import background from './img/1-color-hex-1.jpg';

function App() {
	return (
		// <div style={{ backgroundImage: `url(${background})` }}>
		<div className='App'>
			<h1 className='header'>MOODFUL</h1>
			<HomePage />
		</div>
		// </div>
	);
}

export default App;
