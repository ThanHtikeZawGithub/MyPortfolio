import React from 'react'
import { Arrow } from './Icons'
import { motion } from 'framer-motion'


const variants = {
    initial:{
        x:0,
        opacity: 0,
    },
    animate:{
        x:50,
        opacity:1,
        transition:{
            duration:3,
            staggerChildren:0.8,
            repeat: Infinity,
        }
    }
}



const ArrowNav = ({className}) => {
  return (
    <motion.div className={`flex gap-0 ${className}`}
    variants={variants}
    initial='initial'
    animate='animate'
    
    >
    <Arrow className='-mr-2'/>
    <Arrow className='-ml-6'/>
    <Arrow className='-ml-8'/>
    
    </motion.div>
  )
}

export default ArrowNav