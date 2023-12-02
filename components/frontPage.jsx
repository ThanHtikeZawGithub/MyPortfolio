'use client'
import Parallax from "./_parallax/Parallax";
import About from "./about/About";
import Skill from "./Skill";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import Cover from "./cover/Cover";

export const FrontPage = () => {
  return (
    <>             
      <Cover />
      <Parallax />
      <About />
      <Skill />
      <Projects />
      <Contact />
    </>
  );
};
