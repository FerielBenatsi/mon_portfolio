import { projets } from "./data";

// Adresse d'un projet : son `slug`, ou à défaut son titre simplifié
// (« Mon Projet Élan » devient « mon-projet-elan »).
export function slugProjet(projet) {
  if (projet.slug) return projet.slug;
  return projet.titre
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Projet de démonstration, affiché tant que la liste `projets` est vide,
// pour voir à quoi ressemble une page de détails.
export const PROJET_EXEMPLE = {
  slug: "exemple",
  exemple: true,
  titre: "Titre du projet",
  description: "Une ou deux phrases qui résument le projet.",
  tags: ["Techno 1", "Techno 2", "Techno 3"],
  annee: "Année",
  role: "Ton rôle",
  equipe: "Solo ou en équipe",
  contexte: "Pourquoi ce projet existe, pour qui, et quel problème il résout.",
  fonctionnalites: ["Fonctionnalité principale", "Deuxième fonctionnalité", "Troisième fonctionnalité"],
  defis: "Ce qui a été difficile techniquement, comment tu l'as résolu, ce que tu en retiens.",
  captures: [],
};

export function trouverProjet(slug) {
  const projet = projets.find((p) => slugProjet(p) === slug);
  if (projet) return projet;
  if (projets.length === 0 && slug === PROJET_EXEMPLE.slug) return PROJET_EXEMPLE;
  return null;
}
