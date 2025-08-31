import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavLog from '../src/components/NavLog';



const Home = () => {
    const navigate=useNavigate();
  return (
    <div>
      <NavLog/>
      {/* <br/> */}
      <div className='bg-gray-200 min-h-screen'>
        <div>
        </div> 
      </div>
    </div>
  )
}

export default Home
