import { profil } from "../data";
import Icone from "./Icone";
import PorteBadge from "./PorteBadge";

export default function About() {
  const { aPropos } = profil;

  return (
    <section id="a-propos" className="section" aria-labelledby="a-propos-titre">
      <div className="section__inner apropos">
        <header className="section__tete apropos__tete">
          <span className="pastille pastille--rose">
            <Icone nom="personne" />
          </span>
          <h2 id="a-propos-titre" className="section__titre">
            À propos
          </h2>
        </header>
        <div className="apropos__badge">
          <PorteBadge />
        </div>
        <div className="carte apropos__texte">
          {aPropos.length > 0 ? (
            aPropos.map((paragraphe, i) => <p key={i}>{paragraphe}</p>)
          ) : (
            <p className="vide-texte">
              Ta présentation ici : ton parcours, ce qui te motive, ce que tu cherches.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
