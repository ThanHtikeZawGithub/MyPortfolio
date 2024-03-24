import { skills } from "../lib/Info";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "swiper/swiper.min.css";
import Image from "next/image";

const Skill = () => {
  return (
    <section className="z-30 relative" id="skills">
      <h1 className="absolute inset-0 text-[180px] opacity-25 text-gray-600 stroke-black stroke-2 font-extrabold leading-8 -tracking-widest font-mono">Services</h1>
      <div className="h-full max-w-screen w-full flex items-center justify-center bg-primaryBg dark:bg-gradient-dark px-8 md:px-24">
        <Swiper
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 4000,
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
            1500: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper relative text-center mx-auto"
        >
          {skills.map((skill, index) => {
            return (
              <SwiperSlide
                key={index}
                className="bg-skill text-left py-4 px-4 rounded-md "
              >
                <div className="relative flex items-center justify-between overflow-hidden">
                  <span className="text-primary3 font-poppin dark:text-primary3 capitalize mb-16 font-semibold block">
                    {skill.name}
                  </span>
                  <img
                    src="/assets/shape-1.png"
                    height='0'
                    width='0'
                    alt="image"
                    className="w-auto h-full top-0 right-0 absolute"
                  />
                </div>
                <h1 className="text-2xl font-poppin font-bold mb-5 text-primary3 dark:text-primary3">
                  {skill.title}
                </h1>
                <p className="min-h-[175px] text-sm font-poppin text-primary dark:text-primary">
                  {skill.description}
                </p>
                <div className="inline-flex items-center gap-1 justify-center max-auto">
                  {skill.img.map((image, index) => {
                    return (
                      <div key={index}>
                        <Image
                          src={image.src}
                          width={30}
                          height={30}
                          alt="Skill Image"
                          className="h-8 w-auto"
                        />
                      </div>
                    );
                  })}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Skill;
