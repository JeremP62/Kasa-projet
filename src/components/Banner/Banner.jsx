// src/components/Banner/Banner.jsx
import "./Banner.scss";
import defaultBanner from "./banner-home.png";

export default function Banner({
  image = defaultBanner,
  text = "Chez vous, partout et ailleurs",
  position = "",
}) {
  return (
    <section
      className="banner"
      aria-label={text}
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: position,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="banner__veil" aria-hidden="true" />
      <h2 className="banner__text">{text}</h2>
    </section>
  );
}




