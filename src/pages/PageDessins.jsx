import EnTetePage from "../components/EnTetePage";
import { dessins } from "../data";

// Formats variés pour que la galerie vide ressemble déjà à un mur d'atelier.
const FORMATS_DESSINS = ["3 / 4", "4 / 3", "1 / 1", "4 / 5", "3 / 2", "3 / 4", "1 / 1", "4 / 3", "4 / 5"];

export default function PageDessins() {
  return (
    <div className="page">
      <EnTetePage
        titre="Moi, loin du clavier"
        intro="Dessin et peinture : ce que je fais quand l'écran est éteint."
        icone="crayon"
        couleur="jaune"
      />
      <div className="panneau-rose">
        <div className="galerie">
          {dessins.length > 0
            ? dessins.map((d) => (
                <figure className="cadre" key={d.src}>
                  <div className="cadre__passe">
                    <img src={d.src} alt={d.titre} loading="lazy" />
                  </div>
                  <figcaption>
                    <span className="cadre__titre">{d.titre}</span>
                    {(d.technique || d.annee) && (
                      <span>{[d.technique, d.annee].filter(Boolean).join(", ")}</span>
                    )}
                  </figcaption>
                </figure>
              ))
            : FORMATS_DESSINS.map((format, i) => (
                <figure className="cadre" key={i}>
                  <div className="cadre__passe">
                    <div className="cadre__toile" style={{ aspectRatio: format }} />
                  </div>
                  <figcaption>Dessin à venir</figcaption>
                </figure>
              ))}
        </div>
      </div>
    </div>
  );
}
