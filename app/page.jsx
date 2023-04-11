"use client";
import Link from "next/link";
import { LinkArrow, Pattern1 } from "./Icons";
import PageTransition from "./PageTransition";
import AnimatedText from "./AnimatedText";
import { useState } from "react";
import Image from "next/image";

export default function HomePage() {
  const [isHomePage, setIsHomePage] = useState(true);

  return (
    <>
      <PageTransition />

      <div className="flex flex-col h-screen w-full md:flex-row overflow-hidden ">
        <div className="bg-primary dark:bg-zinc-800 flex basis-3/5 md:basis-8/12 md:relative transition-all duration-700">
          <div
            className="mx-auto py-2 flex flex-col justify-center top-20 
                          md:top-40 max-w-xl md:max-w-3xl md:mx-auto font-mont font-bold"
          >
            <Pattern1 className="absolute md:-bottom-12 md:right-12 md:w-100 md:h-100 dark:invert" />
       
            <h2 className="text-md font-mono font-bold text-gray-600 dark:text-primary3 md:text-xl mb-4">
              Hi. I'm
            </h2>
            <AnimatedText
              className="text-xl md:text-7xl z-10"
              text="Frontend"
            />
            <AnimatedText
              className="text-xl md:text-7xl mb-4 z-10"
              text="Developer"
            />
            <p className="text-zinc-600 dark:text-primary3 font-raleway text-center text-md flex-wrap md:text-lg ">
              Fast-learner, dedicated to craft ideas into solid applications
            </p>
            <div className="flex items-center self-start mt-2">
              <Link
                href="/resume.pdf"
                target={"_blank"}
                className="flex items-center bg-dark dark:bg-primary text-light dark:text-primary3 p-1.5 md:p-2.5 px-3 md:px-6 rounded-lg text-sm md:text-lg font-semibold
                               hover:bg-light dark:hover:bg-zinc-800 hover:text-dark dark:hover:text-primary border border-solid border-transparent
                                hover:border-dark hover:scale-105"
                download={true}
              >
                Resume <LinkArrow className="ml-2" />
              </Link>
              <Link
                href="/contact"
                className="ml-4 text-lg font-medium capitalize text-dark dark:text-primary3 underline"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-primary3 basis-2/5 md:basis-4/12 font-bold md:relative">

          <Pattern1 className="absolute -right-12 -bottom-56" />
          <div
            className="flex relative before:absolute before:border-2 before:border-zinc-800 
                          before:border-solid before:dark:border-primary
                          before:-right-4 before:-top-4 before:w-full before:h-full 
                          before:z-20 justify-center my-8 items-center md:absolute md:top-40 md:-left-24  "
          >
            <Image
              src="/assets/profile_5.png"
              alt="profile"
              priority
              width={200}
              height={350}
              className="w-auto h-[200px] md:h-[300px] md:w-auto z-30"
              sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    50vw"
            />
          </div>
        </div>
      </div>
    </>
  );
}
