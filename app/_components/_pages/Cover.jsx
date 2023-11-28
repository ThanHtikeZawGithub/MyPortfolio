'use client'

import { motion } from "framer-motion"
import { LinkArrow, Pattern1, Profile } from "@/app/Icons";
import Link from "next/link"
import CoverImage from "../Cover-image";

const Cover = () => {
  return (
    <motion.div
          className="flex flex-col md:flex-row justify-center items-center md:gap-24"
          initial="initial"
          animate="animate"
        >
          <div
            className="mx-auto py-2 flex flex-col justify-center items-center md:items-start
                      max-w-xl md:max-w-3xl"
          >
            <p className="text-sm font-poppin font-bold text-gray-600 dark:text-primary3 md:text-xl mb-1 md:mb-4">
              Hi. I'm
            </p>
            <h2 className="text-4xl md:text-6xl font-bold font-poppin text-dark tracking-tight dark:text-primary3 z-20">
              FRONTEND
            </h2>
            <h2 className="text-4xl md:text-6xl font-bold font-poppin tracking-tight text-dark dark:text-primary3 mb-1 md:mb-2 z-20">
              DEVELOPER
            </h2>
            <Pattern1 className="hidden md:absolute md:-bottom-12 md:right-12 md:w-100 md:h-100 dark:invert" />
            <p className="text-zinc-600 text-center md:text-start dark:text-primary3 font-poppin my-1 md:my-4 text-xs font-medium max-w-xs flex-wrap md:text-base ">
              Dedicated to craft ideas into solid applications, Always learning
              new things and developing creative ideas
            </p>
            <div className="flex items-center my-1 md:my-2">
              <Link
                href={"/resume.pdf"}
                className="btn btn-small md:btn flex items-center justify-center text-xs tracking-widest font-semibold dark:text-primary"
                download={true}
              >
                Resume
                <LinkArrow className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="h-[250px] md:h-[300px] bg-fixed bg-cover relative flex items-center justify-center">
            <CoverImage />
            {/* <motion.p
              className="font-extrabold absolute top-[50%] text-9xl z-10 whitespace-nowrap text-slate-300"
              variants={sliderVariants}
              initial="initial"
              animate="animate"
            >
              Web Developer Frontend Developer FullStack Developer
            </motion.p> */}
          </div>
        </motion.div>
  )
}

export default Cover