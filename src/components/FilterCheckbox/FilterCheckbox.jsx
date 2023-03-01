import './FilterCheckbox.css';

function FilterCheckbox(props) {
	const { title } = props;
	return (
		<div className="filter-сheckbox">
			<input type="checkbox" className="filter-сheckbox__button" />
			<p className="search-form__checkbox-title">{title}</p>
		</div>
	);
}

export default FilterCheckbox;
