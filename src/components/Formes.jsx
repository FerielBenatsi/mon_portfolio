// Formes décoratives de l'accueil (étoiles, soleil, astérisque, traits).

export function Etoile({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 0C12.9 7.6 16.4 11.1 24 12 16.4 12.9 12.9 16.4 12 24 11.1 16.4 7.6 12.9 0 12 7.6 11.1 11.1 7.6 12 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Soleil({ className }) {
  const branches = 14;
  const points = Array.from({ length: branches * 2 }, (_, i) => {
    const rayon = i % 2 === 0 ? 50 : 37;
    const angle = (Math.PI * i) / branches - Math.PI / 2;
    return `${(50 + rayon * Math.cos(angle)).toFixed(2)},${(50 + rayon * Math.sin(angle)).toFixed(2)}`;
  }).join(" ");
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
      <polygon points={points} fill="currentColor" strokeLinejoin="round" />
    </svg>
  );
}

export function Asterisque({ className }) {
  return (
    <svg className={className} viewBox="0 0 40 40" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="5" strokeLinecap="round">
        <path d="M20 4v32" />
        <path d="M6.1 12l27.8 16" />
        <path d="M6.1 28l27.8-16" />
      </g>
    </svg>
  );
}

export function Gribouillis({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 160 110"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M2 84C30 66 70 44 128 16" />
      <path d="M4 96C40 70 86 46 152 14" />
      <path d="M10 104C48 76 92 54 156 30" />
      <path d="M24 106C60 86 104 64 150 48" />
    </svg>
  );
}

export function Arc({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M116 4C64 40 32 90 42 140c6 32 40 50 76 56" />
      <path d="M118 22C80 52 58 98 66 140" />
    </svg>
  );
}
