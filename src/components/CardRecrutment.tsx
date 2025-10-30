import "./CardRecrutment.css";

function CardRecrutment() {
	return (
		<div className="card-recruitment">
			<h2 className="title2-card-recruitment">Recruitment </h2>
			<section className="section-card-recruitment">
				<img
					src="https://www.okiwoki.com/images/produits/parodies-cinema/i-want-you-pull-enfant-noir-h-11-12-ans_2.jpg"
					alt="Darth Vador"
				/>
				<article className="article-card-recruitment">
					<h3>Vous souhaitez nous rejoindre ?</h3>
					<p>
						Chez <strong>Tatooine Intérim</strong>, on ne cherche pas des héros…
						juste des gens qui savent tirer droit (ou presque). Si tu as survécu
						à une cantina un vendredi soir, tu as déjà l’expérience requise.
						Blaster rouillé, droïde grincheux ou sabre laser d’occasion ? Pas de
						souci, on recrute tout ce qui respire — ou bippe. Rejoins notre
						équipe et gagne plus de crédits qu’un contrebandier chanceux !
					</p>
					<button type="button">Contactez-nous</button>
				</article>
			</section>
		</div>
	);
}

export default CardRecrutment;
