import './NavigationAuth.css';
import { Link } from 'react-router-dom';

function NavigationAuth() {
	return (
		<nav className="navigation-auth">
			<Link to="/signup" className="navigation-auth__signup">
				Регистрация
			</Link>
			<Link to="/signin" className="navigation-auth__signin">
				Войти
			</Link>
		</nav>
	);
}

export default NavigationAuth;
