// Fonction pour charger tous les logements
export async function getAllLogements() {
  const res = await fetch("/data/logements.json"); // va lire ton JSON dans public/data
  if (!res.ok) {
    throw new Error("Impossible de charger les logements");
  }
  return res.json();
}

// Fonction pour récupérer un logement par son id
export async function getLogementById(id) {
  const logements = await getAllLogements();
  return logements.find((item) => item.id === id);
}
