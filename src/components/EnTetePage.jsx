import { useEffect } from "react";
import { Link } from "react-router-dom";
import Icone from "./Icone";
import { profil } from "../data";

const RETOUR_ACCUEIL = { to: "/", label: "Retour à l'accueil" };

export default function EnTetePage({ titre, intro, icone, couleur = "rose", retour = RETOUR_ACCUEIL }) {
  useEffect(() => {
    document.title = `${titre} | ${profil.prenom} ${profil.nom}`;
  }, [titre]);

  return (
    <header className="page__tete">
      <Link className="retour" to={retour.to}>
        <span className="retour__rond">
          <Icone nom="retour" />
        </span>
        {retour.label}
      </Link>
      <div className="page__ligne">
        <span className={`pastille pastille--grande pastille--${couleur}`}>
          <Icone nom={icone} />
        </span>
        <h1 className="page__titre">{titre}</h1>
      </div>
      {intro && <p className="page__intro">{intro}</p>}
    </header>
  );
}
