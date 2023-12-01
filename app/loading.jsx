'use client'
import React, { useEffect, useRef } from 'react'
import {HashLoader} from 'react-spinners';
import { easeInOut, motion } from 'framer-motion';

const Loading = () => {
  const splashRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      splashRef.current.style.display='none';
    }, 2000);
  }, []);
  return (
        <motion.div 
        initial={{y:'0%', height:'100%', width:'100%'}}
        animate={{y: '100%'}}
        transition={{
          duration:2,
          delay:0.5,
          ease:'easeInOut'
        }}
        className='z-[999] absolute h-screen w-full top-0 left-0 bottom-0 bg-primaryBg dark:bg-gradient-dark flex items-center justify-center text-3xl font-bold'
        ref={splashRef}
        >
        <HashLoader 
          color='#5B5B55'
          speedMultiplier={1}/>
      </motion.div>
  )
}

export default Loading;