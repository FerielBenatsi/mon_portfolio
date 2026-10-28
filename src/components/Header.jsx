import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { profil } from "../data";
import { Etoile } from "./Formes";

// "ancre" : section de l'accueil · "page" : page à part
const NAVIGATION = [
  { to: "/#a-propos", label: "À propos", type: "ancre" },
  { to: "/#competences", label: "Compétences", type: "ancre" },
  { to: "/projets", label: "Projets", type: "page" },
  { to: "/#parcours", label: "Parcours", type: "ancre" },
  { to: "/certificats", label: "Certificats", type: "page" },
  { to: "/loin-du-clavier", label: "Loin du clavier", type: "page" },
];

export default function Header() {
  const [ouvert, setOuvert] = useState(false);
  const fermer = () => setOuvert(false);

  return (
    <header className="entete">
      <div className="entete__inner">
        <Link className="entete__logo" to="/" onClick={() => { fermer(); window.scrollTo(0, 0); }}>
          <Etoile className="entete__marque" />
          {profil.prenom} {profil.nom}
        </Link>
        <nav
          id="nav-principale"
          className={ouvert ? "nav nav--ouverte" : "nav"}
          aria-label="Navigation principale"
        >
          <ul>
            {NAVIGATION.map((item) => (
              <li key={item.to}>
                {item.type === "page" ? (
                  <NavLink to={item.to} onClick={fermer} className={({ isActive }) => (isActive ? "actif" : undefined)}>
                    {item.label}
                  </NavLink>
                ) : (
                  <Link to={item.to} onClick={fermer}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <button
          type="button"
          className="entete__menu"
          aria-expanded={ouvert}
          aria-controls="nav-principale"
          onClick={() => setOuvert((o) => !o)}
        >
          {ouvert ? "Fermer" : "Menu"}
        </button>
      </div>
    </header>
  );
}
