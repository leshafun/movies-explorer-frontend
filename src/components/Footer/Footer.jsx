import './Footer.css';

function Footer() {
	return (
		<footer className="footer">
			<div className="footer__container">
				<h3 className="footer__title">
					Учебный проект Яндекс.Практикум х BeatFilm.
				</h3>
				<div className="footer__info">
					<p className="footer__year">&copy;2023</p>
					<div className="footer__copyright">
						<p className="footer__copyright-name">Алексей Радюкевич</p>
						<a
							className="footer__site"
							target="_blank"
							rel="noreferrer"
							href="https://github.com/leshafun"
						>
							Github
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
