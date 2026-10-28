import Section from "./Section";
import { competences } from "../data";

const COULEURS_COMPETENCES = ["vert", "rose", "jaune", "lavande"];

export default function Skills() {
  return (
    <Section id="competences" titre="Compétences" icone="etincelle" couleur="jaune">
      <div className="competences">
        {competences.map((groupe, i) => (
          <div className="carte competence" key={groupe.groupe}>
            <h3 className="competence__titre">
              <span
                className={`point pastille--${COULEURS_COMPETENCES[i % COULEURS_COMPETENCES.length]}`}
                aria-hidden="true"
              />
              {groupe.groupe}
            </h3>
            {groupe.items.length > 0 ? (
              <ul className="puces">
                {groupe.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="vide-texte">À compléter</p>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
