import Link from "next/link"
import Image from "next/image"
import { GithubIcon } from "../Icons"
import { useRef } from "react"
import {motion, useScroll ,useTransform} from 'framer-motion'

const ProjectCard = ({
    type, 
    title, 
    summary, 
    description, 
    link, 
    img, 
    github,
}) => {

  const ref = useRef();
  const {scrollYProgress} = useScroll({target:ref, offset:["start start", "end start"]})
  const y = useTransform(scrollYProgress, [0,1], ["0", "300%"])

  return (
    <section key={title} ref={ref} className="bg-primary dark:bg-gradient-dark">
          <article className="flex items-center justify-center gap-12 px-8 w-full">
            <Link
              href={link}
              target="_blank"
              className="cursor-pointer overflow-hidden flex-1 flex flex-col items-end justify-center w-full h-auto rounded-md"
            >
              <Image
                src={img}
                alt={title}
                width={500}
                height={650}
                className="object-cover hover:scale-110 transition-all duration-700"
              />
            </Link>
            <motion.div 
            className="flex flex-col items-start justify-between px-4 flex-1"
            style={{y}}
            >
            <span className="text-slate-800 font-medium font-poppin text-sm mt-4">
                {type}
              </span>
              <Link href={link} target="_blank" className="">
                <h2 className="my-2 w-full text-left text-4xl text-normal font-bold font-poppin">
                  {title}
                </h2>
                <p className="my-3 text-sm md:text-lg font-semibold font-mono tracking-widest">
                  {summary}
                </p>
                <p className="text-sm font-medium font-poppin">{description}</p>
              </Link>
              <div className="my-6 flex items-center justify-between gap-8">
                <Link href={github} target="_blank" className="w-10">
                  <GithubIcon />
                </Link>
                <Link
                  href={link}
                  target="_blank"
                  className="btn text-center text-xs tracking-widest font-semibold"
                >
                  Live Demo
                </Link>
              </div>
            </motion.div>
          </article>
        </section>
  )
}

export default ProjectCard