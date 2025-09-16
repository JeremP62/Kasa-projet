// src/pages/Home/Home.jsx
import { useEffect, useState } from "react";
import { getAllLogements } from "../../services/api";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import "./Home.scss";

export default function Home() {
  const [logements, setLogements] = useState([]);
  useEffect(() => { getAllLogements().then(setLogements).catch(console.error); }, []);

  return (
    <>
      <Banner text="Chez vous, partout et ailleurs" />
      <section className="home">
        <div className="home__panel">         {/* 👈 le cadre gris */}
          <div className="home__grid">
            {logements.map((l) => (
              <Card key={l.id} logement={l} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}


