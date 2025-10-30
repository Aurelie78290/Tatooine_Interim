import Accordeon from "../components/Accordeon";
import Hero from "../components/Hero";
import bgHome from "../assets/bgHome.jpg";

function About() {
	return (
		<div>
			<Hero
				title="About us"
				subtitle="Une mandale ou rien"
				background={bgHome}
			/>
			<Accordeon />
		</div>
	);
}

export default About;
