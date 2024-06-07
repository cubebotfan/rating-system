import {useState} from 'react';

import Star from "./Star";

function StarRating({starCount = 5, ratingMessages = ["Thank you for rating"]}) {
	const [rating, setRating] = useState(0);

	const starClick = (e) => {
		setRating(e.currentTarget.getAttribute('data-value'));
	}

	const getRatingMessage = () => {
		let messageId = Math.ceil((ratingMessages.length) * rating / starCount)-1;
		return (messageId<0) ? "Please Enter a Rating" : ratingMessages[messageId];
	}
	return (
		<div className='flex-vertical'>
			<div className="star-bar">
				{Array.from(Array(starCount).keys()).map((v,i) => {
					return (
					<Star key={i}
					active={rating>i}
					onClick={starClick}
					value={i+1}
					/>
					)
				})}
			</div>
			<h2 className='rating-text'>{getRatingMessage()}</h2>
		</div>
	);
}

export default StarRating;