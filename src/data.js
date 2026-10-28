// ─────────────────────────────────────────────────────────────
// Tout le contenu du portfolio se remplit ici.
// Tant qu'un tableau est vide, la section affiche des emplacements
// « à venir » pour garder la mise en page visible.
// Les images vont dans /public (ex. public/dessins/portrait.jpg
// devient "/dessins/portrait.jpg").
// ─────────────────────────────────────────────────────────────

export const profil = {
  prenom: "Feriel",
  nom: "Benatsi",
  titre: "Développeuse & designer",
  etiquettes: ["Développeuse", "Designer"], // étiquettes au-dessus du titre de l'accueil
  badge: {
    accroche: "Enchantée,",
    departement: "code, design & coups de crayon",
  },
  ville: "Île-de-France",
  email: "ferielbenatsi6@gmail.com",
  photo: "", // ex. "/photo.png" : idéalement détourée (fond transparent) pour le badge
  aPropos: [
    // "Premier paragraphe de présentation.",
    // "Deuxième paragraphe.",
  ],
};

export const liens = [
  { nom: "LinkedIn", url: "", libelle: "" },
  { nom: "GitHub", url: "https://github.com/FerielBenatsi", libelle: "FerielBenatsi" },
  { nom: "Behance", url: "", libelle: "" },
];

export const competences = [
  { groupe: "Frontend", items: [] },
  { groupe: "Backend", items: [] },
  { groupe: "Design", items: [] },
  { groupe: "Outils", items: [] },
];

export const projets = [
  // {
  //   slug: "nom-du-projet",            // adresse : /projets/nom-du-projet (sinon tirée du titre)
  //   titre: "Nom du projet",
  //   description: "Une ou deux phrases sur ce que fait le projet.",
  //   tags: ["React", "TypeScript"],
  //   image: "/projets/nom-du-projet.jpg",
  //   github: "https://github.com/FerielBenatsi/...",
  //   demo: "https://...",
  //
  //   // Page de détails (tout est facultatif)
  //   annee: "2026",
  //   role: "Développeuse full-stack",
  //   equipe: "Projet solo",
  //   contexte: "Pourquoi ce projet, pour qui, quel problème il résout.",
  //   fonctionnalites: ["Première fonctionnalité", "Deuxième fonctionnalité"],
  //   defis: "Ce qui a été difficile et ce que j'en ai appris.",
  //   captures: ["/projets/nom-1.jpg", "/projets/nom-2.jpg"],
  // },
];

export const parcours = [
  // {
  //   periode: "2026 – 2027",
  //   titre: "Master 2 Informatique, parcours STL",
  //   lieu: "Sorbonne Université",
  //   description: "",
  // },
];

export const certificats = [
  // {
  //   titre: "Nom du certificat",
  //   organisme: "Organisme",
  //   date: "2026",
  //   image: "/certificats/nom.jpg",  // aperçu (facultatif)
  //   lien: "/certificats/nom.pdf",
  // },
];

export const dessins = [
  // {
  //   src: "/dessins/portrait.jpg",
  //   titre: "Titre du dessin",
  //   technique: "Fusain sur papier",
  //   annee: "2026",
  // },
];
