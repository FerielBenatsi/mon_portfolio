import { useEffect } from "react";
import { profil } from "../data";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Journey from "../components/Journey";
import Links from "../components/Links";

export default function Accueil() {
  useEffect(() => {
    document.title = `${profil.prenom} ${profil.nom} | Portfolio`;
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Links />
    </>
  );
}
