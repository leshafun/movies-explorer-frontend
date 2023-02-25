import './Movies.css';
import SearchForm from '../SearchForm/SearchForm.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import Footer from '../Footer/Footer.jsx';
import MoviesCard from '../MoviesCard/MoviesCard.jsx';
import film1 from '../../images/film1.jpg';

function Movies() {
	return (
		<main className="movies">
			<SearchForm />
			<MoviesCardList>
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
			</MoviesCardList>
			<div className="movies__more">
				<button className="movies__more-button">Ещё</button>
			</div>
			<Footer />
		</main>
	);
}

export default Movies;
