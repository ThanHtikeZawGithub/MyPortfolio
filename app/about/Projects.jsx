import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "../Icons";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full relative flex items-center justify-between rounded-3xl border border-solid border-dark
                            bg-light shadow-2xl p-4 rounded-br-3xl "
    >
      <Link
        href={link}
        target="_blank"
        className="cursor-pointer overflow-hidden rounded-3xl"
      >
        <Image
          src={img}
          alt={title}
          width={300}
          height={350}
          className="w-full h-auto object-cover"
        />
      </Link>
      <div className="flex flex-col items-start justify-between pl-6">
        <span className="text-purple-600 font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:scale-105 duration-500"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-primary p-2 px-6 text-lg font-semibold"
          >
            Live Demo
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="w-full relative flex items-center justify-between rounded-3xl border border-solid border-dark
        bg-light shadow-2xl p-4"
    >
      <Link
        href={link}
        target="_blank"
        className="cursor-pointer overflow-hidden rounded-3xl"
      >
        <Image
          src={img}
          alt={title}
          width={300}
          height={350}
          className="w-full h-auto object-cover"
        />
      </Link>
      <div className="flex flex-col items-start justify-between pl-6">
        <span className="text-purple-600 font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:scale-105 duration-500"
        >
          <h2 className="my-2 w-full text-left text-2xl font-bold">{title}</h2>
        </Link>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-primary p-2 px-6 text-lg font-semibold"
          >
            Live Demo
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <section className="flex min-h-screen px-32 py-32">
      <div className="grid mx-auto w-full grid-col-12 gap-8">
        <div className="col-span-12">
          <FeaturedProject
            type="Frontend Project"
            title="Nike E-commerce App Demo"
            summary="In this project, I used react (create-react-app), redux, tailwindcss. This project is
                        not fully functional, just UI/UX design purpose only."
            img="/assets/project-1.jpg"
            link="https://nike-e-commerce-store-demo.vercel.app/"
            github="https://github.com/ThanHtikeZawGithub/Nike-E-Commerce-store-Demo.git"
          />
        </div>
        <div className="col-span-6">
        <Project
            type="Frontend Project"
            title="Nike E-commerce App Demo"
            img="/assets/project-1.jpg"
            link="https://nike-e-commerce-store-demo.vercel.app/"
            github="https://github.com/ThanHtikeZawGithub/Nike-E-Commerce-store-Demo.git"
          />
            </div>
        <div className="col-span-6">
        <Project
            type="Frontend Project"
            title="Nike E-commerce App Demo"
            img="/assets/project-1.jpg"
            link="https://nike-e-commerce-store-demo.vercel.app/"
            github="https://github.com/ThanHtikeZawGithub/Nike-E-Commerce-store-Demo.git"
          />
            </div>
        <div className="col-span-6">
        <FeaturedProject
            type="Frontend Project"
            title="Nike E-commerce App Demo"
            img="/assets/project-1.jpg"
            summary="In this project, I used react (create-react-app), redux, tailwindcss. This project is
            not fully functional, just UI/UX design purpose only."
            link="https://nike-e-commerce-store-demo.vercel.app/"
            github="https://github.com/ThanHtikeZawGithub/Nike-E-Commerce-store-Demo.git"
          />
            </div>
      </div>
    </section>
  );
};

export default Projects;
