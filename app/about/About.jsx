"use client";
import React from "react";
import { aboutInfo } from "../Info";
import AboutCard from "../AboutCard";

const About = () => {
  return (
    <section className="max-w-[1200px] relative flex flex-col md:min-h-screen md:mx-auto pt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 px-3 h-full w-full justify-center">
        <div className="flex flex-col md:px-8 items-center justify-start">
        <h2 className="title text-start">ABOUT ME_</h2>
        <div className="font-poppin text-7xl dark:text-white text-dark">Passion and Consistent together Makes the Success</div>
          <p className="max-w-md text-sm font-normal font-poppin md:text-lg tracking-[2px] text-center md:text-start">
          With a strong passion,as a <span className="text-xl text-red-400">fast-learner and adaptive person</span>, I'm always learning new things and growing my skills all the time.
          </p>
        </div>
        <div className="md:px-[64px] px-0">
          <h3 className="text-xs text-dark dark:text-white uppercase tracking-[3px] text-start md:px-16 font-semibold font-poppin">
            Qualifications
            </h3>
          <div>
            {aboutInfo.map((val, id) => {
              return (
                <AboutCard
                id={id}
                title={val.title}
                description={val.description}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
