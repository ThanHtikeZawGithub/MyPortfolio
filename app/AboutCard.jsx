import React, { useState } from "react";
import Image from "next/image";

const AboutCard = (props) => {
  const [showInfo, setShowInfo] = useState(false);
  
  return (
    <div key={props.id} className="my-1 z-30 md:my-4 border shadow-lg p-1 rounded-lg relative">
      <div
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
        <h3 className="md:text-sm text-xs font-medium font-poppins md:py-2 py-1 pl-4">
          {props.title}
        </h3>
        <span className="text-center bg-red-600 text-primary transition-all duration-500 z-40 font-extrabold text-sm md:text-lg md:w-8 md:h-8 w-5 h-5 rounded-full absolute right-1 top-1">
          {showInfo ? "-" : "+"}
        </span>
      </div>
      <div
        className={`transition-all ${
          showInfo ? "opacity-100 max-h-[300px]" : "max-h-0 opacity-0"
        } overflow-hidden duration-500`}
      >
        {props.description.map((val) => (
          <div key={val.cap} className="md:p-2 p-0 px-1">
            <div className="flex flex-col items-start">
              <h1 className="font-bold text-xs md:text-sm text-primary3 font-poppin">
                {val.cap}
              </h1>
              <span className="font-semibold text-[10px] md:text-sm font-poppin">
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
