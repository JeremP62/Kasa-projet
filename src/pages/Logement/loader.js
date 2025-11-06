// src/pages/Logement/loader.js
import { getAllLogements } from "../../services/api";

export async function logementLoader({ params }) {
  const { id } = params;
  const logements = await getAllLogements();
  const logement = logements.find((l) => String(l.id) === String(id));

  if (!logement) {
    throw new Response("Not Found", { status: 404 });
  }
  return logement;
}
