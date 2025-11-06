import "./About.css";
import Collapse from "../../components/Collapse/Collapse";
import bannerAbout from "../../assets/about-banner.png";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


export default function About() {
  return (
    <>
    
      <Header />

      <div className="about-page">
        <div className="about-banner">
          <img src={bannerAbout} alt="Montagnes enneigées" />
        </div>

        <div className="about-collapses">
          <Collapse title="Fiabilité">
            <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont confirmes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
          </Collapse>
          <Collapse title="Respect">
            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
          </Collapse>
          <Collapse title="Service">
            <p>La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance. </p>
          </Collapse>
          <Collapse title="Sécurité">
            <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs chaque logement correspond aux critères de sécutité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisions également des ateliers sur la sécutité domestique pour nos hôtes.</p>
          </Collapse>
        </div>
      </div>

      <Footer />
    </>
  );
}

