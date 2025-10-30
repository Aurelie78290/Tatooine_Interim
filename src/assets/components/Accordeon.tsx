import "./Accordeon.css";

import { useState } from "react";

function AccordionGroup() {
	const [openIndex, setOpenIndex] = useState(null);

	const toggle = (index: any) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	const items = [
		{
			id: 1,
			title: "Depuis quand on est là",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
		{
			id: 2,
			title: "Les missions",
			content: "On fait plein de trucs passionnants 👩‍💻",
		},
		{
			id: 3,
			title: "Présentation rapide de l'entreprise",
			content: "Pas de blabla, juste les faits.",
		},
		{
			id: 4,
			title: "Question libre service",
			content: "À vous de choisir !",
		},
	];

	return (
		<div className="accordion-container">
			{items.map((item, i) => (
				// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
				<details
					key={item.id}
					open={openIndex === i}
					onClick={(e) => {
						e.preventDefault();
						toggle(i);
					}}
					className="accordion-item"
				>
					<summary className="accordion-summary">
						<span>{item.title}</span>
						<span
							className={`accordion-arrow ${openIndex === i ? "open" : ""}`}>
							›
						</span>
					</summary>

					<div className="accordion-content">{item.content}</div>
				</details>
			))}
		</div>
	);
}

// function Accordeon() {
// 	return (
// 		<div>
// 			<h3>blablabla</h3>
// 			<p>
// 				Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sequi
// 				ea ab quam vel architecto. Dolorum repellat non corporis optio libero
// 				suscipit praesentium vitae aspernatur veritatis. Sit eum qui minima.
// 			</p>
// 			<div className="accordeon">
// 				<details className="accordeon1">
// 					<summary> Depuis quand on est là </summary>
// 					<p>
// 						{" "}
// 						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam,
// 						harum sint, quis impedit suscipit tempore perspiciatis aperiam atque
// 						laudantium esse, dignissimos cum sunt cumque reiciendis! Rerum enim
// 						nemo numquam tempore?
// 					</p>
// 				</details>

// 				<details className="accordeon2">
// 					<summary> Les missions </summary>
// 					<p>
// 						{" "}
// 						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam,
// 						harum sint, quis impedit suscipit tempore perspiciatis aperiam atque
// 						laudantium esse, dignissimos cum sunt cumque reiciendis! Rerum enim
// 						nemo numquam tempore?
// 					</p>
// 				</details>

// 				<details className="accordeon3">
// 					<summary> Présentation rapide de l’entreprise </summary>
// 					<p>
// 						{" "}
// 						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam,
// 						harum sint, quis impedit suscipit tempore perspiciatis aperiam atque
// 						laudantium esse, dignissimos cum sunt cumque reiciendis! Rerum enim
// 						nemo numquam tempore?
// 					</p>
// 				</details>

// 				<details className="accordeon4">
// 					<summary> Question libre service </summary>
// 					<p>
// 						{" "}
// 						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam,
// 						harum sint, quis impedit suscipit tempore perspiciatis aperiam atque
// 						laudantium esse, dignissimos cum sunt cumque reiciendis! Rerum enim
// 						nemo numquam tempore?
// 					</p>
// 				</details>
// 			</div>
// 		</div>
// 	);
// }
export default AccordionGroup;
