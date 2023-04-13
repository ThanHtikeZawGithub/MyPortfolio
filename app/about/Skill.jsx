import React, { useState } from "react";
import { skills } from "../Info";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import "swiper/swiper.min.css";
const Skill = () => {
  const [clickIcon, setClickIcon] = useState(false);
  return (
    <section className="min-h-screen -z-20 py-1 md:px-24">
      <div className="title my-16">_Skills
      </div>
      <Swiper 
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="mySwiper relative text-center mx-8">
         {skills.map((skill,index)=>{
          return (
            <SwiperSlide key={index} className="bg-dark text-left py-4 px-4 rounded-md ">
              <div className="relative flex items-center justify-between overflow-hidden">
              <span className="text-primary3 font-raleway dark:text-primary3 capitalize mb-16 font-semibold block">{skill.name}</span>
              <img src="/assets/shape-1.png" alt="image" className="w-28 h-28 -top-8 -right-8 absolute"/>
              </div>
              <h3 className="text-2xl font-bold mb-5 text-primary3 dark:text-primary3">{skill.title}</h3>
              <p className="min-h-[175px] text-primary dark:text-primary">{skill.description}</p>
              {skill.img.map((image,index)=>{
                return(
                  <div key={index} className="inline-flex items-center justify-center mx-auto">
                    <img src={image.src} alt='Skill Image' className="h-10 w-auto"/>
                  </div>
                )
              })}
              
            </SwiperSlide>
          )
         })
         }
      </Swiper>
    </section>
  );
};

export default Skill;
