"use client";
import React from "react";
import { experience, myAbout } from "../../Info";
import AboutCard from "../../AboutCard";
import { motion } from "framer-motion";

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
      className="bg-primaryBg dark:bg-gradient-dark relative flex flex-col md:mx-auto"
      id="About"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start max-w-[1200px] h-full gap-8 md:gap-6 relative pt-6 md:pt-20">
        <div className="flex flex-col pt-24 md:pt-4 items-start justify-start md:justify-end px-4 md:pl-8 md:gap-3 md:flex-1">
          <div className="">
            <p className="text-dark dark:text-primary text-sm md:text-base first-letter:text-2xl font-medium font-poppin text-start">
              Currently working as remote fullstack developer at GENKI
              SYSTEM.
            </p>
            <p className="text-dark dark:text-primary text-sm md:text-base first-letter:text-2xl font-medium font-poppin text-start md:text-justify">
              I’m a fast-learner and self-taught developer with the help of
              youtube videos, documents and some learning platforms and got
              actual job in just 5 months.
            </p>
            <p className="hidden md:flex text-dark dark:text-primary text-sm md:text-base first-letter:text-2xl font-medium font-poppin text-start md:text-justify">
              Originally a mechanical engineer, break university as a final year
              student and started my learning journey on programming during
              COVID and C**p. Now I’m actually enjoying my career and passing 1+
              year of professional working experience.
            </p>
          </div>
          {/* <div>
            <About_project />
          </div> */}
        </div>
        <div className="px-4 md:flex-1 gap-2">
          {experience.map((exp) => (
              <div 
              className="flex flex-col items-start p-1 md:p-2 border-b border-normal dark:border-primary"
              key={exp.cap}
              >
                <h1 className="font-bold text-sm md:text-base text-primary3 font-poppin">
                  {exp.cap}
                </h1>
                <span className="font-semibold text-[10px] md:text-sm text-normal dark:text-primary font-poppin">
                  {exp.date}
                </span>
                <p className="hidden md:flex font-semibold text-sm font-poppin text-normal dark:text-primary">
                  {exp.des}
                </p>
              </div>
          ))}
          <div className="flex items-start pt-4 md:pt-0 gap-8 md:gap-16 z-20 w-full">
            {myAbout.map((val) => (
              <AboutCard
                id={val.id}
                title={val.title}
                description={val.description}
                svg={val.svg}
              />
            ))}
          </div>
        </div>
        <motion.p
          className="absolute font-medium bottom-0 text-9xl z-10 whitespace-nowrap text-slate-300 opacity-20 font-poppin"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          Just Know What You're Doing
        </motion.p>
      </div>
    </section>
  );
};

export default About;
