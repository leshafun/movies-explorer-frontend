import './Main.css';
import Promo from '../Promo/Promo.jsx';
import AboutProject from '../AboutProject/AboutProject.jsx';
import Techs from '../Techs/Techs.jsx';
import AboutMe from '../AboutMe/AboutMe.jsx';

function Main() {
	return (
		<div className="main">
			<Promo />
			<AboutProject />
			<Techs />
			<AboutMe />
		</div>
	);
}

export default Main;
