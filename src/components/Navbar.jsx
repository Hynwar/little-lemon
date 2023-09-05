import logo from '../assets/Logo.svg';

import { Link } from 'react-scroll';

function Navbar() {
	return (
		<nav className='navbar'>
			<div className='container'>
				<img id='nav-logo' src={logo} alt='Little Lemon Logo' />
				<ul className='nav-links'>
					<li>
						<Link
							className='nav-link'
							offset={-100}
							smooth={true}
							to='hero-section'>
							Home
						</Link>
					</li>
					<li>
						<Link
							className='nav-link'
							offset={100}
							smooth={true}
							to='menu-section'>
							Menu
						</Link>
					</li>
					<li>
						<Link
							className='nav-link'
							offset={-60}
							smooth={true}
							to='about-section'>
							About
						</Link>
					</li>
					<li>
						<a className='nav-link'>Reservations</a>
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
	);
}
export default Navbar;
