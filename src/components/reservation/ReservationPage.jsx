import '../../styles/ReservationPage.css';

function ReservationPage() {
	return (
		<div className='reservation-info'>
			<h1>Table Reservation</h1>
			<h4>Opening Hours</h4>
			<p className='opening-info'>
				Monday - Friday: 8AM to 10PM
				<br />
				<br />
				Saturday & Sunday: 9AM to 12PM
			</p>

			<h5>Reservation Policy</h5>
			<ul>
				<li>We accept reservations for both lunch and dinner services.</li>
				<li>
					For same-day reservations, please call us directly at (312)-593-2744.
				</li>
				<li>
					Walk-ins are welcome and will be accommodated based on availability.
				</li>
			</ul>
		</div>
	);
}
export default ReservationPage;
