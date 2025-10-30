import { useContext, useState } from "react";
import DataContext from "../contexts/DataContext";

import "./Mercenaries.css";

function Mercenaries() {
	const { data } = useContext(DataContext);
	const [searchTerm, setSearchTerm] = useState("");
	const [speciesFilter, setSpeciesFilter] = useState("");
	const [worldFilter, setWorldFilter] = useState("");

	const uniqueSpecies = [...new Set(data.map((m) => m.species))];
	const uniqueWorlds = [...new Set(data.map((m) => m.homeworld))];

	const filteredMercenaries = data.filter((mercenary) => {
		const matchesSearch = mercenary.name
			.toLowerCase()
			.includes(searchTerm.toLowerCase());
		const matchesSpecies =
			!speciesFilter || mercenary.species === speciesFilter;
		const matchesWorld = !worldFilter || mercenary.homeworld === worldFilter;
		return matchesSearch && matchesSpecies && matchesWorld;
	});

	return (
		<section className="mercenaries-section">
			<h1>Registre des Mercenaires</h1>
			<div className="search-section">
				<p>Recherchez votre prochain héros (ou voyou)... </p>

				<div className="search-filters">
					<input
						type="text"
						placeholder="Rechercher par nom..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="search-input"
					/>
					<select
						value={speciesFilter}
						onChange={(e) => setSpeciesFilter(e.target.value)}
						className="filter-select"
					>
						<option value="">Toutes les espèces</option>
						{uniqueSpecies.map((species) => (
							<option key={species} value={species}>
								{species}
							</option>
						))}
					</select>
					<select
						value={worldFilter}
						onChange={(e) => setWorldFilter(e.target.value)}
						className="filter-select"
					>
						<option value="">Tous les mondes</option>
						{uniqueWorlds.map((world) => (
							<option key={world} value={world}>
								{world}
							</option>
						))}
					</select>
					<button
						onClick={() => {
							setSearchTerm("");
							setSpeciesFilter("");
							setWorldFilter("");
						}}
						className="reset-button"
					>
						Réinitialiser
					</button>
				</div>
			</div>

			<div className="mercenaries-general">
				{filteredMercenaries.map((mercenary) => (
					<article key={mercenary.id} className="mercenary-GlobalCard">
						<img src={mercenary.image} alt={`Portrait de ${mercenary.name}`} />
						<h2>{mercenary.name}</h2>
						<p>
							👽 {mercenary.species} &nbsp; 🌍 {mercenary.homeworld}
						</p>
						<button>Fiche du Mandale</button>
					</article>
				))}
			</div>
		</section>
	);
}

export default Mercenaries;
