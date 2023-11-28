import React from "react";
import ProjectCard from "../../ProjectCard";

const Projects = () => {
  return (
    <section 
    className="flex flex-col w-full px-8 md:px-24 overflow-hidden"
    id="Projects"
    >
      <div className="grid grid-cols-1 mx-auto items-center md:grid-cols-2 w-full gap-12">
     
        <div>
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
        <div>
        <ProjectCard
            type="FullStack Development"
            title="Booking Application"
            summary="#REACT #NODE #TAILWINDCSS #MONGODB #FIREBASE"
            img="/assets/bookingpng.JPG"
            description= 'Functional Online Booking Website where u can create actual booking'
            link="https://booking-app-demo.vercel.app/"
            github="https://github.com/ThanHtikeZawGithub/Booking-App-Demo"
          />
            </div>
           
           
        <div>
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
           
           
        <div>
        <ProjectCard
            type="Landing Page"
            title="TravelWs"
            img="/assets/project-4.JPG"
            summary="#REACT #CSS"
            description= "Simple website template desing with only using react. It's about travel agency in Bagan"
            link="https://travel-with-us-two.vercel.app/"
            github="https://github.com/ThanHtikeZawGithub/Travel-Landing-Template"
          />
          </div>
          <div>
        <ProjectCard
            type="Full-stack development"
            title="E-commerce Admin panel"
            img="/assets/admin_panel1.JPG"
            summary="#NEXT #TAILWINDCSS #MONGODB #FIREBASE #NEXT OAUTH"
            description= "Admin panel and manage product site for e-commerce website. In this project, you have to login with actual admin e-mail to get access"
            link="https://e-commerce-admin-panel-mu.vercel.app/"
            github="https://github.com/ThanHtikeZawGithub/E-commerce-Admin-panel"
          />
          </div>
          <div>
        <ProjectCard
            type="Full-stack development"
            title="E-commerce"
            img="/assets/e-commerce.JPG"
            summary="#NEXT #MONGODB #StripeAPI #Styled-components #REACT"
            description= "This version is not fully functional and I'll add more customizable functionality in the future.I'm using same database as admin-panel to fetch products and orders"
            link="https://mawkon.vercel.app/"
            github="https://github.com/ThanHtikeZawGithub/e-commerce-site"
          />
          </div>
          </div>
    </section>
  );
};

export default Projects;
