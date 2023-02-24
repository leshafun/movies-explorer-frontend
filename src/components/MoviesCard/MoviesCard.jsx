import './MoviesCard.css';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard(props) {
	const { title, movieImage, duration } = props;
	const location = useLocation();

	const [isMovieLike, setMovieLike] = useState(false);

	function handleLike() {
		setMovieLike(!isMovieLike);
	}

	const likeButton = `movies-card__element-like ${
		isMovieLike ? 'movies-card__element-like_active' : ''
	}`;

	return (
		<div className="movies-card">
			<div className="movies-card__element">
				<div className="movies-card__element-container"><div className='movies-card__element-title'>
					<h3 className="movies-card__element-name">{title}</h3>
					<p className="movies-card__element-duration">{duration}</p> </div>
				<div className="button__container">
					{location.pathname === '/movies' ? (
						<button
							type="button"
							className={likeButton}
							onClick={handleLike}
						/>
					) : (
						<button type="button" className="movies-card__element-delete" />
					)}
				</div>
				</div>
				<img
					className="movies-card__image"
					alt="Обложка фильма"
					src={movieImage}
				/>
			</div>
		</div>
	);
}

export default MoviesCard;
