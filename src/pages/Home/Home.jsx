// src/pages/Home/Home.jsx
console.log("HOME RENDUE OK"); 
import { useEffect, useState } from "react";
import { getAllLogements } from "../../services/api";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Home.scss";


export default function Home() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    getAllLogements().then(setLogements).catch(console.error);
  }, []);

  return (
    <>
      <Header /> 

      <Banner />

      <section className="home">
        <div className="home__panel">
          <div className="home__grid">
            {logements.map((l) => (
              <Card key={l.id} logement={l} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}



