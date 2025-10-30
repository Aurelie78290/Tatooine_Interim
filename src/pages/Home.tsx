import { useContext } from "react";
import DataContext from "../contexts/DataContext";
import Footer from "../components/Footer";

function Home() {
	const { data } = useContext(DataContext);
	return (
		<>
			<h1>
				Home page
				{console.log(data)}
			</h1>

			<Footer />
		</>
	);
}

export default Home;
