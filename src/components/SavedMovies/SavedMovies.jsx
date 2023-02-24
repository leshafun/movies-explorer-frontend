import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm.jsx';
import Footer from '../Footer/Footer.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';

function SavedMovies() {
	return (
		<section className="saved-movies">
			<SearchForm />
			<MoviesCardList />
			<div className='saved-movies__devider'></div>
			<Footer />
		</section>
	);
}

export default SavedMovies;
