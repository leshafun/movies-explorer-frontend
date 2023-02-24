import './AboutProject.css';
import SectionTitle from '../SectionTitle/SectionTitle.jsx';

function AboutProject() {
	return (
		<section className="about-project">
			<div className="about-project__container">
				<div className="about-project__title">
					<SectionTitle title="О проекте" />
				</div>
				<ul className="about-project__info">
					<li className="about-project__item">
						<h3 className="about-project__info-title">
							Дипломный проект включал 5 этапов
						</h3>
						<p className="about-project__info-description">
							Составление плана, работу над бэкендом, вёрстку, добавление
							функциональности и финальные доработки.
						</p>
					</li>
					<li className="about-project__item">
						<h3 className="about-project__info-title">
							На выполнение диплома ушло 5 недель
						</h3>
						<p className="about-project__info-description">
							У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
							соблюдать, чтобы успешно защититься.
						</p>
					</li>
				</ul>
				<div className="about-project__scheme about-project__info">
					<div className="about-project__scheme_backend">
						<p className="about-project__scheme-backend-durition">1 неделя</p>
						<p className="about-project__scheme-course">Back-end</p>
					</div>
					<div className="about-project__scheme_frontend">
						<p className="about-project__scheme-frontend-durition">4 недели</p>
						<p className="about-project__scheme-course">Front-end</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutProject;
