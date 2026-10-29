// Petites icônes au trait, dessinées à la main (24 × 24).
const TRACES = {
  grille: (
    <>
      <rect x="4" y="4" width="7" height="7" rx="2" />
      <rect x="13" y="4" width="7" height="7" rx="2" />
      <rect x="4" y="13" width="7" height="7" rx="2" />
      <rect x="13" y="13" width="7" height="7" rx="2" />
    </>
  ),
  sceau: (
    <>
      <circle cx="12" cy="10" r="6" />
      <path d="M9.5 10l1.8 1.8 3.5-3.3" />
      <path d="M8.6 15.2 7.3 21l4.7-2.4 4.7 2.4-1.3-5.8" />
    </>
  ),
  crayon: (
    <>
      <path d="M15.5 4.5l4 4L9 19H5v-4z" />
      <path d="M13.5 6.5l4 4" />
    </>
  ),
  message: (
    <>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
      <path d="M4.5 7.5l7.5 5.5 7.5-5.5" />
    </>
  ),
  personne: (
    <>
      <circle cx="12" cy="8.5" r="3.5" />
      <path d="M5 19.5c1.2-3.5 4-5 7-5s5.8 1.5 7 5" />
    </>
  ),
  etincelle: (
    <path d="M12 4c.7 5 2.9 7.3 8 8-5.1.7-7.3 2.9-8 8-.7-5.1-2.9-7.3-8-8 5.1-.7 7.3-3 8-8z" />
  ),
  chemin: (
    <>
      <path d="M6 21V4" />
      <path d="M6 4h11l-2.5 4L17 12H6" />
    </>
  ),
  fleche: (
    <>
      <path d="M8 16 16 8" />
      <path d="M9.5 8H16v6.5" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  retour: <path d="M14.5 6.5 9 12l5.5 5.5" />,
  telecharger: (
    <>
      <path d="M12 4v11" />
      <path d="M7.5 10.5 12 15l4.5-4.5" />
      <path d="M5 19h14" />
    </>
  ),
};

export default function Icone({ nom }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {TRACES[nom]}
    </svg>
  );
}
