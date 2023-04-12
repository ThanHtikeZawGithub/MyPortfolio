"use client";
import React, { useState, useEffect } from "react";
import { LinkedInIcon, GithubIcon, FacebookIcon, InstagramIcon, SunIcon, MoonIcon } from "./Icons";
import { motion } from "framer-motion";
import useDarkTheme from "./useDarkTheme";

const Navbar = () => {
  const [isTopOfPage, setIsTopOfPage] = useState(true);
 
  const [mode, setMode] = useDarkTheme();
  useEffect(() => {
    
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        isTopOfPage ? "fixed top-0 w-full " : "fixed top-0 backdrop-blur-2xl "
      }w-full px-8 md:px-16 py-3 font-medium z-20 flex items-center justify-between`}
    >
      <nav className="flex items-center justify-between">
        <div className=" flex items-center justify-between">
            <img src="/assets/logo.png" alt="logo" className="w-12 h-auto" />
         </div>
      </nav>
      <nav className="flex items-center gap-4">
        <div className="hidden md:flex items-center justify-between gap-3">
        <motion.a
          href="https://github.com/ThanHtikeZawGithub"
          target={"_blank"}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="/"
          target={"_blank"}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="/"
          target={"_blank"}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
        >
          <FacebookIcon />
        </motion.a>
        <motion.a
          href="/"
          target={"_blank"}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
        >
          <InstagramIcon />
        </motion.a>
        </div>
        <div>
        <button onClick={()=> setMode(mode === 'dark' ? 'light':'dark')}
        className="flex items-center justify-between rounded-full p-1 bg-primary1">
            {mode === 'dark' ? (
              <MoonIcon className='fill-dark'/>
            ):(
              <SunIcon/>
            )}
        </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
