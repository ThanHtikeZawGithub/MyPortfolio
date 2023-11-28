import React, { useState } from 'react'
import ToggleButton from './ToggleButton'
import { motion } from 'framer-motion';
import SideNavLink from './SideNavLink';

const SideNav = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
        clipPath: "circle(1200px at 50px 50px)",
        transition: {
            type: "spring",
            stiffness: 200,
        }
    },
    closed: {
        clipPath: "circle(30px at 50px 50px)",
        transition:{
            type:'spring',
            stiffness: 400,
            damping: 40,
        }
    }
  }

  return (
    <motion.div
    className='bg-transparent cursor-pointer flex flex-col items-center justify-center text-black'
    animate={open ? "open" : "closed"}
    >
        <motion.div 
        className='fixed w-[400px] top-0 left-0 bottom-0 h-screen bg-white flex flex-col items-center justify-center'
        variants={variants}
        >
        <SideNavLink />
        </motion.div>
        <ToggleButton setOpen={setOpen} />
    </motion.div>
  )
}

export default SideNav