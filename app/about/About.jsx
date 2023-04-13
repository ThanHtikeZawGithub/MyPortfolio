"use client";
import React from "react";
import { aboutInfo } from "../Info";
import { motion } from "framer-motion";
import AboutCard from "../AboutCard";

const About = () => {
  return (
    <section className="md:max-w-8xl flex flex-col min-h-screen md:mx-auto pt-20">
      <h2 className="title mb-24">_About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 px-8 h-full w-full">
        <div className="flex flex-col md:px-8">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary3">My Career</h3>
          <p className="max-w-md justify-center font-medium text-base tracking-wide">
          I was an Engineering student from Mandalay Technological University(MTU).
          I'm not a graduated student because of covid and political issues
          in my country.So I quited my university as a final year qualification.
          I had experienced many projects and internships related to my subject and
          I pretty know what is team work and soft skills like communication.
          Now I'm starting to works as a frontend devoloper in which I'm passionated
          about.
          </p>
        </div>
        <div>
          <h3 className="text-xl text-primary3 mt-4 md:text-2xl md:px-16 text-center font-bold font-raleway">
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
