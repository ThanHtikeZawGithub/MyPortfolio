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
    <main className="relative">
      <div className="absolute h-screen w-full bg-cover left-0 top-0 bg-fixed" style={{backgroundImage:'url(./assets/bg_cover.png)'}}>
        </div>    
      <Cover />
      <About />
      <Experience/>
      <Skill />
      <Projects />
      <Contact />
    </main>
  );
};
