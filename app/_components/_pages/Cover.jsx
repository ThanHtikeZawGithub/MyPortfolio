"use client";

import { motion } from "framer-motion";
import { LinkArrow, Pattern1, Profile } from "@/app/Icons";
import Link from "next/link";
import CoverImage from "../Cover-image";

const textVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 1,
    },
  },
};

const Cover = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:gap-24">
      <motion.div
        className="mx-auto py-2 flex flex-col justify-center items-center md:items-start max-w-xl md:max-w-3xl"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        <motion.p
          className="font-poppin text-xs font-bold text-gray-600 dark:text-primary md:text-sm mb-1 md:mb-4"
          variants={textVariants}
        >
          Hi. I'm
        </motion.p>
        <h2
          className="text-2xl md:text-5xl font-bold font-poppin text-dark dark:text-primary z-20"
          variants={textVariants}
        >
          FRONTEND<br/> 
          DEVELOPER
        </h2>
        <Pattern1 className="hidden md:absolute md:-bottom-12 md:right-12 md:w-100 md:h-100 dark:invert" />
        <motion.p
          className="text-zinc-600 text-center md:text-start dark:text-primary font-poppin my-1 md:my-4 text-xs font-medium max-w-xs flex-wrap md:text-sm "
          variants={textVariants}
        >
          Dedicated to craft ideas into solid applications, Always learning new
          things and developing creative ideas
        </motion.p>
        <motion.div className="flex items-center my-1 md:my-2">
          <Link
            href={"/resume.pdf"}
            className="btn btn-small md:btn flex items-center justify-center text-xs tracking-widest font-semibold dark:text-primary"
            download={true}
          >
            Resume
            <LinkArrow className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </motion.div>
      <div className="h-[250px] md:h-[300px] bg-fixed bg-cover relative flex items-center justify-center">
        <CoverImage />
      </div>
    </div>
  );
};

export default Cover;
