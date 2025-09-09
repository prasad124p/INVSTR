import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrosshairs } from '@fortawesome/free-solid-svg-icons';
import NavLog from '../src/components/NavLog';

const About = () => {
  return (
    <div>
      <NavLog/>
      <div className='flex flex-col items-center mt-30'>
        <div className='text-xl font-bold border-2 p-2 rounded-full bg-gray-300'> <FontAwesomeIcon icon={faCrosshairs} /> Our Mission & Vision</div>
        <div className='text-5xl font font-bold mt-5'>Fueling the Next Generation of </div>
        <div className='text-5xl font  mt-5 text-gray-500 font-extrabold'> Innovation</div>
        <div className='text-2xl text-center font-boldflex wrap-normal mt-10 px-45'>INVSTR was born from a simple belief: every great idea deserves a chance to change the world. We are dedicated to breaking down barriers and building a global ecosystem where startups, innovators, and investors connect to build the future, together.</div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default About
