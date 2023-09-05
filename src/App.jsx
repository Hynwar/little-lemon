import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import About from './components/About';

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
				<About />
			</main>
		</>
	);
}

export default App;
