import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';
import NavigationAuth from '../NavigationAuth/NavigationAuth.jsx';
import Navigation from '../Navigation/Navigation.jsx';

function Header(props) {
	const { isLoggedIn } = props;
	const location = useLocation();

	return (
		<header
			className={`header ${
				location.pathname === '/' ? 'header__theme_dark' : ''
			}`}
		>
			<div className="header__container">
				<div className="header__links">
					<Link to="/" className="header__logo">
						<img src={logo} alt="Логотип" />
					</Link>
					{isLoggedIn ? <Navigation /> : <NavigationAuth />}
				</div>
			</div>
		</header>
	);
}

export default Header;
