import { Link, Outlet } from "react-router";
import Accordeon from "./components/Accordeon";
import { DataProvider } from "./components/DataProvider";
import GeneralHeader from "./components/GeneralHeader";
import Footer from "./components/Footer";
import "./App.css";

function App() {
	return (
		<DataProvider>
			<nav>
				<GeneralHeader />
			</nav>
			<main>
				<Outlet />
			</main>
			<Footer />
		</DataProvider>
	);
}

export default App;
