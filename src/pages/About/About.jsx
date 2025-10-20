import "./About.css";
import Collapse from "../../components/Collapse/Collapse";
import bannerAbout from "../../assets/about-banner.png";

export default function About() {
  return (
    <div className="about-page">
      {/* ✅ Bannière pleine largeur */}
      <div className="about-banner">
        <img src={bannerAbout} alt="Montagnes enneigées" />
      </div>

      {/* ✅ Zone centrée + plus étroite pour les collapses */}
      <div className="about-collapses">
        <Collapse title="Fiabilité">
          <p>Les annonces postées sur Kasa garantissent une fiabilité totale...</p>
        </Collapse>
        <Collapse title="Respect">
          <p>La bienveillance fait partie des valeurs fondatrices de Kasa...</p>
        </Collapse>
        <Collapse title="Service">
          <p>Nos équipes se tiennent à votre disposition pour vous assurer...</p>
        </Collapse>
        <Collapse title="Sécurité">
          <p>La sécurité est la priorité de Kasa...</p>
        </Collapse>
      </div>
    </div>
  );
}
