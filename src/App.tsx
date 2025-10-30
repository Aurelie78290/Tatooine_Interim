import { useState } from "react";
import { Link, Outlet } from "react-router";
import { DataProvider } from "./components/DataProvider";

import "./App.css";

function App() {
	return (
		<DataProvider>
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
		</DataProvider>
	);
}

export default App;
