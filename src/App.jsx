import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import './App.css';
import Testimonials from './components/Testimonials';

function App() {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main>
				<Hero />
				<Menu />
				<Testimonials />
			</main>
		</>
	);
}

export default App;
