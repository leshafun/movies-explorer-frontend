import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.jsx';
import film1 from '../../images/film1.jpg';

function MoviesCardList() {
	return (
		<div className="movies-card-list">
			<div className="movies-card-list__container">
				<MoviesCard
					movieImage={film1}
					title="33 слова о дизайне"
					duration="1ч 42м"
				/>
				<MoviesCard
					movieImage={film1}
					title="33 слова о дизайне"
					duration="1ч 42м"
				/>
				<MoviesCard
					movieImage={film1}
					title="33 слова о дизайне"
					duration="1ч 42м"
				/>
				<MoviesCard
					movieImage={film1}
					title="33 слова о дизайне"
					duration="1ч 42м"
				/>
				<MoviesCard
					movieImage={film1}
					title="33 слова о дизайне"
					duration="1ч 42м"
				/>
				<MoviesCard
					movieImage={film1}
					title="33 слова о дизайне"
					duration="1ч 42м"
				/>
				<MoviesCard
					movieImage={film1}
					title="33 слова о дизайне"
					duration="1ч 42м"
				/>
			</div>
		</div>
	);
}

export default MoviesCardList;
