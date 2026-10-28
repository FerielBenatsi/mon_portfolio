import { profil } from "../data";
import Icone from "./Icone";
import { Etoile, Soleil } from "./Formes";

// Attache métallique du cordon (embout, anneau, pince).
function Attache({ className }) {
  return (
    <svg className={className} viewBox="0 0 60 122" aria-hidden="true">
      <defs>
        <linearGradient id="metal" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#85858c" />
          <stop offset="0.35" stopColor="#f4f4f6" />
          <stop offset="0.6" stopColor="#c6c6cc" />
          <stop offset="1" stopColor="#77777e" />
        </linearGradient>
      </defs>
      <rect x="9" y="0" width="42" height="26" rx="4" fill="url(#metal)" />
      <rect x="9" y="19" width="42" height="2" fill="rgba(0,0,0,0.18)" />
      <circle cx="30" cy="42" r="11" fill="none" stroke="url(#metal)" strokeWidth="4" />
      <rect x="25" y="51" width="10" height="10" rx="2" fill="url(#metal)" />
      <rect x="18" y="59" width="24" height="40" rx="6" fill="url(#metal)" />
      <rect x="24.5" y="67" width="11" height="22" rx="3" fill="#2a2a30" />
      <rect x="21" y="97" width="18" height="25" rx="3" fill="url(#metal)" />
    </svg>
  );
}

export default function PorteBadge() {
  const accroche = profil.badge?.accroche ?? "Enchantée,";
  const departement = profil.badge?.departement ?? profil.titre;

  return (
    <div className="porte-badge">
      <div className="porte-badge__cordon" aria-hidden="true" />
      <div className="porte-badge__balancier">
        <Attache className="porte-badge__attache" />
        <div className="badge">
          <span className="badge__rond badge__rond--a" aria-hidden="true" />
          <span className="badge__rond badge__rond--b" aria-hidden="true" />
          <span className="badge__rond badge__rond--c" aria-hidden="true" />
          <span className="badge__fente" aria-hidden="true" />

          <p className="badge__accroche">{accroche}</p>
          <div className="badge__photo">
            {profil.photo ? (
              <img src={profil.photo} alt={`Portrait de ${profil.prenom}`} />
            ) : (
              <span className="badge__photo-vide">
                <Icone nom="personne" />
                Ta photo
              </span>
            )}
          </div>
          <p className="badge__nom">
            <span className="etiquette etiquette--encre badge__je-suis">je suis</span>
            {profil.prenom}
          </p>
          <p className="badge__departement">
            <span className="etiquette etiquette--vert">département :</span>
            <span className="etiquette etiquette--jaune">{departement}</span>
          </p>
        </div>
      </div>
      <Soleil className="porte-badge__soleil" />
      <Etoile className="porte-badge__etoile" />
    </div>
  );
}
