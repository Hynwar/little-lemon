import { Route, Routes } from 'react-router-dom';

import './styles/App.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './components/home/HomePage';
import ReservationPage from './components/reservation/ReservationPage';

function App() {
	return (
		<>
			<Header />
			<main>
				<Routes>
					<Route path='/' Component={HomePage} />
					<Route path='/reservations' Component={ReservationPage} />
				</Routes>
			</main>
			<Footer />
		</>
	);
}

export default App;
