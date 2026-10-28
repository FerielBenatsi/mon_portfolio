# Portfolio — Feriel Benatsi

Squelette Vite + React, thème sombre avec accents rose, vert, jaune et lavande.

## Lancer

```bash
npm install
npm run dev
```

## Remplir le contenu

Tout se passe dans `src/data.js` : profil, liens, compétences, projets,
parcours, certificats et dessins. Un tableau vide affiche des emplacements
« à venir » ; dès qu'il contient un élément, la vraie carte s'affiche.

Les images se rangent dans `public/` :

- `public/dessins/` pour la section « Moi, loin du clavier »
- `public/certificats/` pour les PDF ou images de certificats
- `public/projets/` pour les aperçus de projets

Puis on les référence sans `public` : `"/dessins/portrait.jpg"`.

Pour le badge de la section À propos, une photo détourée (PNG à fond
transparent) donne le meilleur rendu : elle se pose directement sur la carte.
Son texte (« Enchantée, », département) se règle dans `profil.badge`.

Chaque projet s'affiche comme un dossier en verre dépoli. Les feuilles qui
en dépassent montrent `image` (au centre) et les deux premières `captures`
(sur les côtés) ; sans images, elles affichent des motifs colorés.

Tant que `projets` est vide, les boutons « Voir les détails » ouvrent
`/projets/exemple`, un modèle de page de détails à remplir.

## Pages

- `/` : accueil (présentation, compétences, 3 projets, parcours, contact)
- `/projets` : tous les projets
- `/projets/:slug` : la page de détails d'un projet (ex. `/projets/pulse`)
- `/certificats` : tous les certificats
- `/loin-du-clavier` : la galerie de dessins

Le routage passe par `react-router-dom`. Pour Netlify, le fichier
`public/_redirects` renvoie toutes les adresses vers `index.html`,
sinon un rafraîchissement sur `/certificats` donnerait une erreur 404.

## Structure

```
src/
  data.js                    contenu du site
  outils.js                  adresse (slug) d'un projet, projet d'exemple
  index.css                  palette, typographie, mise en page
  main.jsx                   point d'entrée (BrowserRouter)
  App.jsx                    en-tête, routes, pied de page, bouton flottant
  pages/
    Accueil.jsx
    PageProjets.jsx          tous les projets
    PageProjet.jsx           détails d'un projet
    PageCertificats.jsx
    PageDessins.jsx
    PageIntrouvable.jsx      page 404
  components/
    Header.jsx               navigation (ancres + pages)
    Hero.jsx                 accueil
    PorteBadge.jsx           badge « Enchantée, je suis… » avec cordon (À propos)
    About.jsx, Skills.jsx, Projects.jsx, Journey.jsx, Links.jsx
    CarteProjet.jsx          projet en dossier de verre (accueil + page Projets)
    Section.jsx              gabarit des sections de l'accueil
    EnTetePage.jsx           en-tête des pages (retour, titre, intro)
    BoutonContact.jsx        bouton « Me contacter » flottant
    GestionDefilement.jsx    défilement vers les ancres entre les pages
    Icone.jsx, Formes.jsx    icônes et formes décoratives
    Footer.jsx
```
