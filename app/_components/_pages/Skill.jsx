import React, { useState } from "react";
import { skills } from "../../Info";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import "swiper/swiper.min.css";
const Skill = () => {
  const [clickIcon, setClickIcon] = useState(false);
  return (
    <section 
    className="-z-20"
    id="Skills"
    >
      <div className="h-full max-w-screen w-full flex items-center justify-center bg-primary dark:bg-gradient-dark px-8 md:px-24">
      <Swiper 
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
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
        modules={[Pagination, Autoplay]}
        className="mySwiper relative text-center mx-auto">
         {skills.map((skill,index)=>{
          return (
            <SwiperSlide key={index} className="bg-skill text-left py-4 px-4 rounded-md ">
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
      </div>
    </section>
  );
};

export default Skill;
