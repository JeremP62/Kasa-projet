// src/components/Slideshow/Slideshow.jsx
import { useState, useCallback } from "react";
import "./Slideshow.scss";

export default function Slideshow({ images = [], title = "" }) {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const prev = useCallback(() => {
    setCurrent((i) => (i === 0 ? total - 1 : i - 1));
  }, [total]);

  const next = useCallback(() => {
    setCurrent((i) => (i === total - 1 ? 0 : i + 1));
  }, [total]);

  if (total === 0) return null;

  return (
    <div
      className="carousel"
      role="region"
      aria-roledescription="carrousel d'images"
      aria-label={title || "Slideshow"}
    >
      {total > 1 && (
        <button
          className="carousel__arrow carousel__arrow--left"
          aria-label="Précédent"
          onClick={prev}
        >
          ‹
        </button>
      )}

      <img
        className="carousel__img"
        src={images[current]}
        alt={`${title} ${current + 1}/${total}`}
        loading="eager"
      />

      {total > 1 && (
        <button
          className="carousel__arrow carousel__arrow--right"
          aria-label="Suivant"
          onClick={next}
        >
          ›
        </button>
      )}

      {total > 1 && (
        <span className="carousel__count" aria-live="polite">
          {current + 1}/{total}
        </span>
      )}
    </div>
  );
}
