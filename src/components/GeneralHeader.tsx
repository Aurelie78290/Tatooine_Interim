import { NavLink } from "react-router";

import "./GeneralHeader.css";

function GeneralHeader() {
	return (
		<header className="site-header">
			<div className="container-header">
				<NavLink to="/" className="logo-header-link">
					<img src="../src/assets/logv2.png" alt="" className="logo-header" />
				</NavLink>
				<nav className="navbar-header">
					<NavLink to="/">Home</NavLink>
					<NavLink to="/pages/Mercenaries">Mercenaries</NavLink>
					<NavLink to="/pages/NosMissions">Nos missions</NavLink>
					<NavLink to="/pages/Recrutment">Recruitment</NavLink>
					<NavLink to="/pages/About">About</NavLink>
					<NavLink to="/pages/Contact">Contact</NavLink>
				</nav>
			</div>
		</header>
	);
}

export default GeneralHeader;
