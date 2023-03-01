import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.jsx';

function SearchForm() {
	return (
		<div className="search-form">
			<div className="search-form__container">
				<form className="search-form__movies">
					<input
						className="search-form__input"
						type="text"
						name="search movies"
						placeholder="Фильм"
						required
					/>
					<button className="search-form-button" type="button">
						Поиск
					</button>
				</form>
				<FilterCheckbox title="Короткометражки" />
			</div>
		</div>
	);
}

export default SearchForm;
