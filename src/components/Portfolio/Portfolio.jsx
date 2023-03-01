import './Portfolio.css';

function Portfolio() {
	return (
		<section className="portfolio">
			<div className="portfolio__container">
				<h3 className="portfolio__title">Портфолио</h3>
				<ul className="portfolio__links">
					<li className="portfolio__item">
						<a
							className="portfolio__link"
							target="_blank"
							rel="noreferrer"
							href="https://github.com/leshafun/how-to-learn"
						>
							Статичный сайт
						</a>
					</li>
					<li className="portfolio__item">
						<a
							className="portfolio__link"
							target="_blank"
							rel="noreferrer"
							href="https://leshafun.github.io/russian-travel/"
						>
							Адаптивный сайт
						</a>
					</li>
					<li className="portfolio__item">
						<a
							className="portfolio__link"
							target="_blank"
							rel="noreferrer"
							href="https://leshafun.github.io/mesto/"
						>
							Одностраничное приложение
						</a>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;
