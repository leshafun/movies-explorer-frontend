import './Techs.css';
import SectionTitle from '../SectionTitle/SectionTitle.jsx';

function Techs() {
	return (
		<section className="techs">
			<div className="techs__container">
				<div className="techs__title">
					<SectionTitle title="Технологии" />
				</div>
				<div className="techs__info">
					<h3 className="techs__info-title">7 технологий</h3>
					<p className="techs__info-description">
						На курсе веб-разработки мы освоили технологии, которые применили в
						дипломном проекте.
					</p>
				</div>
				<ul className="techs__links">
					<a
						className="tech__link"
						target="_blank"
						rel="noreferrer"
						href="https://developer.mozilla.org/ru/docs/Web/HTML"
					>
						HTML
					</a>
					<a
						className="tech__link"
						target="_blank"
						rel="noreferrer"
						href="https://developer.mozilla.org/ru/docs/Web/CSS/Reference"
					>
						CSS
					</a>
					<a
						className="tech__link"
						target="_blank"
						rel="noreferrer"
						href="https://developer.mozilla.org/ru/docs/Web/JavaScript"
					>
						JS
					</a>
					<a
						className="tech__link"
						target="_blank"
						rel="noreferrer"
						href="https://ru.reactjs.org/docs/getting-started.html"
					>
						React
					</a>
					<a
						className="tech__link"
						target="_blank"
						rel="noreferrer"
						href="https://github.com/"
					>
						Git
					</a>
					<a
						className="tech__link"
						target="_blank"
						rel="noreferrer"
						href="https://expressjs.com/ru/"
					>
						Express.js
					</a>
					<a
						className="tech__link"
						target="_blank"
						rel="noreferrer"
						href="https://www.mongodb.com/"
					>
						mongoDB
					</a>
				</ul>
			</div>
		</section>
	);
}

export default Techs;
