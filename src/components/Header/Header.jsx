// src/components/Header/Header.jsx
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <NavLink to="/" className="header__brand" aria-label="Kasa - Accueil">
          <img src={logo} alt="Kasa" />
        </NavLink>

        <nav className="header__nav" aria-label="Navigation principale">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
            Accueil
          </NavLink>
          <NavLink to="/a-propos" className={({ isActive }) => (isActive ? "active" : "")}>
            À Propos
          </NavLink>
        </nav>
      </div>
    </header>
  );
}


