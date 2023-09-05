function SpecialCard({ title, image, price, description }) {
	return (
		<div className='special-card'>
			<img src={image} alt='' className='special-image' />
			<div className='special-content'>
				<div className='special-header'>
					<h4>{title}</h4>
					<p className='special-price'>$ {price}</p>
				</div>
				<p className='special-description'>{description}</p>
				<button className='special-btn'>Order Now</button>
			</div>
		</div>
	);
}
export default SpecialCard;
