// src/pages/Home/Home.jsx
import { useEffect, useState } from "react";
import { getAllLogements } from "../../services/api";

export default function Home() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    getAllLogements()
      .then(setLogements)
      .catch(console.error);
  }, []);

  return (
    <div>
      <h2>Liste des logements ({logements.length})</h2>
      <ul>
        {logements.map((l) => (
          <li key={l.id}>{l.title}</li>
        ))}
      </ul>
    </div>
  );
}
