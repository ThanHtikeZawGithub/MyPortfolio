import React, { useState } from "react";
import Image from "next/image";

const AboutCard = (props) => {
  // const [showInfo, setShowInfo] = useState(false);
  
  return (
    <div className="my-1 z-30 md:my-4 border backdrop-blur-xl shadow-lg py-1 px-4 rounded-lg relative">
      <div
        // onClick={() => setShowInfo((curr) => !curr)}
        className="cursor-pointer flex overflow-hidden text-dark dark:text-black"
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
        <p className="md:text-base text-xs font-medium font-poppins md:py-2 py-1 pl-2 md:pl-4">
          {props.title}
        </p>
        {/* <span className="text-center bg-primary3 text-primary transition-all duration-500 z-40 font-extrabold text-xs md:text-lg md:w-8 md:h-8 w-5 h-5 rounded-full absolute right-1 top-[6px]">
          {showInfo ? "-" : "+"}
        </span> */}
      </div>
      <div
        className={`transition-all opacity-100 max-h-[300px] w-[300px] overflow-hidden duration-500`}
      >
        {props.description.map((val) => (
          <div key={val.cap} className="md:p-2 p-0 px-1">
            <div className="flex flex-col items-start">
              <p className="font-bold text-xs md:text-base text-black font-poppin">
                {val.cap}
              </p>
              <span className="font-semibold text-[10px] md:text-sm text-slate-800 dark:text-black font-poppin">
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
