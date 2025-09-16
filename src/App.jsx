// src/App.jsx
import { Outlet, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>Kasa</h1>
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/about">À propos</Link>
        </nav>
      </header>

      <main>
        <Outlet /> {/* Ici s’afficheront Home, About, Logement... */}
      </main>

      <footer>© Kasa 2025</footer>
    </>
  );
}

export default App;


