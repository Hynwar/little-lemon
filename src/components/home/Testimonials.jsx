import ReviewCard from './ReviewCard';
import reviews from '../../data/reviewData';

function Testimonials() {
	return (
		<section id='testimonial-section'>
			<h2>Testimonials</h2>
			<div className='testimonials container'>
				{reviews.map((reviews, index) => (
					<ReviewCard key={index} {...reviews} />
				))}
			</div>
		</section>
	);
}
export default Testimonials;
