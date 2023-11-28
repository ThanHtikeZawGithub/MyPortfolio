"use client";
import Link from "next/link";
import Image from "next/image";
import PageTransition from "../PageTransition";
import { motion } from "framer-motion";
import { useState } from "react";
import Parallax from "./_parallax/Parallax";
import About from "./_pages/About";
import Skill from "./_pages/Skill";
import Projects from "./_pages/Projects";
import Contact from "./_pages/Contact";
import Cover from "./_pages/Cover";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
    opacity: 1,
  },
  animate: {
    x: "-120%",
    opacity: 0,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 30,
    },
  },
};

export const FrontPage = () => {
  const [open, setOpen] = useState(false);
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  return (
    <>
      <section className="w-full bg-primary dark:bg-slate-800 overflow-hidden max-w-screen">
        <Cover />
      </section>
      <section className="flex flex-col h-screen w-full justify-center items-center md:flex-row overflow-hidden max-w-screen">
        <Parallax />
      </section>
      <About />
      <Skill />
      <Projects />
      <Contact />
    </>
  );
};
