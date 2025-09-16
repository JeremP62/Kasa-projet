// src/pages/Home/Home.jsx
import { useEffect, useState } from "react";
import { getAllLogements } from "../../services/api";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import "./Home.scss";                               

export default function Home() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    getAllLogements().then(setLogements).catch(console.error);
  }, []);

  return (
    <>
      <Banner text="Chez vous, partout et ailleurs" position="right 50%" zoom={1.6} />
      <section className="home__grid" aria-label="Liste des logements">
        {logements.map((l) => (
          <Card key={l.id} logement={l} />
        ))}
      </section>
    </>
  );
}

