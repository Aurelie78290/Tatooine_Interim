import { useEffect, useState } from "react";

import "./Mercenaries.css";

function Mercenaries() {
	const [dataMercenaries, setDataMercenaries] = useState([]);

	const getData = () => {
		fetch("")
			.then((res) => res.json())
			.then((resDataJson) => setDataMercenaries(resDataJson));
	};

	useEffect(() => {
		getData();
	}, []);

	return 
    <section>
        <h1>Mercenaries</h1>
        <div>
            {dataMercenaries.map((mercenary)=>
            <article>
                <img src={mercenary.image} alt={mercenary.name}
                <p>{mercenary.name}</p>
            </article>)}
        </div>
    </section>
}

export default Mercenaries;
