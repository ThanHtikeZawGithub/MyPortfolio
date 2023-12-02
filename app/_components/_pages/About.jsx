"use client";
import React from "react";
import { experience, myAbout } from "../../Info";
import AboutCard from "../../AboutCard";
import { motion } from "framer-motion";
import AnimatedCounter from "../AnimatedCounter";
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
      <div className="flex flex-col md:flex-row items-center md:items-start max-w-[1200px] h-full gap-4 md:gap-6 relative">
        <div className="flex flex-col md:pt-4 items-start justify-start md:justify-end px-4 md:pl-8 md:gap-3 md:flex-1">
          <div className="">
            <p className="text-dark dark:text-primary text-sm md:text-base first-letter:text-2xl font-medium font-poppin text-start">
              Currently working as remote fullstack developer at GENKI SYSTEM.
            </p>
            <p className="text-dark dark:text-primary text-sm md:text-base first-letter:text-2xl font-medium font-poppin text-start md:text-justify">
              I’m a fast-learner and self-taught developer with the help of
              youtube videos, documents and some learning platforms and got
              actual job in just 5 months.
            </p>
            <p className="text-dark dark:text-primary text-sm md:text-base first-letter:text-2xl font-medium font-poppin text-start md:text-justify">
              Originally a mechanical engineer, break university as a final year
              student and started my learning journey on programming during
              COVID and C**p. Now I’m actually enjoying my career and passing 1+
              year of professional working experience.
            </p>
          </div>
          <div className="flex items-center justify-center gap-6 mt-4">
            <div className="w-20 h-20 md:w-32 md:h-32 flex flex-col text-primary dark:text-slate-800 font-poppin items-center justify-center rounded-full bg-slate-700 dark:bg-primaryBg">
              <div className="font-bold text-2xl md:text-5xl">
                <AnimatedCounter from={0} to={10} />+
              </div>
              <div className="text-xs md:text-lg font-medium">projects</div>
            </div>
            <div className="w-20 h-20 md:w-32 md:h-32 flex flex-col text-primary dark:text-slate-800 items-center justify-center rounded-full bg-slate-700 dark:bg-primaryBg">
              <div className="font-bold text-2xl md:text-5xl">1+</div>
              <div className="text-xs md:text-lg font-medium">years exp</div>
            </div>
            <div className="w-20 h-20 md:w-32 md:h-32 flex flex-col text-primary dark:text-slate-800 items-center justify-center rounded-full bg-slate-700 dark:bg-primaryBg">
              <Image 
              src={'/assets/nextjs.png'}
              alt="nextjs"
              height={50}
              width={50}
              className="w-8 h-8 md:w-12 md:h-12"
              />
              <div className="text-xs md:text-lg font-medium">favorite</div>
            </div>
          </div>
          {/* <div>
            <About_project />
          </div> */}
        </div>
        <div className="w-full px-4 md:flex-1 gap-2">
          {experience.map((exp) => (
            
            <div
              className="flex items-center relative gap-2 md:gap-3 p-1 md:p-2 "
              key={exp.cap}
            >
              <div className="w-[1px] h-full absolute left-[14px] md:left-[26px] top-0 bottom-0 bg-normal dark:bg-primaryBg"/>
              <div className="w-6 h-6 md:w-10 md:h-10 px-2 hover:scale-110 transition-all duration-200 z-30 bg-normal relative dark:bg-primaryBg rounded-full">
                <Image 
                src={"/assets/online-learning.png"}
                alt="work"
                height={25}
                width={25}
                className="absolute top-[3px] left-[3px] md:top-[6px] md:left-[6px] w-4 h-4 md:w-6 md:h-6 "
                />
              </div>
              <div className="border-b border-normal dark:border-primary w-full">
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
            </div>
          ))}
          <div className="flex items-start pt-4 md:pt-0 gap-8 md:gap-16 z-20 w-full">
            {myAbout.map((val) => (
              <div key={val.id}>
                <AboutCard
                  title={val.title}
                  description={val.description}
                  svg={val.svg}
                />
              </div>
            ))}
          </div>
        </div>
        <motion.p
          className="absolute font-medium -bottom-12 text-9xl z-10 whitespace-nowrap text-slate-300 opacity-20 font-poppin"
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
