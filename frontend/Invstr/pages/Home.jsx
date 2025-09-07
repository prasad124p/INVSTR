import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavLog from '../src/components/NavLog';
import MainHome from '../src/components/MainHome';
import Description from '../src/components/Description';
import Features from '../src/components/Features';
import Landing from '../src/components/Landing';
import Footer from '../src/components/footer';



const Home = () => {
    const navigate=useNavigate();
  return (
    <div>
      
      {/* <br/> */}
      <div className='bg-oklch(98% 0.016 73.684)  min-h-screen'>
        <NavLog/>
        <Landing/>   
        <MainHome/>
        <Description/>
        <Features/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home
