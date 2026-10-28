import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// À chaque navigation : défile jusqu'à l'ancre (#projets…) si elle existe,
// sinon remonte en haut de la nouvelle page.
export default function GestionDefilement() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      const cible = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (cible) {
        requestAnimationFrame(() => cible.scrollIntoView());
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash, key]);

  return null;
}
