import { profil } from "../data";

export default function Footer() {
  return (
    <footer className="pied">
      <p>
        © {new Date().getFullYear()} {profil.prenom} {profil.nom}
      </p>
      <a href="#contenu">Retour en haut</a>
    </footer>
  );
}
