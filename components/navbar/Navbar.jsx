"use client";
import React, { useState, useEffect } from "react";
import {
  LinkedInIcon,
  GithubIcon,
  FacebookIcon,
  InstagramIcon,
  SunIcon,
  MoonIcon,
} from "../../lib/Icons";
import { motion } from "framer-motion";
import useDarkTheme from "../../hooks/useDarkTheme";
import SideNav from "./SideNav";

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
      // className={`${
      //   isTopOfPage ? "fixed top-0 w-full " : "fixed top-0 backdrop-blur-2xl "
      // }w-full px-8 md:px-16 py-3 font-medium z-50 flex items-center justify-between`}
      className="fixed top-0 w-screen px-8 md:px-16 py-3 font-medium z-50 flex items-center justify-between"
    >
      <SideNav />
      {/* <div className=" bg-slate-900 font-bold font-alegreya text-white text-5xl px-4 py-2 rounded-sm shadow-slate-900 shadow-lg flex items-center justify-between"> */}
      {/* <img src="/assets/logo.png" alt="logo" className="w-12 h-auto" /> */}
      {/* T
         </div> */}
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
            href="https://www.linkedin.com/in/than-htike-zaw-2653b71aa/"
            target={"_blank"}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.9 }}
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/profile.php?id=100085454234498"
            target={"_blank"}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.9 }}
          >
            <FacebookIcon />
          </motion.a>
          <motion.a
            href="https://instagram.com/thanh_zaw?igshid=YmMyMTA2M2Y="
            target={"_blank"}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.9 }}
          >
            <InstagramIcon />
          </motion.a>
        </div>
        <div className="pt-4 md:pt-0">
          <button
            onClick={() => setMode(mode === "dark" ? "light" : "dark")}
            className="flex items-center justify-between rounded-full p-1 bg-primary1"
          >
            {mode === "dark" ? <MoonIcon className="fill-dark" /> : <SunIcon />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;