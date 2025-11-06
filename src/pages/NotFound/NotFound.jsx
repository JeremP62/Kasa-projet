// src/pages/NotFound/NotFound.jsx
import { Link } from "react-router-dom";
import "./NotFound.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function NotFound() {
  return (
    <>
    <Header />
    <main className="notfound">
      <h1 className="notfound__code">404</h1>
      <p className="notfound__text">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="notfound__link">Retourner sur la page d’accueil</Link>
    </main>

    <Footer />
    </>
  );
}

