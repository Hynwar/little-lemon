import stars from '../assets/Stars.png';

function ReviewCard({ avatar, name, review }) {
	return (
		<div className='review-card'>
			<div className='review-header'>
				<img src={avatar} alt='' className='avatar' />
				<div className='review-title'>
					<h5>{name}</h5>
					<img src={stars} alt='' className='stars' />
				</div>
			</div>
			<p className='review-text'>&quot;{review}&quot;</p>
		</div>
	);
}
export default ReviewCard;
