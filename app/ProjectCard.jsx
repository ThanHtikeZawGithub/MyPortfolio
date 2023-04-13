import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "./Icons";


const ProjectCard = ({ title, type, img, link, github, summary, description }) => {
    return (
      <article
        className="grid bg-primary dark:bg-dark w-full mx-auto rounded-3xl"
      >
        <Link
          href={link}
          target="_blank"
          className="cursor-pointer overflow-hidden rounded-b rounded-3xl"
        >
          <Image
            src={img}
            alt={title}
            width={300}
            height={350}
            className="w-full h-auto object-cover hover:scale-110 transition-all duration-700"
          />
        </Link>
        <div className="flex flex-col items-start justify-between px-4">
          <span className="text-primary3 font-medium text-sm mt-2">{type}</span>
          <Link
            href={link}
            target="_blank"
            className=""
          >
            <h2 className="my-2 w-full text-left text-xl font-bold">{title}</h2>
            <p className="my-3 font-semibold font-mono tracking-widest">{summary}</p>
            <p className="text-sm">{description}</p>
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
        </div>
      </article>
    );
  };

export default ProjectCard;