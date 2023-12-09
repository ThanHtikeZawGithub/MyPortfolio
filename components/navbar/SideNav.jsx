import {useRef, useState } from 'react'
import ToggleButton from './ToggleButton'
import { motion } from 'framer-motion';
import SideNavLink from './SideNavLink';
import { useOnClikcOutside } from '@/hooks/useOnClikcOutside';

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

  const navRef = useRef();

  useOnClikcOutside(navRef, () => setOpen(false));
  return (
    <motion.nav
    className='bg-transparent cursor-pointer flex flex-col items-center justify-center text-black'
    animate={open ? "open" : "closed"}
    ref={navRef}
    >
        <motion.div 
        className='fixed md:w-[400px] w-[200px] top-0 left-0 bottom-0 h-screen bg-white flex flex-col items-center justify-center'
        variants={variants}
        ref={navRef}
        >
        <SideNavLink />
        </motion.div>
        <ToggleButton setOpen={setOpen} />
    </motion.nav>
  )
}

export default SideNav