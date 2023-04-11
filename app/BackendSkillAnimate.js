import React from 'react'
import { motion } from 'framer-motion'

const BackendSkillAnimate = () => {
  return (
    <div className="flex justify-between items-center gap-1">
      <motion.div className='flex-col justify-center items-center'
      initial={{x:0,y:-20, opacity:0}}
      animate={{x:-40,y:20, opacity:1,
          transition:{
            delay:0,
            duration:0.2
          }
            }
              }>
          <img src='/assets/node.png' alt="language" className="w-auto h-6 mx-auto"  />
          <h3 className="text-sx font-open font-semibold">Nodejs</h3>
      </motion.div>
      <motion.div className="flex-col justify-center"
      initial={{x:0,y:-20, opacity:0}}
      animate={{x:-30,y:20, opacity:1,
          transition:{
            delay:0.2,
            duration:0.2
          }
            }
              }>
          <img src='/assets/python.png' alt="language" className="w-auto h-6 mx-auto"  />
          <h3 className="text-sx font-open font-semibold">Python</h3>
      </motion.div>
      <motion.div className="flex-col justify-center"
      initial={{x:0,y:-20, opacity:0}}
      animate={{x:-10,y:20, opacity:1,
          transition:{
            delay:0.4,
            duration:0.2
          }
            }
              }>
          <img src='/assets/nextjs.png' alt="language" className="w-auto h-6 mx-auto"  />
          <h3 className="text-sx font-open font-semibold">Nextjs</h3>
      </motion.div>
      {/* <motion.div className="flex-col justify-center"
      initial={{x:0,y:-20, opacity:0}}
      animate={{x:10,y:20, opacity:1,
          transition:{
            delay:0.6,
            duration:0.2
          }
            }
              }>
          <img src='/assets/react.png' alt="language" className="w-auto h-6 mx-auto"  />
          <h3 className="text-sx font-open font-semibold">Reactjs</h3>
      </motion.div>
      <motion.div className="flex-col justify-center"
      initial={{x:0,y:-20, opacity:0}}
      animate={{x:30,y:20, opacity:1,
          transition:{
            delay:0.8,
            duration:0.2
          }
            }
              }>
          <img src='/assets/nextjs.png' alt="language" className="w-auto h-6 mx-auto"  />
          <h3 className="text-sx font-open font-semibold">Nextjs</h3>
      </motion.div> */}
    </div>
  )
}

export default BackendSkillAnimate;