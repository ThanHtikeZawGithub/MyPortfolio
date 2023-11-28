'use client';

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Cursor = () => {

  const [position, setPosition] = useState({x:0, y:0})

  useEffect(() => {
    const mouseMove = (e) => {
        setPosition({x:e.clientX, y:e.clientY})
    };
    window.addEventListener("mousemove", mouseMove);
  
    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])
  
  return (
    <motion.div 
    className='z-50 w-[50px] h-[50px] rounded-full border border-solid border-white fixed'
    animate={{
        x:position.x+15,
        y:position.y+15
    }}
    >
    </motion.div>
  )
}

export default Cursor