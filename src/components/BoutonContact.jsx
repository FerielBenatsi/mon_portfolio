import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icone from "./Icone";

// Bouton flottant, visible pendant le défilement.
// Il s'efface quand la section contact est déjà à l'écran.
export default function BoutonContact() {
  const { pathname } = useLocation();
  const [cache, setCache] = useState(false);

  useEffect(() => {
    const contact = document.getElementById("liens");
    if (!contact || !("IntersectionObserver" in window)) {
      setCache(false);
      return undefined;
    }
    const observateur = new IntersectionObserver(
      ([entree]) => setCache(entree.isIntersecting),
      { threshold: 0.15 }
    );
    observateur.observe(contact);
    return () => observateur.disconnect();
  }, [pathname]);

  return (
    <Link
      to="/#liens"
      className={cache ? "contact-flottant contact-flottant--cache" : "contact-flottant"}
      aria-hidden={cache || undefined}
      tabIndex={cache ? -1 : undefined}
    >
      <Icone nom="message" />
      Me contacter
    </Link>
  );
}
