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
							{/* <ScrollLink
								className='nav-link'
								offset={-100}
								smooth={true}
								to='hero-section'>
								Home
							</ScrollLink> */}
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
						<li>
							<a className='nav-link'>Order Online</a>
						</li>
						<li>
							<a className='nav-link'>Login</a>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
}
export default Navbar;
