import EnTetePage from "../components/EnTetePage";
import Icone from "../components/Icone";
import { certificats } from "../data";

const EMPLACEMENTS_CERTIFICATS = [1, 2, 3, 4, 5, 6];

export default function PageCertificats() {
  return (
    <div className="page">
      <EnTetePage
        titre="Certificats"
        intro="Formations suivies et certifications obtenues."
        icone="sceau"
        couleur="rose"
      />
      <div className="certifs">
        {certificats.length > 0
          ? certificats.map((c) => (
              <article className="carte certif" key={c.titre}>
                <div className="certif__visuel">
                  {c.image ? (
                    <img src={c.image} alt={`Certificat ${c.titre}`} />
                  ) : (
                    <span className="pastille pastille--rose">
                      <Icone nom="sceau" />
                    </span>
                  )}
                </div>
                <div className="certif__contenu">
                  <h2 className="certif__titre">{c.titre}</h2>
                  <p className="certif__meta">
                    {c.organisme}
                    {c.date && <span className="certif__date">{c.date}</span>}
                  </p>
                  {c.lien && (
                    <a className="bouton bouton--contour bouton--petit" href={c.lien} target="_blank" rel="noreferrer">
                      Voir le certificat
                    </a>
                  )}
                </div>
              </article>
            ))
          : EMPLACEMENTS_CERTIFICATS.map((n) => (
              <div className="carte certif certif--vide" key={n}>
                <div className="certif__visuel">
                  <span className="pastille pastille--sourde">
                    <Icone nom="sceau" />
                  </span>
                </div>
                <div className="certif__contenu">
                  <h2 className="certif__titre vide-texte">Certificat à ajouter</h2>
                  <p className="certif__meta">
                    Organisme <span className="certif__date">Date</span>
                  </p>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}
