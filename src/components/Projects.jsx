import { Link } from "react-router-dom";
import Section from "./Section";
import CarteProjet, { CarteProjetVide } from "./CarteProjet";
import { projets } from "../data";

// Nombre de projets montrés sur l'accueil (une rangée de dossiers) ; les autres sont sur /projets.
const LIMITE_ACCUEIL = 3;
const EMPLACEMENTS_ACCUEIL = [1, 2, 3];

export default function Projects() {
  return (
    <Section
      id="projets"
      titre="Projets"
      icone="grille"
      couleur="vert"
      action={
        <Link className="bouton bouton--rose bouton--petit" to="/projets">
          Voir plus
        </Link>
      }
    >
      <div className="projets">
        {projets.length > 0
          ? projets.slice(0, LIMITE_ACCUEIL).map((p, i) => <CarteProjet projet={p} indice={i} key={p.titre} />)
          : EMPLACEMENTS_ACCUEIL.map((n, i) => <CarteProjetVide indice={i} key={n} />)}
      </div>
    </Section>
  );
}
