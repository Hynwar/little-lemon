import { Link } from 'react-router-dom';

import heroImg from '../../assets/hero-img.jpg';
import '../../styles/Hero.css';

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
					<Link className='primary-btn' to='/reservations'>
						Reserve a Table
					</Link>
				</div>
				<img src={heroImg} alt='Food' className='hero-img' />
			</div>
		</section>
	);
}
export default Hero;
