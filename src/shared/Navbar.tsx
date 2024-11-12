import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import {motion} from 'framer-motion';
const Navbar=()=>{
    const count=useSelector((state:RootState)=>state.journey.JourneyStart)
    return (
        <div className='nav-wrapper'>
        {count && <motion.ul
        initial={{x:-300}}
        animate={{x:0}}
        transition={{duration:0.6}}
        className='navbar-block'>
                <li>Home</li>
                <li>About Me</li>
                <li>Contact</li>
                <li>Projects</li>
        </motion.ul>}
        </div>
    )
}
export default Navbar;