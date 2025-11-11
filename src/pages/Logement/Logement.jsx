// src/pages/Logement/Logement.jsx
import { useLoaderData } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Slideshow from "../../components/Slideshow/Slideshow";
import Collapse from "../../components/collapse/collapse";
import "./Logement.scss";

export default function Logement() {
  const logement = useLoaderData();

  return (
    <>
      <Header />

      <div className="container">
        
        <Slideshow images={logement.pictures} title={logement.title} />

        <div className="logement__top">
          <div className="logement__left">
            <h1 className="logement__title">{logement.title}</h1>
            <p className="logement__location">{logement.location}</p>
            <div className="tags">
              {logement.tags?.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>

          <div className="logement__right">
            <div className="host">
              <div className="host__name">{logement.host?.name}</div>
              <img
                className="host__pic"
                src={logement.host?.picture}
                alt={logement.host?.name}
              />
            </div>
            <div className="rating">
              {[1, 2, 3, 4, 5].map((i) => (
                <span
                  key={i}
                  className={`star ${i <= Number(logement.rating || 0) ? "star--full" : ""}`} /*Si étoile inférieur ou égal à la note du logement */
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="logement__bottom">
       
          <Collapse title="Description">
            {logement.description}
          </Collapse>

          <Collapse title="Équipements">
            <ul className="equip-list">
              {logement.equipments?.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>

      <Footer />
    </>
  );
}
