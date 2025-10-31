import Testimonial, { type TestimonialItem } from "../components/Testimonial";

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    text:
      "'Un assassinat tres professionnel, tres propre, je n'ai senti aucune douleur. J'ai pu partir en enfer sereinement.'",
    name: "Ktix Luhad",
    role: "Mort par assassinat",
    avatarSrc: "https://pbs.twimg.com/profile_images/761465388894781440/3NISMSHu_400x400.jpg",
    avatarAlt: "Ktix Luhad",
  },
  {
    id: 2,
    text:
      "'J'ai ete transporte dans une boite de livraison pour echapper a ceux qui voulaient ma peau. Service 5 etoiles !'",
    name: "Pidt Sahs",
    role: "Transporte dans un conteneur",
    avatarSrc: "https://i.pinimg.com/originals/58/6b/f9/586bf9d0729e23020b87dfcbda5fcbdd.jpg",
    avatarAlt: "Pidt Sahs",
  },
  {
    id: 3,
    text:
      "'J'ai ete enleve, on m'a retire quatre doigts. Douleur garanti pour que je crache le morceau !'",
    name: "Plazjenk Pani",
    role: "Enleve pour massacre des carottes",
    avatarSrc: "https://mymodernmet.com/wp/wp-content/uploads/archive/Li60DeDZNI8eVDKi66HB_StarWarsCat2.jpeg",
    avatarAlt: "Plazjenk Pani",
  },
];


function About() {
	return (
		<>
		<h1>About page</h1>
		<Testimonial 
		title="Temoignage des clients morts"
		subtitle="Parce que la mort c'est bien, surtout quand on n'a pas de credit!"
		items={testimonials} />
		</>
	);
}

export default About;
