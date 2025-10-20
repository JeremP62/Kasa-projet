import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./Logement.scss";

export default function Logement() {
  const logement = useLoaderData();
  const [current, setCurrent] = useState(0);

  const total = logement.pictures.length;

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <div className="container">
      <div className="carousel">
        {total > 1 && (
          <button
            className="carousel__arrow carousel__arrow--left"
            aria-label="Précédent"
            onClick={handlePrev}
          >
            ‹
          </button>
        )}

        <img
          className="carousel__img"
          src={logement.pictures[current]}
          alt={`${logement.title} ${current + 1}/${total}`}
        />

        {total > 1 && (
          <button
            className="carousel__arrow carousel__arrow--right"
            aria-label="Suivant"
            onClick={handleNext}
          >
            ›
          </button>
        )}

        {total > 1 && (
          <span className="carousel__count">
            {current + 1}/{total}
          </span>
        )}
      </div>

      <div className="logement__top">
        <div className="logement__left">
          <h1 className="logement__title">{logement.title}</h1>
          <p className="logement__location">{logement.location}</p>
          <div className="tags">
            {logement.tags?.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
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
                className={`star ${
                  i <= (logement.rating || 0) ? "star--full" : ""
                }`}
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="logement__bottom">
        <details className="collapse" open>
          <summary className="collapse__head">Description</summary>
          <div className="collapse__body">{logement.description}</div>
        </details>

        <details className="collapse" open>
          <summary className="collapse__head">Équipements</summary>
          <div className="collapse__body">
            <ul className="equip-list">
              {logement.equipments?.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </div>
        </details>
      </div>
    </div>
  );
}
