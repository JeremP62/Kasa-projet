// src/components/Footer/footer.jsx
import React from "react";
import footerLogo from "../../assets/footer.png";

export default function Footer() {
  return (
    <footer
      // full-bleed: s'affranchit du max-width/padding parent
      style={{
        width: "100vw",
        marginLeft: "calc(50% - 50vw)",
        marginRight: "calc(50% - 50vw)",
        backgroundColor: "black",
      }}
    >
      <img
        src={footerLogo}
        alt="Kasa footer logo"
        style={{ display: "block", width: "100%", height: "auto" }}
      />
    </footer>
  );
}




