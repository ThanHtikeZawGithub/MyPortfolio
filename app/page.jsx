"use client";
import Link from "next/link";
import { LinkArrow, Pattern1, Profile } from "./Icons";
import PageTransition from "./PageTransition";
import Image from "next/image";


export default function HomePage() {
  return (
    <>
      <PageTransition />
      <div className="flex flex-col h-screen w-full md:flex-row overflow-hidden ">
        <div className="bg-primary dark:bg-zinc-800 px-4 flex basis-3/5 md:basis-8/12 md:relative transition-all duration-700">
          <div
            className="mx-auto py-2 flex flex-col justify-center items-center md:items-start top-32 
                          md:top-40 max-w-xl md:max-w-3xl md:mx-auto font-mont font-bold"
          >
       
            <p className="text-sm font-mono font-bold text-gray-600 dark:text-primary3 md:text-xl mb-2 md:mb-4">
              Hi. I'm
            </p>
            <h2 className="text-4xl md:text-6xl font-bold font-mont text-dark tracking-tight dark:text-primary3 z-20">FRONTEND</h2>
            <h2 className="text-4xl md:text-6xl font-bold font-mont tracking-tight text-dark dark:text-primary3 mb-2 z-20">DEVELOPER</h2>
            <Pattern1 className="hidden md:absolute md:-bottom-12 md:right-12 md:w-100 md:h-100 dark:invert" />
            <p className="text-zinc-600 text-center md:text-start dark:text-primary3 font-raleway my-4 text-xs max-w-xs flex-wrap md:text-base ">
              Dedicated to craft ideas into solid applications, Always learning new things and developing creative ideas 
            </p>
            <div className="flex items-center my-2">
              <Link
                href={'/public/resume.pdf'}
                className="btn btn-small md:btn flex items-center justify-center text-xs tracking-widest font-semibold dark:text-primary"
                download={true}
              >
                Resume 
                <LinkArrow className='ml-2 w-5 h-5'/>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-primary3 basis-2/5 md:basis-4/12 font-bold md:relative">
          <div
            className="flex relative before:absolute before:border-2 before:border-zinc-800 
                          before:border-solid before:dark:border-primary
                          md:before:-right-4 md:before:-top-4 md:before:w-full md:before:h-full 
                          before:z-20 justify-center my-8 items-center md:absolute md:top-40 md:-left-20 -top-10 hover:saturate-50 transition-all duration-700 ease-in "
          >
            <Image
              src="/assets/profile_5.png"
              alt="profile"
              priority
              width={200}
              height={350}
              className="w-auto h-[250px] md:h-[300px] z-30"
              sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    50vw"
            />
            <Pattern1 className="absolute left-56 top-24 md:left-32 md:top-48" />
          </div>
          <button className="fixed bottom-8 right-8 bg-yellow-600 z-40 border border-solid border-dark rounded-md p-2 shadow-black shadow-md">
              <Link
              href='/about'
            >
              <Profile/>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
