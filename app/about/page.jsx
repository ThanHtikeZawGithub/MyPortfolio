'use client'
import Head from 'next/head';
import React, { useState, useEffect } from 'react'
import PageTransition from '../PageTransition';
import About from './About';
import Skill from './Skill';
import Projects from './Projects';
import Contact from './Contact';
import { Home } from '../Icons';
import Link from 'next/link';


const AboutPage = () => {
  const [isloading,setIsloading] = useState(true);

  useEffect(()=>{
    setIsloading(false);
  },[]);

  if (isloading){
    return (
      <div className='h-screen w-full bg-primary3 flex items-center justify-center text-3xl font-bold'>
        Loading...
      </div>
    )
  };

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
       <button className='fixed bottom-8 items-center  z-40 text-center text-white bg-yellow-600 right-8 p-2 border shadow-md shadow-dark rounded-md border-dark'>
       <Link
            href='/'
          >
            <Home/>
        </Link>
       </button>
       
    </main>
    
    </>
  )
}

export default AboutPage;