import { NavLink } from "react-router";

import "./GeneralHeader.css";

function GeneralHeader() {
	return (
		<header>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/pages/Mercenaries">Mercenaries</NavLink>
			<NavLink to="/pages/MercenaryDetails">Mercenary Details</NavLink>
			<NavLink to="/pages/Recrutment">Recrutment</NavLink>
			<NavLink to="/pages/About">About</NavLink>
			<NavLink to="/pages/Contact">Contact</NavLink>
		</header>
	);
}

export default GeneralHeader;
