import './Navigation.css';
import { Link } from 'react-router-dom';
import iconProfile from '../../images/icon-profile.svg';
import NavBar from '../NavBar/NavBar.jsx';

function Navigation() {
	return (
		<nav className="navigation">
			<NavBar/>
			<div className="navigation__movies-links">
				<Link to="/movies" className="navigation__movies">
					Фильмы
				</Link>
				<Link to="/saved-movies" className="navigation__saved-movies">
					Сохранённые фильмы
				</Link>
			</div>
			<div className="navigation__profile">
				<Link to="/profile" className="navigation__profile-link">
					Аккаунт
				</Link>
				<div className="navigation__profile-icon-link">
					<Link to="/profile">
						<img
							src={iconProfile}
							className="navigation__profile-icon"
							alt="Иконка профиля"
						/>
					</Link>
				</div>
			</div>
		</nav>
	);
}

export default Navigation;
