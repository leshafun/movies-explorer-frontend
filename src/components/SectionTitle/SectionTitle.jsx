import './SectionTitle.css';

function SectionTitle(props) {
	const { title } = props;
	return <h2 className="section-title__text">{title}</h2>;
}

export default SectionTitle;
