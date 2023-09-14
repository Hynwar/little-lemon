import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

import logo from '../../assets/Logo.svg';
import '../../styles/Header.css';
import { useState } from 'react';

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen((open) => !open);
	};

	return (
		<header>
			<nav className='navbar'>
				<div className='container'>
					<img id='nav-logo' src={logo} alt='Little Lemon Logo' />

					<button className='mobile-nav-btn' onClick={toggleMenu}>
						&#9776;
					</button>
					<ul className={`nav-links ${isOpen ? 'open' : ''}`}>
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
