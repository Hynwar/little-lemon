import { useReducer } from 'react';

import '../../styles/ReservationPage.css';
import ReservationForm from './ReservationForm';
import image from '../../assets/reservation.png';
import { fetchAPI, submitAPI } from '../../utils/fakeAPI';

function updateTimes(state, action) {
	if (action.type === 'UPDATE_TIMES') {
		const res = fetchAPI(new Date(action.date));
		return res.length !== 0 ? res : state;
	}
	return state;
}

function initializeTimes() {
	return fetchAPI(new Date());
}

function ReservationPage() {
	const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
	const handleDateChange = (newDate) => {
		dispatch({ type: 'UPDATE_TIMES', date: newDate });
		console.log('Date changed');
	};

	return (
		<section id='reservation-section'>
			<div className='container'>
				<img className='background-img' src={image} alt='' />
				<div className='reservation-info'>
					<h1>
						Table <br />
						Reservation
					</h1>
					<h4>Opening Hours</h4>
					<p className='opening-info'>
						Monday - Friday: 8AM to 10PM
						<br />
						Saturday & Sunday: 9AM to 12PM
					</p>

					<h5>Reservation Policy</h5>
					<ul className='policies'>
						<li className='policy'>
							We accept reservations for both lunch and dinner services.
						</li>
						<li>
							For same-day reservations, please call us directly at
							(312)-593-2744.
						</li>
						<li>
							Walk-ins are welcome and will be accommodated based on
							availability.
						</li>
					</ul>
				</div>
				<ReservationForm
					availableTimes={availableTimes}
					handleDateChange={handleDateChange}
				/>
			</div>
		</section>
	);
}
export default ReservationPage;
