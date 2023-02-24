import './Login.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Login() {
	return (
		<section className="login">
			<div className="login__container">
				<Link to="/" className="login__logo">
					<img src={logo} alt="Логотип" />
				</Link>
				<p className="login__greeting">Рады видеть!</p>
				<form className="login__form">
					<label className="login__label-name">E-mail</label>
					<input
						className="login__input login__input-email"
						type="email"
						name="email"
						id="email"
						required
						defaultValue="pochta@yandex.ru"
					/>
					<label className="login__label-name">Пароль</label>
					<input
						className="login__input"
						type="password"
						name="password"
						id="password"
						required
					/>
					<button type="submit" className="login__button">
						Войти
					</button>
				</form>
				<div className="login__link">
					<p className="login__link-title">Ещё не зарегистрированы?</p>
					<Link to="/signup" className="login__link-signup">
						Регистрация
					</Link>
				</div>
			</div>
		</section>
	);
}

export default Login;
