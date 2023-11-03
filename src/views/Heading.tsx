import React from 'react'
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';

const Heading = () => {
  return (
    <div className='py-5 px-3 sticky bg-primary text-white text-xl top-0 left-0'>
        
        <motion.h1 className='font-bold'>

            <Typewriter
                words={["TechTenets", ]}
                cursor
                cursorStyle="_"
                typeSpeed={250}
                deleteSpeed={150}
                
                // loop
              />
        </motion.h1>

    </div>
  )
}

export default Heading