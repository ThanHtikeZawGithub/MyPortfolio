'use client'
import Parallax from "./_parallax/Parallax";
import About from "./about/About";
import Skill from "./Skill";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import Cover from "./cover/Cover";
import Experience from "./experience/Experience";

export const FrontPage = () => {
  return (
    <main className="relative bg-primaryBg dark:bg-gradient-dark">    
      <Cover />
      <About />
      <Experience/>
      <Skill />
      <Projects />
      <Contact />
    </main>
  );
};
