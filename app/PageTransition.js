import React from 'react'
import { motion } from 'framer-motion'

const PageTransition = () => {
  return (
    <>
    <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-50 bg-primary3'
         initial={{x:'100%',width:'100%'}}
         animate={{x:'0%', width:'0%'}}
         transition={{duration:0.8, ease:'easeInOut'}}
         />
       <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-primary dark:bg-zinc-800'
         initial={{x:'81.9%',width:'81.9%'}}
         animate={{x:'0%', width:'0%'}}
         transition={{duration:0.8, delay:0.2, ease:'easeInOut'}}
         />
    </>
  )
}

export default PageTransition;

<motion.button className='p-5 rounded-2xl bg-secondary'
               initial={{}}>


</motion.button>