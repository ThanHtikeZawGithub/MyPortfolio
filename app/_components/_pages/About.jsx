"use client";
import React from "react";
import { aboutInfo } from "../../Info";
import AboutCard from "../../AboutCard";

const About = () => {
  return (
    <section 
    className="max-w-screen bg-primary dark:bg-gradient-dark relative flex flex-col md:mx-auto pt-20"
    id="About"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 px-3 h-full w-full">
        <div className="flex flex-col md:px-8 items-center">
          <p className="max-w-md text-dark dark:text-primary text-sm font-normal font-poppin md:text-lg tracking-[2px] text-center md:text-start">
          Currently working as a Full-stack developer specialized in Reactjs, Nextjs, Nodejs and Java.
          Mostly interested in full-stack development. With a strong passionated about programming,
          computer science and software development. Spending more time on data structures and algorithms.
          As a fast-learner and adaptive person, I'm always learning new things and growing my skills all the time.
          </p>
        </div>
        <div className="md:px-[64px] px-0">
          <h3 className="text-xl text-primary3 md:text-2xl md:px-16 text-center font-bold font-poppin tracking-wide">
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
