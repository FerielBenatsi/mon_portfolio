import EnTetePage from "../components/EnTetePage";

export default function PageIntrouvable() {
  return (
    <div className="page">
      <EnTetePage
        titre="Page introuvable"
        intro="Cette adresse ne mène à aucune page du portfolio. Le lien au-dessus te ramène à l'accueil."
        icone="etincelle"
        couleur="lavande"
      />
    </div>
  );
}
