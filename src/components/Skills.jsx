import Section from "./Section";
import { competences } from "../data";

const COULEURS_COMPETENCES = ["vert", "rose", "jaune", "lavande"];

// Un item peut être un texte ("React") ou un objet { nom: "Go", enCours: true }.
const lireItem = (item) =>
  typeof item === "string"
    ? { nom: item, enCours: false }
    : { nom: item.nom, enCours: Boolean(item.enCours) };

export default function Skills() {
  const legende = competences.some((g) =>
    g.items.some((item) => lireItem(item).enCours),
  );

  return (
    <Section
      id="competences"
      titre="Compétences"
      icone="etincelle"
      couleur="jaune"
    >
      <div className="competences">
        {competences.map((groupe, i) => {
          const couleur = COULEURS_COMPETENCES[i % COULEURS_COMPETENCES.length];
          return (
            <div
              className="carte competence"
              key={groupe.groupe}
              style={{ "--couleur": `var(--${couleur})` }}
            >
              <h3 className="competence__titre">
                <span
                  className={`point pastille--${couleur}`}
                  aria-hidden="true"
                />
                {groupe.groupe}
              </h3>
              {groupe.items.length > 0 ? (
                <ul className="puces">
                  {groupe.items.map((item) => {
                    const { nom, enCours } = lireItem(item);
                    return (
                      <li
                        key={nom}
                        className={enCours ? "puce--en-cours" : undefined}
                      >
                        {nom}
                        {enCours && (
                          <>
                            <span className="demi-rond" aria-hidden="true" />
                            <span className="sr-only">
                              {" "}
                              (en cours d'apprentissage)
                            </span>
                          </>
                        )}
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <p className="vide-texte">À compléter</p>
              )}
            </div>
          );
        })}
      </div>
      {legende && (
        <p className="competences__legende">
          <span className="demi-rond" aria-hidden="true" />
          en cours d'apprentissage
        </p>
      )}
    </Section>
  );
}
