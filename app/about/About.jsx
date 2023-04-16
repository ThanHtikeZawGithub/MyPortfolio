"use client";
import React from "react";
import { aboutInfo } from "../Info";
import AboutCard from "../AboutCard";

const About = () => {
  return (
    <section className="md:max-w-8xl flex flex-col md:min-h-screen md:mx-auto pt-20">
      <h2 className="title mb-6 md:mb-24">_About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 px-3 h-full w-full">
        <div className="flex flex-col md:px-8">
          <p className="max-w-md justify-center font-normal text-base tracking-wide text-center md:text-start">
          Currently working as a freelance frontend developer specialized in Reactjs, Nextjs.
          Mostly interested in full-stack development. With a strong passionated about programming,
          computer science and software development. Spending more time on data structures and algorithms.
          As a fast-learner and adaptive person, I'm always learning new things and growing my skills all the time.
          </p>
        </div>
        <div>
          <h3 className="text-xl text-primary3 my-4 md:text-2xl md:px-16 text-center font-bold font-raleway">
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
