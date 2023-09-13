function Confirmation({ formData, confirmData }) {
	return (
		<div className='confirmation-page'>
			<h2>Reservation Confirmed</h2>
			<p className='confirmed-msg'>
				Thank you for choosing Little Lemon! Your reservation confirmation email
				has been sent.
			</p>
			<p className='details-title'>Reservation Details</p>
			<p className='confirmed-details'>
				Date: {formData.date.toLocaleDateString()}
			</p>
			<p className='confirmed-details'>Time: {formData.time}</p>
			<p className='confirmed-details'>
				Number of Guests: {formData.numGuests}
			</p>
			<p className='confirmed-details'>Occassion: {formData.occassion}</p>
			<p className='confirmed-details'>Name: {formData.fullName}</p>
			<p className='confirmed-details'>Email: {formData.email}</p>
			<p className='confirmed-details'>Phone: {formData.phone}</p>
			<p className='confirmed-details'>
				Comments: {formData.comments ? formData.comments : 'None'}
			</p>
			<button className='reservation-btn confirm' onClick={confirmData}>
				Confirm
			</button>
		</div>
	);
}
export default Confirmation;
