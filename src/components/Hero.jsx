import { Link } from "react-router-dom";
import { profil } from "../data";
import Icone from "./Icone";
import { Etoile, Soleil, Asterisque, Gribouillis, Arc } from "./Formes";

const COULEURS_ETIQUETTES = ["vert", "rose", "jaune", "lavande"];

export default function Hero() {
  const etiquettes = profil.etiquettes ?? ["Développeuse", "Designer"];

  return (
    <section id="accueil" className="hero" aria-label="Présentation">
      <div className="hero__decor" aria-hidden="true">
        <Gribouillis className="deco deco--gribouillis" />
        <Arc className="deco deco--arc" />
        <Etoile className="deco deco--etoile-a" />
        <Etoile className="deco deco--etoile-b" />
        <Etoile className="deco deco--etoile-c" />
        <Asterisque className="deco deco--asterisque" />
        <Soleil className="deco deco--soleil" />
        <span className="deco deco--point-a" />
        <span className="deco deco--point-b" />
      </div>

      <div className="hero__inner">
        <ul className="etiquettes" aria-label="En bref">
          {etiquettes.map((texte, i) => (
            <li
              key={texte}
              className={`etiquette etiquette--${COULEURS_ETIQUETTES[i % COULEURS_ETIQUETTES.length]}`}
            >
              {texte}
            </li>
          ))}
        </ul>

        <h1 className="hero__nom">
          <span className="txt-rose">{profil.prenom}</span> {profil.nom}
          <br />
          <span className="txt-vert">code</span> & dessine
        </h1>

        <div className="hero__actions">
          <Link className="bouton bouton--rose" to="/#projets">
            Voir mes projets
          </Link>
          {profil.cv && (
            <a
              className="bouton bouton--contour"
              href={profil.cv}
              download="CV_Feriel_Benatsi.pdf"
            >
              <Icone nom="telecharger" />
              Télécharger mon CV
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
