'use client'
import Parallax from "./_parallax/Parallax";
import About from "./_pages/About";
import Skill from "./_pages/Skill";
import Projects from "./_pages/Projects";
import Contact from "./_pages/Contact";
import Cover from "./_pages/Cover";

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
