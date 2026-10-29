import { Link } from "react-router-dom";
import EnTetePage from "../components/EnTetePage";
import Icone from "../components/Icone";
import { certificats } from "../data";

// Marmite sur le feu, affichée tant qu'il n'y a aucun certificat.
function Marmite() {
  return (
    <svg className="marmite" viewBox="0 0 200 190" aria-hidden="true">
      <g
        className="marmite__vapeur"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      >
        <path d="M78 68c-10-14 10-22 0-38" />
        <path d="M100 62c-10-16 10-24 0-42" />
        <path d="M122 68c-10-14 10-22 0-38" />
      </g>
      <g className="marmite__couvercle">
        <rect
          x="90"
          y="70"
          width="20"
          height="11"
          rx="5.5"
          fill="var(--lavande)"
        />
        <path d="M50 96q50-34 100 0z" fill="var(--lavande)" />
        <rect
          x="44"
          y="93"
          width="112"
          height="9"
          rx="4.5"
          fill="var(--lavande)"
        />
      </g>
      <rect x="34" y="112" width="22" height="11" rx="5.5" fill="#e88ac4" />
      <rect x="144" y="112" width="22" height="11" rx="5.5" fill="#e88ac4" />
      <path d="M52 104h96v38q0 20-20 20H72q-20 0-20-20z" fill="var(--rose)" />
      <rect x="52" y="120" width="96" height="7" fill="rgba(26,18,25,0.12)" />
      <g className="marmite__flammes" fill="var(--jaune)">
        <path d="M78 186c-7 0-10-6-6-13l6-9 6 9c4 7 1 13-6 13z" />
        <path d="M100 186c-8 0-12-7-7-15l7-11 7 11c5 8 1 15-7 15z" />
        <path d="M122 186c-7 0-10-6-6-13l6-9 6 9c4 7 1 13-6 13z" />
      </g>
    </svg>
  );
}

export default function PageCertificats() {
  return (
    <div className="page">
      <EnTetePage
        titre="Certificats"
        intro="Formations suivies et certifications obtenues."
        icone="sceau"
        couleur="rose"
      />

      {certificats.length > 0 ? (
        <div className="certifs">
          {certificats.map((c) => (
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
                  <a
                    className="bouton bouton--contour bouton--petit"
                    href={c.lien}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Voir le certificat
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="carte mijote">
          <Marmite />
          <h2 className="mijote__titre">Ça mijote…</h2>
          <p className="mijote__texte">
            Mes premiers certificats sont sur le feu. Ils seront servis ici très
            bientôt.
          </p>
          <Link className="bouton bouton--rose" to="/projets">
            Voir mes projets en attendant
          </Link>
        </div>
      )}
    </div>
  );
}
