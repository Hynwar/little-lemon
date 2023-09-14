import { useReducer, useState } from 'react';

import '../../styles/ReservationPage.css';
import ReservationForm from './ReservationForm';
import image from '../../assets/reservation.png';
import { submitAPI } from '../../utils/fakeAPI';
import Confirmation from './Confirmation';
import { initializeTimes, updateTimes } from '../../utils/times';

function ReservationPage() {
	const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
	const [confirmed, setConfirmed] = useState(false);
	const [formData, setFormData] = useState();

	function handleDateChange(newDate) {
		dispatch({ type: 'UPDATE_TIMES', date: newDate });
	}

	function submitData(formData) {
		const res = submitAPI(formData);
		if (res) {
			setFormData(formData);
			setConfirmed(true);
		}
	}

	function confirmData() {
		setConfirmed(false);
	}

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
				<div className='reservation-content'>
					{confirmed ? (
						<Confirmation formData={formData} confirmData={confirmData} />
					) : (
						<ReservationForm
							availableTimes={availableTimes}
							handleDateChange={handleDateChange}
							submitData={submitData}
						/>
					)}
				</div>
			</div>
		</section>
	);
}
export default ReservationPage;
