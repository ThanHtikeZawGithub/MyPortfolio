import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "../../lib/Icons";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0", "300%"], {
    clamp: false,
  });

  return (
    <section
      key={title}
      ref={ref}
      className="bg-primaryBg dark:bg-gradient-dark"
    >
      <article className="flex flex-col mx-auto md:flex-row items-center justify-center gap-4 md:gap-12 px-8 w-full">
        <Link
          href={link}
          target="_blank"
          aria-label="My project demo link"
          className="cursor-pointer overflow-hidden flex-1 flex flex-col items-start md:items-end justify-center w-full h-auto rounded-md"
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
          className="flex flex-col items-start justify-between flex-1 text-normal dark:text-primary"
          style={{ y }}
        >
          <span className="font-medium font-poppin text-sm mt-4">{type}</span>
          <Link href={link} target="_blank" className="">
            <h2 className="my-2 w-full text-left text-3xl md:text-4xl  font-bold font-poppin">
              {title}
            </h2>
            <p className="my-3 text-sm md:text-lg font-semibold font-mono tracking-widest">
              {summary}
            </p>
            <p className="text-sm font-medium font-poppin">{description}</p>
          </Link>
          <div className="my-6 flex items-center justify-between gap-8">
            <Link
              href={github}
              aria-label="To github"
              target="_blank"
              className="w-10"
            >
              <GithubIcon />
            </Link>
            <Link
              href={link}
              target="_blank"
              aria-label="hidden"
              className="btn text-center flex items-center justify-center text-xs tracking-widest font-semibold"
            >
              Live Demo
            </Link>
          </div>
        </motion.div>
      </article>
    </section>
  );
};

export default ProjectCard;
