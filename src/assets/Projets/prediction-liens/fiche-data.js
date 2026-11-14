// 1. En haut de src/data.js :
import predictionCouverture from "./assets/projets/prediction-liens/couverture.jpg";
import predictionExplorateur from "./assets/projets/prediction-liens/explorateur.jpg";
import predictionResultats from "./assets/projets/prediction-liens/resultats.jpg";
import predictionCourbes from "./assets/projets/prediction-liens/courbes.jpg";
import predictionDistances from "./assets/projets/prediction-liens/distances.jpg";
import predictionStructure from "./assets/projets/prediction-liens/structure.jpg";

// 2. Dans le tableau `projets` :
{
  slug: "prediction-liens",
  titre: "Prédiction de liens",
  description: "Deviner quelles connexions vont apparaître dans un réseau : quatre algorithmes de graphes comparés sur un réseau de chercheurs et sur un réseau de protéines humaines.",
  tags: ["Python", "NumPy", "SciPy", "Graphes", "Algorithmique", "Streamlit", "Bash"],
  image: predictionCouverture,
  github: "",
  annee: "2026 – 2027",
  role: "",
  equipe: "",
  contexte: "Projet de l'UE AAGA (Master 2 STL, Sorbonne Université). Dans un grand réseau, on cherche les paires de sommets pas encore reliées qui vont l'être : de futures collaborations entre chercheurs, ou des interactions entre protéines encore inconnues. Il y a des centaines de milliers, voire des millions de paires possibles pour quelques milliers de vrais liens : tout l'enjeu est de calculer les scores sans tester chaque paire.",
  fonctionnalites: [
    "Quatre mesures implémentées : voisins communs, Adamic-Adar, marche aléatoire avec redémarrage (RWR) et L3, chacune avec une version naïve de référence",
    "Protocole de Liben-Nowell et Kleinberg reproduit sur les co-auteurs arXiv hep-th : apprentissage sur 1994–1996, prédiction des nouvelles collaborations de 1997–1999",
    "Protocole de Kovács et al. (Nature Communications, 2019) sur l'interactome humain HI-II-14 : la moitié des interactions masquées, puis retrouvées",
    "Évaluation en précision et rappel, avec un traitement exact des ex æquo, et courbes précision-rappel",
    "Toutes les expériences relancées par un seul script Bash (CSV et figures), 67 tests unitaires et un rapport en LaTeX",
    "Interface Streamlit : choix du réseau et des algorithmes, structure des réseaux, et dessin du voisinage d'un sommet avec ses bonnes et ses mauvaises prédictions",
  ],
  defis: "Passer à l'échelle : sur les protéines, 8,7 millions de paires candidates pour 6 558 liens à retrouver. Plutôt que de tester chaque paire, les algorithmes partent des sommets intermédiaires et ne visitent que les paires qui ont un score : jusqu'à 54 fois plus rapide que la version naïve, à scores identiques. Résultat : sur les protéines, 19,6 % des 6 558 meilleures prédictions de L3 sont de vraies interactions, 3,8 fois plus qu'Adamic-Adar ; sur le réseau social, Adamic-Adar fait 35 fois mieux que le hasard. L'explication se lit dans les données : 36 % des paires de voisins d'un auteur sont reliées entre elles, contre 3,5 % pour les protéines. Les chercheurs forment des triangles, les protéines non.",
  captures: [predictionExplorateur, predictionResultats, predictionCourbes, predictionDistances, predictionStructure],
},
