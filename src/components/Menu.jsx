import SpecialCard from './SpecialCard';

const specials = [
	{
		title: 'Lemon Dessert',
		image: '/src/assets/lemon dessert.png',
		price: '4.20',
		description:
			'This comes straight from grandmas recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
	},
	{
		title: 'Greek Salad',
		image: '/src/assets/greek salad.png',
		price: '4.20',
		description:
			'The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
	},
	{
		title: 'Bruschetta',
		image: '/src/assets/bruschetta.png',
		price: '4.20',
		description:
			'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil, sure to bring you joy',
	},
];

function Menu() {
	return (
		<section id='menu-section'>
			<div className='container'>
				<h2>Specials</h2>
				<button className='primary-btn'>Online Menu</button>
			</div>
			<div className='menu-cards container'>
				{specials.map((project, index) => (
					<SpecialCard key={index} {...project} />
				))}
			</div>
		</section>
	);
}
export default Menu;
