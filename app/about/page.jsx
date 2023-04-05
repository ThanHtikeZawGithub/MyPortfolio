'use client'
import Head from 'next/head';
import React from 'react'
import PageTransition from '../PageTransition';
import AnimatedText from '../AnimatedText';
import About from './About';
import Skill from './Skill';
import Projects from './Projects';
import Contact from './Contact';


const AboutPage = () => {
  return (
    <>
    <Head>
        <title>Than Htike Zaw | About</title>
        <meta name='description' content='this is about.' />
    </Head>
    <PageTransition/>
    <main className='bg-primary dark:bg-zinc-800 text-dark dark:text-primary transition-all duration-700'>
       <About/>
       <Skill/>
       <Projects/>
       <Contact/>
    </main>
    
    </>
  )
}

export default AboutPage;