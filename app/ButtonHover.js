import { motion } from "framer-motion";



const ButtonComponent = () => {
    const variants = {
      hover: {
        scaleX: 1.1,
        transition: {
          duration: 0.2,
          yoyo: Infinity,
        },
      },
    };
  
    return (
      <motion.button variants={variants} whileHover="hover"
      className="  bg-blue-500 hover:bg-blue-700
      text-white font-bold py-2 px-4 rounded">
        Click Me
      </motion.button>
    );
  };
  
  export default ButtonComponent;