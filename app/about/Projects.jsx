import React from "react";
import ProjectCard from "../ProjectCard";

const Projects = () => {
  return (
    <section className="flex flex-col min-h-screen w-full px-8 md:px-24 overflow-hidden">
      <h1 className="title my-8">_Projects</h1>
      <div className="grid grid-cols-1 mx-auto items-center md:grid-cols-2 w-full gap-12">
     
        <div className="">
          <ProjectCard
            type="Frontend Development"
            title="Nike E-commerce App Demo"
            summary="#REACT #REDUX #TAILWINDCSS"
            description= 'Responsive Design and Frontend development for an ecommerce website'
            img="/assets/project-1.JPG"
            link="https://nike-e-commerce-store-demo.vercel.app/"
            github="https://github.com/ThanHtikeZawGithub/Nike-E-Commerce-store-Demo.git"
          />
        </div>
        <div className="">
        <ProjectCard
            type="FullStack Development"
            title="Booking Application"
            summary="#REACT #EXPRESS #TAILWINDCSS #MONGODB #RESTful"
            img="/assets/bookingpng.JPG"
            description= 'Functional Online Booking Website where u can create actual booking'
            link="https://booking-app-demo.vercel.app/"
            github="https://github.com/ThanHtikeZawGithub/Booking-App-Demo"
          />
            </div>
           
           
        <div className="">
        <ProjectCard
            type="Backend Development with Nextjs"
            title="The Daily News"
            summary="#NEXT #TAILWINDCSS #GRAPHQL"
            img="/assets/project-3.JPG"
            description= 'Fetching news using nextjs + graphQL, since its free subscription, so it has fetch limits'
            link="https://dailynews-blue.vercel.app/"
            github="https://github.com/ThanHtikeZawGithub/News-App"
          />
            </div>
           
           
        <div className="">
        <ProjectCard
            type="Landing Page"
            title="TravelWs"
            img="/assets/project-4.JPG"
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
