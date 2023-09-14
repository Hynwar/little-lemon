import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

import logo from '../../assets/Logo.svg';
import '../../styles/Header.css';

function Navbar() {
	return (
		<header>
			<nav className='navbar'>
				<div className='container'>
					<img id='nav-logo' src={logo} alt='Little Lemon Logo' />

					<ul className='nav-links'>
						<li>
							<Link to='/' className='nav-link'>
								Home
							</Link>
						</li>
						<li>
							<ScrollLink
								className='nav-link'
								offset={100}
								smooth={true}
								to='menu-section'>
								Menu
							</ScrollLink>
						</li>
						<li>
							<ScrollLink
								className='nav-link'
								offset={-60}
								smooth={true}
								to='about-section'>
								About
							</ScrollLink>
						</li>
						<li>
							<Link to='/reservations' className='nav-link'>
								Reservations
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
}
export default Navbar;
