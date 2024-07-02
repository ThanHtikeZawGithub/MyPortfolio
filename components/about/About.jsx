"use client";
import React from "react";
import { experience, myAbout } from "../../lib/Info";
import AboutCard from "./AboutCard";
import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import Image from "next/image";

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-100%",
    transition: {
      repeat: Infinity,
      duration: 20,
    },
  },
};

const About = () => {
  return (
    <section
      className="bg-primaryBg h-full md:h-screen py-14 dark:bg-gradient-dark relative flex flex-col md:mx-auto"
      id="about"
    >
      <div className="flex flex-col md:grid md:grid-cols-2 justify-center w-full items-center max-w-[1200px] h-full gap-4 md:gap-6 relative">
        <div className="flex flex-col md:pt-4 items-center justify-center md:items-start md:justify-start px-4 md:pl-8 md:gap-3 md:flex-1">
          <div className="">
            <p className="text-dark dark:text-primary text-sm md:text-base first-letter:text-2xl font-medium font-poppin text-start">
              Currently working as remote fullstack developer at GENKI SYSTEM.
            </p>
            <p className="text-dark dark:text-primary text-sm md:text-base first-letter:text-2xl font-medium font-poppin text-start md:text-justify">
              I’m a fast-learner and self-taught developer with the help of
              youtube videos, documents and some learning platforms.
            </p>
            <p className="text-dark dark:text-primary text-sm md:text-base first-letter:text-2xl font-medium font-poppin text-start md:text-justify">
              Originally a mechanical engineer, break university as a final year
              student and started my learning journey on programming during
              COVID and C**p. Now I’m enjoying my career and passing 1+ year of
              professional working experience.
            </p>
          </div>
          <div className="flex items-center justify-center gap-6 mt-4">
            <div className="w-20 h-20 md:w-32 md:h-32 flex flex-col text-slate-800 dark:text-slate-800 font-poppin items-center justify-center rounded-full bg-slate-100 dark:bg-primaryBg">
              <div className="font-semibold font-mono text-2xl md:text-5xl">
                <AnimatedCounter from={0} to={10} />+
              </div>
              <div className="text-xs md:text-lg font-medium mt-1">
                projects
              </div>
            </div>
            <div className="w-20 h-20 md:w-32 md:h-32 flex flex-col text-slate-800 dark:text-slate-800 items-center justify-center rounded-full bg-slate-100 dark:bg-primaryBg">
              <div className="font-bold text-2xl font-mono md:text-5xl">1+</div>
              <div className="text-xs md:text-lg font-medium mt-1">
                years exp
              </div>
            </div>
            <div className="w-20 h-20 md:w-32 md:h-32 flex flex-col text-slate-800 dark:text-slate-800 items-center justify-center rounded-full bg-slate-100 dark:bg-primaryBg">
              <Image
                src={"/assets/nextjs.png"}
                alt="nextjs"
                height={50}
                width={50}
                className="w-8 h-8 md:w-12 md:h-12"
              />
              <div className="text-xs md:text-lg font-medium mt-1">
                favorite
              </div>
            </div>
          </div>
          {/* <div>
            <About_project />
          </div> */}
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="relative overflow-hidden group cursor-pointer">
            <div className="absolute h-full flex items-center justify-center opacity-0 group-hover:opacity-100 duration-500 w-full backdrop-blur-sm z-30">
              <Image
                src={"/assets/logo.png"}
                height={100}
                width={100}
                alt="My logo"
                className=""
              />
            </div>
            <Image
              src={"/assets/profile.png"}
              alt="My profile"
              height={250}
              width={250}
              className="h-full rounded-md w-full"
            />
          </div>
        </div>
        {/* <motion.p
          className="absolute font-medium -bottom-12 text-9xl z-10 whitespace-nowrap text-slate-300 opacity-20 font-poppin"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          Just Know What You're Doing
        </motion.p> */}
      </div>
    </section>
  );
};

export default About;
