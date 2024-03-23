import { experience, myAbout } from "@/lib/Info";
import React from "react";
import AboutCard from "../about/AboutCard";
import Image from "next/image";

const Experience = () => {
  return (
    <section
      style={{ backgroundImage: "url(./assets/passion.png)" }}
      className=" h-full bg-cover bg-fixed md:h-screen py-14 dark:bg-gradient-dark relative w-full flex flex-col lg:px-32 2xl:px-64 md:grid md:grid-cols-2 md:items-center md:justify-center"
    >
      <div>
      {experience.map((exp) => (
        <div
          className="flex items-start justify-start w-full relative gap-2 md:gap-3 p-1 md:p-2 "
          key={exp.cap}
        >
          <div className="w-6 h-6 cursor-pointer md:w-10 md:h-10 px-2 hover:scale-110 transition-all duration-200 z-30 bg-normal relative dark:bg-primaryBg rounded-full">
            <Image
              src={"/assets/online-learning.png"}
              alt="work"
              height={25}
              width={25}
              className="absolute top-[3px] left-[3px] md:top-[6px] md:left-[6px] w-4 h-4 md:w-6 md:h-6 "
            />
          </div>
          <div className="w-full">
            <p className="font-bold text-sm md:text-2xl text-black font-poppin">
              {exp.cap}
            </p>
            <span className="font-semibold text-[10px] md:text-sm text-normal dark:text-primary font-poppin">
              {exp.date}
            </span>
            <p className="hidden md:flex font-semibold text-sm font-poppin text-normal dark:text-primary">
              {exp.des}
            </p>
          </div>
        </div>
      ))}
      </div>
      <div className="flex flex-col items-center pt-4 md:pt-0 gap-8 md:gap-16 z-20 w-full">
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
    </section>
  );
};

export default Experience;
