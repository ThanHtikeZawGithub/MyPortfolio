'use client'
import Head from 'next/head';
import React from 'react'
import PageTransition from '../PageTransition';
import About from './About';
import Skill from './Skill';
import Projects from './Projects';
import Contact from './Contact';
import { Home } from '../Icons';
import Link from 'next/link';


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
       <div className='fixed bottom-12 items-center z-50 text-center text-white bg-yellow-600 right-12 border-x-2 border rounded-md border-dark'>
       <Link
            href='/'
          >
            <Home/>
        </Link>
       </div>
       
    </main>
    
    </>
  )
}

export default AboutPage;