import Icone from "./Icone";

// `action` : un bouton facultatif aligné à droite du titre.
export default function Section({ id, titre, intro, icone, couleur = "vert", action, children }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-titre`}>
      <div className="section__inner">
        <header className="section__tete">
          {icone && (
            <span className={`pastille pastille--${couleur}`}>
              <Icone nom={icone} />
            </span>
          )}
          <h2 id={`${id}-titre`} className="section__titre">
            {titre}
          </h2>
          {action && <div className="section__action">{action}</div>}
          {intro && <p className="section__intro">{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
