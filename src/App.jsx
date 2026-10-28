import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BoutonContact from "./components/BoutonContact";
import { FormeDossier } from "./components/CarteProjet";
import GestionDefilement from "./components/GestionDefilement";
import Accueil from "./pages/Accueil";
import PageProjets from "./pages/PageProjets";
import PageProjet from "./pages/PageProjet";
import PageCertificats from "./pages/PageCertificats";
import PageDessins from "./pages/PageDessins";
import PageIntrouvable from "./pages/PageIntrouvable";

export default function App() {
  return (
    <>
      <GestionDefilement />
      <FormeDossier />
      <a className="lien-evitement" href="#contenu">
        Aller au contenu
      </a>
      <Header />
      <main id="contenu">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/projets" element={<PageProjets />} />
          <Route path="/projets/:slug" element={<PageProjet />} />
          <Route path="/certificats" element={<PageCertificats />} />
          <Route path="/loin-du-clavier" element={<PageDessins />} />
          <Route path="*" element={<PageIntrouvable />} />
        </Routes>
      </main>
      <Footer />
      <BoutonContact />
    </>
  );
}
