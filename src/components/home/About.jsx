import aboutImage from '../../assets/about.png';

function About() {
	return (
		<section id='about-section'>
			<div className='container'>
				<div className='about-content'>
					<h1>Little Lemon</h1>
					<h3>Chicago</h3>
					<p className='about-description'>
						Nestled in the heart of our community, Little Lemon is a
						family-owned Mediterranean restaurant where tradition meets
						innovation. Our culinary journey began with a commitment to the
						authentic recipes of the Mediterranean, passed down through
						generations. However, we believe that great food evolves, and
						that&apos;s why we&apos;ve added a modern twist to these beloved
						classics.
						<br />
						<br />
						At Little Lemon, we pour our hearts into every dish, infusing them
						with the warmth and love that define our family. Come, savor the
						essence of tradition reimagined at Little Lemon, your destination
						for an authentic yet contemporary dining experience.
					</p>
				</div>
				<img src={aboutImage} alt='' className='about-img' />
			</div>
		</section>
	);
}
export default About;
