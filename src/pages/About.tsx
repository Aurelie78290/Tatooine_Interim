import Accordeon from "../components/Accordeon";
import Hero from "../components/Hero";
import bgHome from "../assets/bgHome.jpg";
import "./About.css";

function About() {
	return (
		<div>
			<Hero
				title="About us"
				subtitle="Une mandale ou rien"
				background={bgHome}
			/>
			<div className="titre">
				<h2>mange tes morts</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
					tenetur sint provident mollitia impedit
					<br /> minima corrupti sit consectetur incidunt odio at laborum
					dignissimos temporibus amet aliquid numquam,
				</p>
			</div>
			<Accordeon />
		</div>
	);
}

export default About;
