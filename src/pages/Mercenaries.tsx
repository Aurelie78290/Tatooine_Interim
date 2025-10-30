import { useContext } from "react";
import DataContext from "../contexts/DataContext";

import "./Mercenaries.css";

function Mercenaries() {
	const { data } = useContext(DataContext);

	return (
		<div>
			<h1>Mercenaries page</h1>
			<div>
				{data.map((mercenary) => (
					<article>
						<img src={mercenary.image} alt={mercenary.name} />
						<p>{mercenary.name}</p>
					</article>
				))}
			</div>
		</div>
	);
}

export default Mercenaries;
