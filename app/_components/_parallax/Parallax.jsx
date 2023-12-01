import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"


const Parallax = () => {
  const ref = useRef()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "300%"])
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])


  return (
    <section className="flex flex-col h-screen w-full justify-center items-center md:flex-row overflow-hidden max-w-screen">
    <div
      className='relative flex items-center justify-center w-full h-screen bg-primaryBg dark:bg-gradient-dark overflow-hidden'
      ref={ref}
    >
      <motion.h1
        className="font-bold text-3xl top-[40%] absolute font-poppin text-slate-700"
        style={{ y: yText }}
      >
        About Me
      </motion.h1>
      <motion.div
        className="bg-mountain md:bg-cover bg-contain bg-no-repeat bg-bottom w-full h-full absolute z-30 overflow-hidden"
      ></motion.div>
      <motion.div
        className="dark:bg-planet bg-sun md:bg-cover bg-contain bg-no-repeat bg-bottom w-[100%] h-[100%] absolute z-10 overflow-hidden"
        style={{ x: yBg }}
      >
      </motion.div>
      <motion.div
        className="dark:bg-star bg-cloud md:bg-cover bg-contain bg-bottom w-[120%] h-screen absolute z-20"
        style={{ x: yBg }}
      >
      </motion.div>
    </div>
    </section>
  )
}

export default Parallax