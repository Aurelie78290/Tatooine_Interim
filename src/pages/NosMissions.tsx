import CardRecrutment from "../components/CardRecrutment";
import Hero from "../components/Hero";

const dataCardPrez = {
	titreh2: "Protection rapprochée",
	imgSrc:
		"https://www.okiwoki.com/images/produits/parodies-cinema/i-want-you-pull-enfant-noir-h-11-12-ans_2.jpg",
	imgAlt: "Darth Vador",

	paragraphe:
		"Suivi de Présence Prioritaire,	Accompagnement Opérationnel Dédié, Supervision de Zone Restreinte, Maintien de Proximité Sécurisée",
	buttonText: "Contactez-nous",
	buttonLink: "/pages/Contact",
	reverse: false,
};

const dataCardPrez2 = {
	titreh2: "Pilotes privés & Transferts",
	imgSrc:
		"https://cdnph.upi.com/sv/ph/og/i/7291480971867/2016/1/14809720545897/v1.5/Texas-police-try-to-teach-Stormtrooper-to-shoot-in-recruitment-video.jpg",
	imgAlt: "Storm trooper",
	paragraphe:
		"Relocalisation Stratégique Réalignement Sectoriel	Éloignement Temporaire	Coordination de Trajectoire",
	buttonText: "Contactez-nous",
	buttonLink: "/pages/Contact",
	reverse: false,
};

const dataCardPrez3 = {
	titreh2: "Missions Diplomatiques",
	imgSrc:
		"https://cdnph.upi.com/sv/ph/og/i/7291480971867/2016/1/14809720545897/v1.5/Texas-police-try-to-teach-Stormtrooper-to-shoot-in-recruitment-video.jpg",
	imgAlt: "Storm trooper",
	paragraphe:
		"Mandat de gestion des parties prenantes,	Stabilisation de factions antagonistes,	Harmonisation des Intérêts Sectoriels,	Médiation de Transition Opérationnelle",
	buttonText: "Contactez-nous",
	buttonLink: "/pages/Contact",
	reverse: false,
};

const dataCardPrez4 = {
	titreh2: "Opérations à confidentialité renforcée",
	imgSrc:
		"https://cdnph.upi.com/sv/ph/og/i/7291480971867/2016/1/14809720545897/v1.5/Texas-police-try-to-teach-Stormtrooper-to-shoot-in-recruitment-video.jpg",
	imgAlt: "Storm trooper",
	paragraphe:
		"réaffectation d'actifs et de valeurs,	Audit de Réassignation Sélective,	Réaffectation Temporaire ou définitive de Ressources Humaines,	Transfert Prioritaire de Personnel,	Programme de Déploiement Hors-Réseau, Dossier de Mise en Quarantaine Contractuelle,	Mandat de Réorganisation de Présence Individuelle,	Opération de Relocalisation Confidentielle,	Intervention de Réévaluation Stratégique des Effectifs",
	buttonText: "Contactez-nous",
	buttonLink: "/pages/Contact",
	reverse: false,
};

function NosMissions() {
	return (
		<div>
			<Hero
				title="Tatooine Interim"
				subtitle="Une mandale ou rien"
				background="../src/assets/bgHome.jpg"
			/>
			<CardRecrutment dataCardPrez={dataCardPrez} />
			<CardRecrutment dataCardPrez={dataCardPrez2} />
			<CardRecrutment dataCardPrez={dataCardPrez3} />
			<CardRecrutment dataCardPrez={dataCardPrez4} />
		</div>
	);
}

export default NosMissions;
