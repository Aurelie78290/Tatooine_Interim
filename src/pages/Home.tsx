{/* import composant */}
import BentoGrid from "../components/BentoGrid";
import Hero from "../components/Hero";
{/* import css */}
import "./Home.css";
{/* import img */}
import bgHome from "../assets/bgHome.jpg"

function Home() {
	return (
		<>
		<Hero 
		title="Tatooine Interim"
		subtitle="Une mandale ou rien"
		background={bgHome}/>

	<h2>About stuff</h2>
	<BentoGrid />


	</>);
}

export default Home;