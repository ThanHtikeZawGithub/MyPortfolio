import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

const variants = {
  open: {
    transition:{
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    }
  }
}

const itemVariants = {
  open: {
    y:0,
    opacity:1,
  },
  closed:{
    y:50,
    opacity:0
  }
}


const SideNavLink = () => {
  const items = [
    "home",
    "about",
    "skills",
    "projects",
    "contact"
  ]
  return (
    <motion.div
    className='flex flex-col gap-6'
    variants={variants}
    >
        {items.map((item) => (
            <motion.div 
            key={item} 
            className='text-2xl font-poppin font-medium text-slate-800'
            variants={itemVariants}
            >
                <a href={`#${item}`} style={{scrollBehavior:"smooth"}} className="scroll-smooth capitalize">{item}</a>
            </motion.div>
        ))}
    </motion.div>
  )
}

export default SideNavLink