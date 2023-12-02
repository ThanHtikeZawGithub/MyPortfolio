import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/Info";
import { motion, useScroll, useSpring } from "framer-motion";

const Projects = () => {
  const ref = useRef();
  const {scrollYProgress} = useScroll({target:ref, offset:["end end", "start start"]})

  const scaleX = useSpring(scrollYProgress,{
    stiffness: 100,
    damping: 30,
  })

  return (
    <div
      className="relative"
      id="projects"
      ref={ref}
    >
      <motion.div 
      className="h-1 bg-gradient-dark dark:bg-primaryBg top-[98%] md:top-[14%] sticky pt-4"
      style={{scaleX}}
      ></motion.div>
      {projects.map((project,i) => (
          <div key={i}>
          <ProjectCard
            type={project.type}
            title={project.title}
            summary={project.summary}
            description={project.description}
            img={project.img}
            link={project.link}
            github={project.github}
          />
          </div>
         ))}
    </div>
  );
};

export default Projects;
