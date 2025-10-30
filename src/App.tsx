import { Link, Outlet } from "react-router";

import "./App.css";

function App() {
	return (
		<>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/pages/Mercenaries">Mercenaries</Link>
				<Link to="/pages/MercenaryDetails">Mercenary Details</Link>
				<Link to="/pages/Recrutment">Recrutment</Link>
				<Link to="/pages/About">About</Link>
				<Link to="/pages/Contact">Contact</Link>
			</nav>
			<main>
				<Outlet />
			</main>
		</>
	);
}

export default App;
