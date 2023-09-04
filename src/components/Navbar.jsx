import logo from '../assets/Logo.svg';

function Navbar() {
	return (
		<nav className='navbar'>
			<div className='container'>
				<img id='nav-logo' src={logo} alt='Little Lemon Logo' />
				<ul className='nav-links'>
					<li>
						<a className='nav-link' href=''>
							Home
						</a>
					</li>
					<li>
						<a className='nav-link' href=''>
							Menu
						</a>
					</li>
					<li>
						<a className='nav-link' href=''>
							About
						</a>
					</li>
					<li>
						<a className='nav-link' href=''>
							Reservations
						</a>
					</li>
					<li>
						<a className='nav-link' href=''>
							Order Online
						</a>
					</li>
					<li>
						<a className='nav-link' href=''>
							Login
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
export default Navbar;
