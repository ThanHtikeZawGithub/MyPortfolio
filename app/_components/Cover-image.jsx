import Image from "next/image";
import { motion } from "framer-motion";
import WebSvg from "./WebSvg";

const floatingVariants = {
    initial: {
        x:0,
        y:0,
        opacity:1,
        rotate: 10,
    },
    animate: {
        opacity:1,
        y:5,
        rotate: 10,
        transition:{
            staggerChildren:0.2,
            type: "spring", 
            stiffness: 20,
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            damping:8,
        }
    },
    dropIcon: {
        opacity:1,
        y:400,
        rotate: 170,
        transition: {
            delay:5,
            duration:3,
        }
    }
}


const CoverImage = () => {
  return (
    <motion.div 
    className=""
    variant={floatingVariants}
    initial="initial"
    animate="animate"
    >
      <Image
        src="/assets/profile_5.png"
        alt="profile"
        priority
        width={500}
        height={550}
        className="z-20 relative"
      />
      <motion.div 
      className="absolute top-6 -rotate-12 left-0"
      variants={floatingVariants}
      animate="animate"
      >
        <Image
          src="/coverImage/i-left.png"
          alt="profile"
          priority
          width={55}
          height={55}
          className=""
        />
      </motion.div>
      <motion.div 
      className="z-30 absolute top-[50%] left-20 rotate-12"
      variants={floatingVariants}
      animate="animate"
      >
        <Image
          src="/coverImage/i-left-b.png"
          alt="profile"
          priority
          width={55}
          height={55}
          className=""
        />
      </motion.div>
      <motion.div 
      className="z-30 absolute bottom-4 right-[35%] -rotate-12"
      variants={floatingVariants}
      animate="animate"
      >
        <Image
          src="/coverImage/i-right-b.png"
          alt="profile"
          priority
          width={55}
          height={55}
          className=""
        />
      </motion.div>
      <motion.div 
      className="absolute top-[15%] right-12 z-30"
      drag
      >
        <Image
          src="/coverImage/i-right-c.png"
          alt="profile"
          priority
          width={100}
          height={100}
          className=""
        />
      </motion.div>
      <motion.div 
      className="absolute z-30 -top-8 right-[30%] -rotate-12"
      variants={floatingVariants}
      animate= "dropIcon"
      >
        <Image
          src="/coverImage/i-right-t.png"
          alt="profile"
          priority
          width={64}
          height={64}
          className=""
        />
      </motion.div>
      <div>
        <WebSvg />
      </div>
    </motion.div>
  );
};

export default CoverImage;
