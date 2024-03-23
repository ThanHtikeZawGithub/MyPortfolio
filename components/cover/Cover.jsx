"use client";

// import { motion } from "framer-motion";
import { LinkArrow, Pattern1, Profile } from "@/lib/Icons";
import Link from "next/link";
import CoverImage from "./Cover-image";
import Typewriter from "typewriter-effect";
import Image from "next/image";

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
    <section id="home" className="w-full overflow-hidden">
      <div className="flex flex-col bg-primaryBg dark:bg-gradient-dark z-20 px-4 lg:px-32 2xl:px-64 items-start justify-start w-full">
        <div
          className="mx-auto py-4 flex w-full flex-col justify-center items-center md:items-start"
          // variants={textVariants}
          // initial="initial"
          // animate="animate"
        >
          <p
            className="font-poppin z-20 text-base tracking-wider leading-8 font-semibold text-black dark:text-primary md:text-3xl mb-1 md:mb-4"
            // variants={textVariants}
          >
            Than Htike Zaw
          </p>
          <h2
            className="text-3xl md:grid md:grid-cols-2 md:justify-start md:items-start md:text-start md:text-4xl font-bold font-poppin tracking-wide text-black dark:text-primary z-20"
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
            className="text-black z-20 text-center md:mt-6 tracking-wider px-4 pb-2 md:px-0 md:pb-0 md:text-start dark:text-primary font-poppin my-1 md:my-4 text-xs font-medium flex-wrap md:text-base md:max-w-xl"
            // variants={textVariants}
          >
            Dedicated to craft ideas into solid applications, Always learning
            new things and developing creative ideas
          </p>
          <div className="flex items-center justify-center gap-4 my-1 md:my-2">
            <a
              href="#projects"
              className="btn-small btn md:btn flex items-center justify-center text-xs tracking-widest font-semibold text-black dark:text-primary"
            >
              See My Projects
              <LinkArrow className="ml-2 w-2 h-2 md:w-4 md:h-4" />
            </a>
            <a
              href="#contact"
              className="btn-small btn md:btn flex items-center justify-center text-xs tracking-widest font-semibold text-black dark:text-primary"
            >
              Hire Me &rarr;
            </a>
          </div>
        </div>
        {/* <div className="bg-cover relative flex h-auto w-full"> */}
        {/* <CoverImage /> */}
        {/* <Image
          src="/assets/profile.png"
          alt="background"
          priority
          width={200}
          height={100}
          className="z-20 relative"
        />
      </div> */}
      </div>
    </section>
  );
};

export default Cover;
