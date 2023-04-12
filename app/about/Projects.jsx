import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "../Icons";


const Project = ({ title, type, img, link, github, summary, description }) => {
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

const Projects = () => {
  return (
    <section className="flex min-h-screen w-full px-8 md:px-32 md:py-32 overflow-hidden">
      
      <div className="grid grid-cols-1 mx-auto items-center md:grid-cols-2 w-full gap-12">
     
        <div className="">
          <Project
            type="Frontend Development"
            title="Nike E-commerce App Demo"
            summary="#REACT #REDUX #TAILWINDCSS"
            description= 'Responsive Design and Frontend development for an ecommerce website'
            img="/assets/project-1.jpg"
            link="https://nike-e-commerce-store-demo.vercel.app/"
            github="https://github.com/ThanHtikeZawGithub/Nike-E-Commerce-store-Demo.git"
          />
        </div>
        <div className="">
        <Project
            type="FullStack Development"
            title="Booking Application"
            summary="#REACT #EXPRESS #TAILWINDCSS #MONGODB #RESTful"
            img="/assets/bookingpng.jpg"
            description= 'Functional Online Booking where u can create booking'
            link="https://booking-app-demo.vercel.app/"
            github="https://github.com/ThanHtikeZawGithub/Booking-App-Demo"
          />
            </div>
           
           
        <div className="">
        <Project
            type="Backend Development with Nextjs"
            title="The Daily News"
            summary="#NEXT #TAILWINDCSS #GRAPHQL"
            img="/assets/project-3.jpg"
            description= 'Fetching news using nextjs + grapQL'
            link="https://dailynews-blue.vercel.app/"
            github="https://github.com/ThanHtikeZawGithub/News-App"
          />
            </div>
           
           
        <div className="">
        <Project
            type="Landing Page"
            title="TravelWs"
            img="/assets/project-4.jpg"
            summary="#REACT #CSS"
            description= 'Simple website template desing with only using react'
            link="https://travel-with-us-two.vercel.app/"
            github="https://github.com/ThanHtikeZawGithub/Travel-Landing-Template"
          />
          </div>
          </div>
    </section>
  );
};

export default Projects;
