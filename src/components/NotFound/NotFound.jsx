import './NotFound.css';
import { Link } from 'react-router-dom';

function NotFound() {
	return (
		<div className="not-found">
			<div className="not-found__container">
				<h3 className="not-found__title">440</h3>
				<p className="not-found__subtitle">Страница не найдена</p>
				<Link to="/" className="not-found__back">
					Назад
				</Link>
			</div>
		</div>
	);
}

export default NotFound;
