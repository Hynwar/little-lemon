import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import './App.css';

function App() {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main>
				<Hero />
				<Menu />
			</main>
		</>
	);
}

export default App;
