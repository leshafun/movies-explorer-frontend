import './Promo.css';
import promoImage from '../../images/promo-image.svg';

function Promo() {
	return (
		<section className="promo">
			<div className="promo__container">
				<img
					className="promo__image"
					src={promoImage}
					alt="Логотип земли из надписи 'WEB'"
				/>
				<div className="promo__about-project">
					<h1 className="promo__title">
						Учебный проект студента факультета Веб-<br />разработки.
					</h1>
					<p className="promo__subtitle">
						Листайте ниже, чтобы узнать больше про этот проект и его создателя.
					</p>
					<a
						className="promo__link"
						target="_blank"
						rel="noreferrer"
						href="https://practicum.yandex.ru/web/"
					>
						Узнать больше
					</a>
				</div>
			</div>
		</section>
	);
}

export default Promo;
