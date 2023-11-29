import React, { useState } from "react";
import Image from "next/image";

const AboutCard = (props) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div key={props.id} className="my-4 border shadow-lg p-1 rounded-lg relative">
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
          />
        </div>
        <h3 className="md:text-sm font-medium font-poppins py-2 pl-4">
          {props.title}
        </h3>
        <span className="text-center bg-red-600 text-primary transition-all duration-500 z-40 font-extrabold text-lg w-8 h-8 rounded-full absolute right-1 top-1">
          {showInfo ? "-" : "+"}
        </span>
      </div>
      <div
        className={`transition-all ${
          showInfo ? "opacity-100 max-h-[300px]" : "max-h-0 opacity-0"
        } overflow-hidden duration-500`}
      >
        {props.description.map((val) => (
          <div key={val.cap} className="md:px-2 px-2 py-2">
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
