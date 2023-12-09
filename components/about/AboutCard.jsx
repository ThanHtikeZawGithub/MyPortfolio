import React, { useState } from "react";
import Image from "next/image";

const AboutCard = (props) => {
  const [showInfo, setShowInfo] = useState(false);
  
  return (
    <div className="my-1 z-30 md:my-4 border shadow-lg p-1 rounded-lg relative">
      <button
        onClick={() => setShowInfo((curr) => !curr)}
        className="cursor-pointer flex overflow-hidden text-dark dark:text-primary"
      >
        <div className="absolute -top-2 -left-2">
          <Image 
          src={props.svg}
          alt={props.title}
          width={30}
          height={30}
          className="w-6 h-6 md:w-7 md:h-7"
          />
        </div>
        <p className="md:text-sm text-xs font-medium font-poppins md:py-2 py-1 pl-2 md:pl-4">
          {props.title}
        </p>
        <span className="text-center bg-primary3 text-primary transition-all duration-500 z-40 font-extrabold text-xs md:text-lg md:w-8 md:h-8 w-5 h-5 rounded-full absolute right-1 top-[6px]">
          {showInfo ? "-" : "+"}
        </span>
      </button>
      <div
        className={`transition-all ${
          showInfo ? "opacity-100 max-h-[300px]" : "max-h-0 opacity-0"
        } overflow-hidden duration-500`}
      >
        {props.description.map((val) => (
          <div key={val.cap} className="md:p-2 p-0 px-1">
            <div className="flex flex-col items-start">
              <p className="font-bold text-xs md:text-sm text-primary3 font-poppin">
                {val.cap}
              </p>
              <span className="font-semibold text-[10px] md:text-sm text-slate-800 dark:text-primary font-poppin">
                {val.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutCard;
