// src/components/Footer/Footer.jsx
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        <img src="/logo-footer.svg" alt="" className="footer__logo" />
        <p className="footer__text">© {new Date().getFullYear()} Kasa — Tous droits réservés</p>
      </div>
    </footer>
  );
}
