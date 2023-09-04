import heroImg from '../assets/hero-img.jpg';

function Hero() {
	return (
		<section id='hero-section'>
			<div className='container'>
				<div className='hero-content'>
					<h1>Little Lemon</h1>
					<h3 className='subtitle'>Chicago</h3>
					<p className='description-text'>
						We are a family owned Mediterranean restaurant, focused on
						traditional recipes served with a modern twist.
					</p>
					<button className='primary-btn'>Reserve a Table</button>
				</div>
				<img src={heroImg} alt='Food' className='hero-img' />
			</div>
		</section>
	);
}
export default Hero;
