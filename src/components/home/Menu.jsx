import SpecialCard from './SpecialCard';
import specials from '../../data/specialsData';
import '../../styles/Menu.css';

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
