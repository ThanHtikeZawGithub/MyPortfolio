import React from "react";
import { skills } from "../Info";

const Skill = () => {
  return (
    <section className="min-h-screen -z-20 p-24 md:p-32">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-12 w-full mx-auto mb-32">
        {skills.map((skill) => {
          return (
            <div key={skill.id} className="rounded-t-xl py-4 px-2">
              <div className="flex items-center justify-between font-mont font-bold text-xl px-4">
                <h3>{skill.name}</h3>
                <span>
                  {skill.percentage}
                  <span className="text-primary3">%</span>
                </span>
              </div>
              <img
                src={skill.src}
                alt="skill image"
                className="w-auto h-16 my-4"
              />
              <div className="md:h-1 bg-gray-600 z-0 md:w-full rounded-full border-solid">
                <span
                  className={`block bg-primary3 w-[${skill.percentage}%] h-1 relative z-10`}
                >
                  <span className="absolute rounded-full right-0 -top-3 w-6 h-6 bg-primary3 z-20"></span>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skill;
