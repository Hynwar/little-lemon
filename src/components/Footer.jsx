import logo from '../assets/footer-logo.png';
import {
	faSquareFacebook,
	faSquareInstagram,
	faSquareTwitter,
	faSquareYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
	faEnvelope,
	faLocationDot,
	faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
	return (
		<footer className='footer'>
			<div className='container'>
				<div className='logo-col'>
					<img src={logo} alt='' className='footer-logo' />
					<p className='copyright'>Copyright &copy; Little Lemon 2023</p>
				</div>
				<div className='navigation-col'>
					<h5>Navigation</h5>
					<ul className='footer-links'>
						<li>
							<a className='footer-link' href=''>
								Home
							</a>
						</li>
						<li>
							<a className='footer-link' href=''>
								Menu
							</a>
						</li>
						<li>
							<a className='footer-link' href=''>
								About
							</a>
						</li>
						<li>
							<a className='footer-link' href=''>
								Reservations
							</a>
						</li>
						<li>
							<a className='footer-link' href=''>
								Order Online
							</a>
						</li>
						<li>
							<a className='footer-link' href=''>
								Login
							</a>
						</li>
					</ul>
				</div>
				<div className='contact-col'>
					<h5>Contact Us</h5>
					<p className='contact-text'>
						<FontAwesomeIcon className='contact-icon' icon={faLocationDot} />
						678 Pisa Ave, Chicago, IL 60611
					</p>
					<p className='contact-text'>
						<FontAwesomeIcon className='contact-icon' icon={faPhone} />
						(312) 593-2744
					</p>
					<p className='contact-text'>
						<FontAwesomeIcon className='contact-icon' icon={faEnvelope} />
						info@littlelemon.com
					</p>
				</div>
				<div className='social-col'>
					<h5>Connect with Us</h5>
					<div className='social-icons'>
						<a href='https://www.facebook.com/'>
							<FontAwesomeIcon
								className='social-icon'
								icon={faSquareFacebook}
							/>
						</a>
						<a href='https://www.twitter.com/'>
							<FontAwesomeIcon className='social-icon' icon={faSquareTwitter} />
						</a>
						<a href='https://www.instagram.com/'>
							<FontAwesomeIcon
								className='social-icon'
								icon={faSquareInstagram}
							/>
						</a>
						<a href='https://www.youtube.com/'>
							<FontAwesomeIcon className='social-icon' icon={faSquareYoutube} />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
export default Footer;
