import ReviewCard from './ReviewCard';

const reviews = [
	{
		avatar: '/src/assets/Devon.png',
		name: 'Devon Lane',
		review:
			"Little Lemon's modern twist on Mediterranean classics has made it my top dining choice in town.",
	},
	{
		avatar: '/src/assets/Kristin.png',
		name: 'Kristin Bell',
		review:
			'The fusion of tradition and innovation at Little Lemon keeps me coming back for more.',
	},
	{
		avatar: '/src/assets/Floyd.png',
		name: 'Floyd Miles',
		review:
			'Exceptional traditional recipes with a modern twist - Little Lemon stands out as a culinary gem.',
	},
	{
		avatar: '/src/assets/Jane.png',
		name: 'Jane Cooper',
		review:
			"Little Lemon's unique flavors make it my go-to for the best of Mediterranean cuisine.",
	},
];
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
