"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { LinkedInIcon, GithubIcon, FacebookIcon, InstagramIcon, SunIcon, MoonIcon } from "./Icons";
import { motion } from "framer-motion";
import ArrowNav from "./ArrowNav";
import {usePathname } from 'next/navigation';
import useDarkTheme from "./useDarkTheme";

const Navbar = () => {
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const pathname = usePathname();  
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
      }top-0 w-full px-20 py-3 font-medium z-20 flex items-center justify-between`}
    >
      <nav className="flex items-center justify-end">
        <div className=" flex items-center gap-8">
          <div>
            <img src="/assets/logo.png" alt="logo" className="w-12 h-auto" />
          </div>
          <div className="ml-32 gap-8 text-dark hidden md:flex md:items-center">
            <ArrowNav className={"ml-72"} />
          {pathname === '/' ? (
              <Link
              href='/about'
              className={`text-xl dark:text-primary3 font-semibold tracking-widest font-open`}
            >
              About
            </Link>
          ):(
            <Link
            href='/'
            className={`text-xl dark:text-primary3 font-semibold tracking-widest font-open`}
          >
            Home
          </Link>
          )}
          </div>
        </div>
      </nav>
      <nav className="hidden md:flex md:items-center gap-4">
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
        <button onClick={()=> setMode(mode === 'dark' ? 'light':'dark')}
        className="flex items-center justify-between rounded-full p-1 bg-primary1">
            {mode === 'dark' ? (
              <MoonIcon className='fill-dark'/>
            ):(
              <SunIcon/>
            )}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
