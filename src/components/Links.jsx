import Section from "./Section";
import Icone from "./Icone";
import { liens, profil } from "../data";

const COULEURS_LIENS = ["vert", "lavande", "rose", "jaune"];

export default function Links() {
  const cartes = profil.email
    ? [...liens, { nom: "Mail", url: `mailto:${profil.email}`, libelle: profil.email }]
    : liens;

  return (
    <Section
      id="liens"
      titre="Me trouver"
      intro="Pour une opportunité, un projet ou simplement échanger."
      icone="message"
      couleur="lavande"
    >
      <ul className="liens">
        {cartes.map((l, i) => {
          const couleur = COULEURS_LIENS[i % COULEURS_LIENS.length];
          const contenu = (
            <>
              <span className="lien__haut">
                <span className={`pastille pastille--${l.url ? couleur : "sourde"}`}>
                  {l.nom.charAt(0)}
                </span>
                {l.url && (
                  <span className="lien__fleche">
                    <Icone nom="fleche" />
                  </span>
                )}
              </span>
              <span className="lien__nom">{l.nom}</span>
              <span className="lien__libelle">{l.url ? l.libelle : "Lien à ajouter"}</span>
            </>
          );
          const externe = l.url && !l.url.startsWith("mailto:");
          return (
            <li key={l.nom}>
              {l.url ? (
                <a
                  className="carte lien"
                  href={l.url}
                  {...(externe ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  {contenu}
                </a>
              ) : (
                <div className="carte lien lien--vide">{contenu}</div>
              )}
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
