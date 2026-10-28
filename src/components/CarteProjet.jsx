import { Link } from "react-router-dom";
import { slugProjet, PROJET_EXEMPLE } from "../outils";
import Icone from "./Icone";
import { Etoile, Soleil, Asterisque } from "./Formes";

// Silhouette du dossier, en coordonnées 0 → 1 :
// onglet haut à gauche, puis une marche qui descend vers la droite.
const CHEMIN_DOSSIER =
  "M0 0.075 Q0 0 0.056 0 L0.5 0 C0.55 0 0.56 0.025 0.58 0.075 C0.6 0.13 0.62 0.16 0.67 0.16 L0.944 0.16 Q1 0.16 1 0.235 L1 0.925 Q1 1 0.944 1 L0.056 1 Q0 1 0 0.925 Z";

// À placer une seule fois dans la page (voir App.jsx) : la forme de découpe des dossiers.
export function FormeDossier() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable="false">
      <defs>
        <clipPath id="forme-dossier" clipPathUnits="objectBoundingBox">
          <path d={CHEMIN_DOSSIER} />
        </clipPath>
      </defs>
    </svg>
  );
}

// Couleurs des trois feuilles (gauche, centre, droite), qui changent d'un dossier à l'autre.
const PALETTES = [
  ["lavande", "rose", "vert"],
  ["vert", "lavande", "jaune"],
  ["jaune", "vert", "rose"],
  ["rose", "jaune", "lavande"],
];
const MOTIFS = [Soleil, Etoile, Asterisque];
const POSITIONS = ["g", "c", "d"];

function Dossier({ titre, sousTitre, lien, images = [], indice = 0, niveau = 3, vide = false }) {
  const Titre = `h${niveau}`;
  const palette = PALETTES[indice % PALETTES.length];

  return (
    <Link
      className={vide ? "dossier dossier--vide" : "dossier"}
      to={lien}
      aria-label={`${titre} : voir les détails`}
      style={{ "--teinte": `var(--${palette[1]})` }}
    >
      {/* Halo coloré derrière le verre : il teinte la face du dossier */}
      <span className="dossier__lueur" aria-hidden="true" />

      {/* Feuilles qui dépassent du dossier : images du projet, sinon motifs */}
      <span className="dossier__feuilles" aria-hidden="true">
        {POSITIONS.map((position, i) => {
          const Motif = MOTIFS[i];
          return (
            <span key={position} className={`feuille feuille--${position} feuille--${palette[i]}`}>
              {images[i] ? <img src={images[i]} alt="" loading="lazy" /> : <Motif className="feuille__motif" />}
            </span>
          );
        })}
      </span>

      {/* Face avant en verre dépoli */}
      <span className="dossier__face">
        <svg className="dossier__contour" viewBox="0 0 1 1" preserveAspectRatio="none" aria-hidden="true">
          <path d={CHEMIN_DOSSIER} />
        </svg>
        <span className="dossier__texte">
          <Titre className={vide ? "dossier__titre vide-texte" : "dossier__titre"}>{titre}</Titre>
          {sousTitre && <span className="dossier__sous-titre">{sousTitre}</span>}
        </span>
      </span>

      <span className="dossier__pilule" aria-hidden="true">
        Voir les détails
        <Icone nom="fleche" />
      </span>
    </Link>
  );
}

// `niveau` : h3 dans une section de l'accueil, h2 sur la page Projets.
// `indice` : position dans la liste, pour varier les couleurs des feuilles.
export default function CarteProjet({ projet, niveau = 3, indice = 0 }) {
  const captures = projet.captures ?? [];
  return (
    <Dossier
      titre={projet.titre}
      sousTitre={projet.tags?.slice(0, 3).join(", ") || projet.annee}
      lien={`/projets/${slugProjet(projet)}`}
      images={[captures[0], projet.image, captures[1]]}
      indice={indice}
      niveau={niveau}
    />
  );
}

export function CarteProjetVide({ niveau = 3, indice = 0 }) {
  return (
    <Dossier
      titre="Projet à venir"
      sousTitre="Techno 1, Techno 2"
      lien={`/projets/${PROJET_EXEMPLE.slug}`}
      indice={indice}
      niveau={niveau}
      vide
    />
  );
}
