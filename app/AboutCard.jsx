import React, { useState } from 'react'

const AboutCard = (props) => {
    const [showInfo, setShowInfo] = useState(false);
  return (
    <div key={props.id} className="my-4">
    <div onClick={()=>setShowInfo(curr => !curr)} 
        className='cursor-pointer relative overflow-hidden'>
    <h3 className="text-md md:text-lg font-bold mb-2">{props.title}</h3>
    <span className=' bg-primary3 text-center font-extrabold text-lg w-8 h-8 rounded-full absolute right-0 top-0 '>
        {showInfo? '-':'+'}
        </span>
    </div>
    {showInfo ? (
      <div className="border-b border-dark py-6 border-x">
        {
            props.description.map((val, index)=>(
                <div key={index} className='md:px-2 px-1'>
                <div className='flex items-center justify-between'>
                    <h1 className='font-bold text-base text-primary3 font-open'>{val.cap}</h1>
                    <span className='font-semibold text-sm font-raleway'>{val.date}</span>
                </div>
                <div className='pb-3 font-semibold text-sm font-open'>
                    {val.des}
                </div>
                </div>
            ))
        }
      </div>
    ):(
      <div className="border-b border-dark">
        <p className=""></p>
      </div>
    )}
  </div>
  )
};

export default AboutCard;


