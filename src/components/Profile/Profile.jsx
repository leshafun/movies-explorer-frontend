import './Profile.css';

function Profile(props) {
	const { name } = props;
	return (
		<main className="profile">
			<div className="profile__container">
				<h1 className="profile__greeting">Привет, {name}!</h1>
				<div className="profile__info">
					<p className="profile__title">Имя</p>
					<p className="profile__name">{name}</p>
				</div>
				<div className="profile__info">
					<p className="profile__title">E-mail</p>
					<p className="profile__name">pochta@yandex.ru</p>
				</div>
				<p className="profile__edit">Редактировать</p>
				<p className="profile__log-out">Выйти из аккаунта</p>
			</div>
		</main>
	);
}

export default Profile;
