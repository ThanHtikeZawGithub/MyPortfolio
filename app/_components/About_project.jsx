import Image from "next/image"

const About_project = () => {
  return (
    <div>
        <div>
            <Image 
            src={'assets/web-development.svg'}
            alt="projects"
            width={40}
            height={40}
            />
        </div>
        <div>
        <Image 
            src={'assets/web-development-svgrepo-com.svg'}
            alt="projects"
            width={40}
            height={40}
            />
        </div>
        <div></div>
    </div>
  )
}

export default About_project