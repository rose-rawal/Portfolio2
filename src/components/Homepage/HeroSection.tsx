import React, { useState } from 'react'
import {animate, AnimatePresence, motion, Variants} from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux';
import { reverse } from '../../store/slice.tsx';
import { RootState } from '../../store/store';
import HeroSectionFirst from './HeroSectionFirst.tsx';

const HeroSection = () => {
    const [backgroundImagePlace,setBackgroundImagePlace]=useState(false)
    const journeyStart=useSelector((state:RootState)=>state.journey.JourneyStart)
    const [timePassed,setTimePassed]=useState(false)
    const dispatch =useDispatch();

    const heroVariant:Variants={
      initial:{opacity:0},
      animate:{opacity:1},
      exit:{opacity:0,transition:{duration:0.3}}
    }

    const parentAnimate:Variants={
        initial:{opacity:0},
        animate:{opacity:1,transition:{staggerChildren:2,delayChildren:1}},
        exit:{opacity:0,transition:{duration:0.3}}
    }
    const childrenVariant: Variants = {
        initial: { opacity: 0},
        animate: { opacity: 1,transition:{duration:1}},
        exit: { opacity: 0, transition: { duration: 0.3 } }

      };

    const handleJourneyStart=()=>{
      dispatch(reverse())
      setTimeout(()=>{setTimePassed(true)},1000)
      setTimeout(()=>{setBackgroundImagePlace(true)},1000)
    }
  return (
    <div className={`screen-display ${backgroundImagePlace && 'backgroundLandscape'}`}>
          <AnimatePresence>
          {!journeyStart &&
            <motion.div key='journeyNotStarted' initial='initial' animate='animate' exit='exit' variants={parentAnimate} className='text-header'>
              <motion.div variants={childrenVariant} key='child'>Hi I am Rose Rawal.</motion.div>
              <motion.div variants={childrenVariant} key='child2'>Lets go to my Journey</motion.div>
              <motion.button variants={childrenVariant} key='button' className='hero-button' onClick={handleJourneyStart}>Go</motion.button>
            </motion.div>
          }
          {
            journeyStart && timePassed &&
            <motion.div key='journeyStarted' initial='initial' animate='animate' exit='exit' variants={heroVariant} className='hero-head w-h-full'>
              <HeroSectionFirst/>
            </motion.div>
            
            
          
          }
          </AnimatePresence>
    </div>
  )
}

export default HeroSection