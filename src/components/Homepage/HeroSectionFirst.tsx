import React from 'react'
import {animate, motion, Variants} from 'framer-motion';
const HeroSectionFirst = () => {
    const introAnimate:Variants={
        initial:{
            x:'50%',
            y:window.innerHeight/2,
            fontSize:'20px',
            fontWeight:'900'
        },
        animate:{
            x:0,
            y:0,
            fontSize:'14px',
            fontWeight:'500',
            transition:{delay:1,duration:1}
        }
    }

    const introNameAnimate:Variants={
        initial:{
            fontSize:'70px'
        },
        animate:{
            fontSize:'34px',
            transition:{delay:1,duration:1}

        }
    }

    const TitleAnimate:Variants={
        initial:{
            y:-200,
            opacity:0,
        },
        animate:{
            y:0,
            opacity:1,
            transition:{delay:2.2,duration:1.2}
        }
    }
  return (
    <div>
        <motion.div initial='initial' animate='animate' variants={introAnimate} className='myName'>
            <motion.div variants={introNameAnimate} className='head-label'>Rose Rawal</motion.div>
            <motion.span variants={TitleAnimate}>Web Developer</motion.span>
        </motion.div>
    </div>
  )
}

export default HeroSectionFirst