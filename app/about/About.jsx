"use client";
import React, { useState } from "react";
import { aboutInfo } from "../Info";
import { motion } from "framer-motion";
import AboutCard from "../AboutCard";

const About = () => {
  const [showInfo, setShowInfo] = useState(true);

  return (
    <section className="md:max-w-8xl flex flex-col min-h-screen md:mx-auto pt-20">
      <h2 className="title mb-24">_About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 px-8 h-full w-full">
        <div className="flex flex-col">
          <h3 className="text-3xl md:text-5xl mb-8">My Career</h3>
          <p className="max-w-md justify-center">lorem ipsum lorem ipsum lorem ipsum lorem ipsu 
          lorem ipsum lorem ipsum lorem ipsum lorem ipsu 
          lorem ipsum lorem ipsum lorem ipsum lorem ipsu 
          lorem ipsum lorem ipsum lorem ipsum lorem ipsu 
          lorem ipsum lorem ipsum lorem ipsum lorem ipsu 
          lorem ipsum lorem ipsum lorem ipsum lorem ipsu 
          </p>
        </div>
        <div>
          <h3 className="text-xl md:text-2xl text-center font-bold font-raleway">
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
