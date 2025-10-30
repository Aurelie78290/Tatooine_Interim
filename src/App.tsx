import { Outlet } from "react-router";
import { DataProvider } from "./components/DataProvider";

import GeneralHeader from "./components/GeneralHeader";

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
		</DataProvider>
	);
}

export default App;
