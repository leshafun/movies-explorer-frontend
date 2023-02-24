import './Register.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Register() {
	return (
		<section className="register">
			<div className="register__container">
				<Link to="/" className="register__logo">
					<img src={logo} alt="Логотип" />
				</Link>
				<p className="register__greeting">Добро пожаловать!</p>
				<form className="register__form">
					<label className="register__label-name">Имя</label>
					<input
						className="register__input"
						type="text"
						name="name"
						id="username"
						required
						minLength="2"
						maxLength="40"
						defaultValue="Алексей"
					/>
					<label className="register__label-name">E-mail</label>
					<input
						className="register__input register__input-email"
						type="email"
						name="email"
						id="email"
						required
						defaultValue="pochta@yandex.ru"
					/>
					<label className="register__label-name">Пароль</label>
					<input
						className="register__input register__input-invalid"
						type="password"
						name="password"
						id="password"
						required
						defaultValue="123456789"
					/>
					<span className="register__input-error register__input-error_active">
            Что-то пошло не так...
					</span>
					<button type="submit" className="register__button">
						Зарегистрироваться
					</button>
				</form>
				<div className="register__link">
					<p className="register__link-title">Уже зарегистрированы?</p>
					<Link to="/signin" className="register__link-signin">
						Войти
					</Link>
				</div>
			</div>
		</section>
	);
}

export default Register;
