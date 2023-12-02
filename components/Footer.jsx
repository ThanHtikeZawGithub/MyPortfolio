import { FacebookIcon, GithubIcon, InstagramIcon, LinkedInIcon } from "../lib/Icons"

const Footer = () => {
  return (
    <div className="bg-indigo-900 h-full w-full px-0 font-poppin">
    <div className="flex items-center justify-between px-8 md:px-20">
      <div className="py-4">
        <h3 className="font-semibold text-base md:text-xl text-primary font-open">
          Than Htike Zaw
        </h3>
        <p className="font-semibold text-sm md:text-lg text-primary font-open">
          Full-stack developer
        </p>
      </div>
      <div className="flex items-center justify-between gap-1 md:gap-4">
        <a
          href="https://www.linkedin.com/in/than-htike-zaw-2653b71aa/"
          target={"_blank"}
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100085454234498"
          target={"_blank"}
        >
          <FacebookIcon />
        </a>
        <a href="https://github.com/ThanHtikeZawGithub" target={"_blank"}>
          <GithubIcon />
        </a>
        <a
          href="https://instagram.com/thanh_zaw?igshid=YmMyMTA2M2Y="
          target={"_blank"}
        >
          <InstagramIcon />
        </a>
      </div>
    </div>
    <div className="py-5 text-center">
      <p className="text-xs md:text-base md:text-center font-semibold text-primary">
        Copyright
        <sup className="text-xs md:text-base font-semibold text-primary">
          &copy;
        </sup>
        All Reserved Rights 2022
        <span className="font-semibold text-primary text-xs md:text-base ">
          / Than Htike Zaw
        </span>
      </p>
    </div>
  </div>
  )
}

export default Footer