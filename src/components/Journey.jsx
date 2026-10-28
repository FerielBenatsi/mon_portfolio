import Section from "./Section";
import { parcours } from "../data";

const EMPLACEMENTS_PARCOURS = [1, 2, 3];

export default function Journey() {
  return (
    <Section id="parcours" titre="Parcours" icone="chemin" couleur="lavande">
      <div className="carte parcours-carte">
        <ol className="parcours">
          {parcours.length > 0
            ? parcours.map((etape) => (
                <li className="parcours__etape" key={`${etape.periode}-${etape.titre}`}>
                  <p className="parcours__periode">{etape.periode}</p>
                  <div>
                    <h3>{etape.titre}</h3>
                    {etape.lieu && <p className="parcours__lieu">{etape.lieu}</p>}
                    {etape.description && <p className="parcours__desc">{etape.description}</p>}
                  </div>
                </li>
              ))
            : EMPLACEMENTS_PARCOURS.map((n) => (
                <li className="parcours__etape" key={n}>
                  <p className="parcours__periode">Période</p>
                  <div>
                    <h3 className="vide-texte">Formation ou expérience</h3>
                    <p className="parcours__lieu">Établissement ou entreprise</p>
                  </div>
                </li>
              ))}
        </ol>
      </div>
    </Section>
  );
}
