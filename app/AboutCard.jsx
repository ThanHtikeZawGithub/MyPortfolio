import React, { useState } from 'react';

const AboutCard = (props) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div key={props.title} className="my-4 border shadow-lg p-2 rounded-lg">
      <div
        onClick={() => setShowInfo((curr) => !curr)}
        className="cursor-pointer flex items-center relative overflow-hidden"
      >
        <h3 className="md:text-sm font-medium font-poppins tracking-[2px] py-2">{props.title}</h3>
        <span className="bg-primary3 text-center transition-all duration-500 font-extrabold text-lg w-8 h-8 rounded-full absolute right-0 top-0">
          {showInfo ? '-' : '+'}
        </span>
      </div>
      <div
        className={`transition-all ${
          showInfo ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden duration-500`}
      >
        {props.description.map((val) => (
          <div key={val.cap} className="md:px-2 px-2">
            <div className="flex items-center justify-between">
              <h1 className="font-bold text-sm md:text-base text-dark font-poppin">{val.cap}</h1>
              <span className="font-semibold text-[10px] md:text-sm font-poppin">{val.date}</span>
            </div>
            <div className="pb-3 font-normal tracking-[1px] text-sm font-poppin">{val.des}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutCard;
