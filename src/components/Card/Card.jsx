// src/components/Card/Card.jsx
import { Link } from "react-router-dom";
import "./Card.scss";

export default function Card({ logement }) {
  return (
    <Link to={`/logement/${logement.id}`} className="card" aria-label={logement.title}>
      <div className="card__cover">
        <img src={logement.pictures?.[0]} alt={logement.title} loading="lazy" />
      </div>
      <h3 className="card__title">{logement.title}</h3>
    </Link>
  );
}
