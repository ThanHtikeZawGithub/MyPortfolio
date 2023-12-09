"use client";

// import { motion } from "framer-motion";
import { LinkArrow, Pattern1, Profile } from "@/lib/Icons";
import Link from "next/link";
import CoverImage from "./Cover-image";
import Typewriter from "typewriter-effect";

// const textVariants = {
//   initial: {
//     x: -100,
//     opacity: 0,
//   },
//   animate: {
//     x: 0,
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//       duration: 1,
//     },
//   },
// };

const Cover = () => {
  return (
    <section id="home" className="w-full bg-primaryBg dark:bg-gradient-dark overflow-hidden max-w-screen">
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24">
      <div
        className="mx-auto py-4 flex flex-col justify-center items-center md:items-start max-w-xl md:max-w-3xl"
        // variants={textVariants}
        // initial="initial"
        // animate="animate"
      >
        <p
          className="font-poppin text-xs font-bold text-gray-600 dark:text-primary md:text-sm mb-1 md:mb-4"
          // variants={textVariants}
        >
          Hi. I'm 
        </p>
        <h2
          className="text-3xl w-full text-center md:text-start md:text-5xl font-extrabold font-poppin tracking-tight text-slate-800 dark:text-primary z-20"
          // variants={textVariants}
        >
          <Typewriter
            options={{
              strings: ["FRONTEND", "FULLSTACK"],
              autoStart: true,
              loop: true,
              
            }}
          />
          <div>DEVELOPER.</div>
        </h2>
        <Pattern1 className="hidden md:absolute md:-bottom-12 md:right-12 md:w-100 md:h-100 dark:invert" />
        <p
          className="text-zinc-600 text-center px-4 pb-2 md:px-0 md:pb-0 md:text-start dark:text-primary font-poppin my-1 md:my-4 text-xs font-medium max-w-xs flex-wrap md:text-sm "
          // variants={textVariants}
        >
          Dedicated to craft ideas into solid applications, Always learning new
          things and developing creative ideas
        </p>
        <div className="flex items-center justify-center gap-4 my-1 md:my-2">
          <a
            href="http://thzwriteblogs.rf.gd"
            className="btn-small btn md:btn flex items-center justify-center text-xs tracking-widest font-semibold dark:text-primary"
          >
            Read My Blogs
            <LinkArrow className="ml-2 w-2 h-2 md:w-4 md:h-4" />
          </a>
          <a href="#contact"
          className="btn-small btn md:btn flex items-center justify-center text-xs tracking-widest font-semibold dark:text-primary"
          >
            Hire Me &rarr;
          </a>
        </div>
      </div>
      <div className="h-[250px] md:h-[300px] bg-fixed bg-cover relative flex items-center justify-center">
        <CoverImage />
      </div>
    </div>
    </section>
  );
};

export default Cover;
