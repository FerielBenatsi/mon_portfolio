import { Link, useParams } from "react-router-dom";
import EnTetePage from "../components/EnTetePage";
import { trouverProjet } from "../outils";

const RETOUR_PROJETS = { to: "/projets", label: "Tous les projets" };

export default function PageProjet() {
  const { slug } = useParams();
  const projet = trouverProjet(slug);

  if (!projet) {
    return (
      <div className="page">
        <EnTetePage
          titre="Projet introuvable"
          intro="Ce projet n'existe pas ou a changé d'adresse."
          icone="grille"
          couleur="lavande"
          retour={RETOUR_PROJETS}
        />
      </div>
    );
  }

  // Le projet d'exemple affiche ses textes comme des emplacements à remplir.
  const texte = projet.exemple ? "vide-texte" : undefined;
  const fiche = [
    { terme: "Année", valeur: projet.annee },
    { terme: "Rôle", valeur: projet.role },
    { terme: "Équipe", valeur: projet.equipe },
  ].filter((ligne) => ligne.valeur);
  const captures = projet.captures ?? [];
  const aDesLiens = projet.demo || projet.github || projet.exemple;

  return (
    <article className="page projet-detail">
      <EnTetePage
        titre={projet.titre}
        intro={projet.description}
        icone="grille"
        couleur="vert"
        retour={RETOUR_PROJETS}
      />

      {aDesLiens && (
        <div className="projet-detail__actions">
          {projet.exemple ? (
            <>
              <span className="bouton bouton--rose est-inactif">Voir en ligne</span>
              <span className="bouton bouton--contour est-inactif">Code source</span>
            </>
          ) : (
            <>
              {projet.demo && (
                <a className="bouton bouton--rose" href={projet.demo} target="_blank" rel="noreferrer">
                  Voir en ligne
                </a>
              )}
              {projet.github && (
                <a className="bouton bouton--contour" href={projet.github} target="_blank" rel="noreferrer">
                  Code source
                </a>
              )}
            </>
          )}
        </div>
      )}

      <div className="projet-detail__couverture">
        {projet.image ? (
          <img src={projet.image} alt={`Aperçu de ${projet.titre}`} />
        ) : (
          <span className="vide-etiquette">Image de couverture</span>
        )}
      </div>

      <div className="projet-detail__corps">
        <div className="projet-detail__texte">
          {projet.contexte && (
            <section className="projet-detail__bloc">
              <h2>Le contexte</h2>
              <p className={texte}>{projet.contexte}</p>
            </section>
          )}
          {projet.fonctionnalites?.length > 0 && (
            <section className="projet-detail__bloc">
              <h2>Fonctionnalités</h2>
              <ul className="liste-fonctions">
                {projet.fonctionnalites.map((f) => (
                  <li key={f} className={texte}>
                    {f}
                  </li>
                ))}
              </ul>
            </section>
          )}
          {projet.defis && (
            <section className="projet-detail__bloc">
              <h2>Défis et apprentissages</h2>
              <p className={texte}>{projet.defis}</p>
            </section>
          )}
        </div>

        {(fiche.length > 0 || projet.tags?.length > 0) && (
          <aside className="carte fiche" aria-label="Fiche du projet">
            <dl>
              {fiche.map((ligne) => (
                <div key={ligne.terme}>
                  <dt>{ligne.terme}</dt>
                  <dd className={texte}>{ligne.valeur}</dd>
                </div>
              ))}
              {projet.tags?.length > 0 && (
                <div>
                  <dt>Technologies</dt>
                  <dd>
                    <ul className="puces">
                      {projet.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              )}
            </dl>
          </aside>
        )}
      </div>

      {(captures.length > 0 || projet.exemple) && (
        <section className="projet-detail__bloc projet-detail__captures">
          <h2>Captures d'écran</h2>
          <div className="captures">
            {captures.length > 0
              ? captures.map((src, i) => (
                  <figure className="capture" key={src}>
                    <img src={src} alt={`${projet.titre}, capture ${i + 1}`} loading="lazy" />
                  </figure>
                ))
              : [1, 2].map((n) => <div className="capture capture--vide" key={n} />)}
          </div>
        </section>
      )}

      <div className="projet-detail__fin">
        <Link className="bouton bouton--contour" to="/projets">
          Voir tous les projets
        </Link>
      </div>
    </article>
  );
}
