import EnTetePage from "../components/EnTetePage";
import CarteProjet, { CarteProjetVide } from "../components/CarteProjet";
import { projets } from "../data";

const EMPLACEMENTS_PROJETS = [1, 2, 3, 4, 5, 6];

export default function PageProjets() {
  return (
    <div className="page">
      <EnTetePage
        titre="Projets"
        intro="Tous mes projets. Chaque dossier s'ouvre sur sa page de détails."
        icone="grille"
        couleur="vert"
      />
      <div className="projets">
        {projets.length > 0
          ? projets.map((p, i) => <CarteProjet projet={p} niveau={2} indice={i} key={p.titre} />)
          : EMPLACEMENTS_PROJETS.map((n, i) => <CarteProjetVide niveau={2} indice={i} key={n} />)}
      </div>
    </div>
  );
}
