"use client";
import React, { useState } from "react";
import { aboutInfo } from "../Info";
import {motion} from 'framer-motion';

const About = () => {
  const [selected, setSelected] = useState(0);
  return (
    <section className="md:max-w-8xl min-h-screen md:mx-auto section">
      <div className="flex flex-wrap flex-col md:flex-row mx-auto md:items-center md:justify-between px-8 gap-16">
          <div className="flex md:flex-col mt-8 md:border-l">
            {aboutInfo.map((exp) => {
              return (
                <ul className="px-2">
                  <li
                    key={exp.id}
                    className={`${
                    exp.id === selected
                        ? "text-primary3 transition-all duration-500 md:before:h-full before:bg-primary3 before:h-[2px]"
                        : "dark:text-primary"
                    } relative font-raleway tracking-widest font-semibold text-xs md:text-xl list-none 
                    p-4 md:h-16 before:absolute before:w-full w-full before:h-1 md:before:w-1 before:bottom-0 
                    md:before:-left-2 md:before:h-full cursor-pointer`}
                    onClick={()=>setSelected(exp.id)}
                  >
                    {exp.title}
                  </li>
                </ul>
              );
            })}
          </div>
          <div className="max-w-lg">
            {aboutInfo[selected].description.map((info) => (
              <motion.li
              initial={{y:-50,opacity:0}}
              animate={{
                y:0,
                opacity:1,
                transition:{
                  duration:0.8
                }
              }}
              className="w-full font-open text-sm px-1 md:text-lg list-none dark:text-primary" 
              key={info}>
                {info}
              </motion.li>
            ))}
          </div>
      </div>
    </section>
  );
};

export default About;
