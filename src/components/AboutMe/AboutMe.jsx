import './AboutMe.css';
import SectionTitle from '../SectionTitle/SectionTitle.jsx';
import mePhoto from '../../images/me-photo.jpg';
import Portfolio from '../Portfolio/Portfolio.jsx';

function AboutMe() {
	return (
		<section className="about-me">
			<div className="about-me__container">
				<div className="about-me__title">
					<SectionTitle title="Студент" />
				</div>
				<div className="about-me__info">
					<div className="about-me__info-text">
						<h2 className="about-me__name">Алексей</h2>
						<p className="about-me__description">
							Фронтенд-разработчик, 33 года
						</p>
						<p className="about-me__biography">
							Я родился и живу в Красноярск, закончил факультет менеджмента.
							Детей и жены нет. Я люблю слушать музыку, смотреть фильмы, играть
							в игры. Работаю ведущим бухгалтером в строительной организации. Заканчиваю курсы
							по веб-программированию. Хочу делать крутые сайты!
						</p>
						<a
							className="about-me__github"
							target="_blank"
							rel="noreferrer"
							href="https://github.com/leshafun"
						>
							Github
						</a>
					</div>
					<img
						className="about-me__photo"
						src={mePhoto}
						alt="Фотография человека"
					/>
				</div>
			</div>
			<Portfolio />
		</section>
	);
}

export default AboutMe;
