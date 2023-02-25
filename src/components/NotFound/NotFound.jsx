import './NotFound.css';
import { Link } from 'react-router-dom';

function NotFound() {
	return (
		<main className="not-found">
			<div className="not-found__container">
				<h3 className="not-found__title">404</h3>
				<p className="not-found__subtitle">Страница не найдена</p>
				<Link to="/" className="not-found__back">
					Назад
				</Link>
			</div>
		</main>
	);
}

export default NotFound;
