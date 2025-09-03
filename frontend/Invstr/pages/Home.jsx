import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavLog from '../src/components/NavLog';
import MainHome from '../src/components/MainHome';



const Home = () => {
    const navigate=useNavigate();
  return (
    <div>
      
      {/* <br/> */}
      <div className='bg-oklch(98% 0.016 73.684)  min-h-screen'>
        <NavLog/>
        <MainHome/>
      </div>
    </div>
  )
}

export default Home
