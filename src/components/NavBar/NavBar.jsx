import './NavBar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import iconProfile from '../../images/icon-profile.svg';

function NavBar() {
	const [isNavBar, setNavBar] = useState(false);

	function handleOpenNavBar() {
		setNavBar(!isNavBar);
	}
	const NavigationButton = `nav-bar__container ${
		isNavBar ? 'nav-bar__container_active' : ''
	}`;
	return (
		<div className='nav-bar'>
			<div className='navigation__button' onClick={handleOpenNavBar} >
				<span className='navigation__line'></span>
			</div>
			<div className={NavigationButton}>
				<div className="nav-bar__menu">
					<button className="nav-bar__button-close" onClick={handleOpenNavBar}></button>
					<div className="nav-bar__links">
						<Link to="/" className="nav-bar__link nav-bat__main">Главная</Link>
						<Link to="/movies" className="nav-bar__link nav-bat__movies" onClick={handleOpenNavBar}>Фильмы</Link>
						<Link to="/saved-movies" className="nav-bar__link nav-bat__saved-movies" onClick={handleOpenNavBar}>Сохранённые фильмы</Link>
						<div className="nav-bar__profile">
							<Link to="/profile" className="nav-bar__profile-link" onClick={handleOpenNavBar}>
						Аккаунт
							</Link>
							<div className="nav-bar__profile-icon-link">
								<Link to="/profile">
									<img
										src={iconProfile}
										className="nav-bar__profile-icon"
										alt="Иконка профиля"
									/>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NavBar;
