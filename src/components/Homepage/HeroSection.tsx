import React, { useState } from 'react'
import {animate, motion, Variants} from 'framer-motion'
const HeroSection = () => {
    const [backgroundImagePlace,setBackgroundImagePlace]=useState(false)
    const parentAnimate:Variants={
        initial:{opacity:0},
        animate:{opacity:1,transition:{staggerChildren:2,delayChildren:1}}
    }
    const childrenVariant: Variants = {
        initial: { opacity: 0},
        animate: { opacity: 1,transition:{duration:1}}
      };
  return (
    <div className={`screen-display ${backgroundImagePlace && 'backgroundLandscape'}`}>
          <motion.div initial='initial' animate='animate' variants={parentAnimate} className='text-header'>
            <motion.div variants={childrenVariant}>Hi I am Rose Rawal.</motion.div>
            <motion.div variants={childrenVariant}>Lets go to my Journey</motion.div>
            <motion.button variants={childrenVariant} className='hero-button' onClick={()=>setBackgroundImagePlace(true)}>Go</motion.button>
          </motion.div>
    </div>
  )
}

export default HeroSection