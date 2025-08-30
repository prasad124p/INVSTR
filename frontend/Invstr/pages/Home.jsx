import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from   "../src/components/Navbar";



const Home = () => {
    const navigate=useNavigate();
  return (
    <div>
      <Navbar/> 
      {/* <br/> */}
      <div className='bg-gray-200 min-h-screen'>
        <div className='flex py-10 text-white gap-2 justify-around '>
          <button className='bg-gray-900 rounded-xl px-10 py-4' onClick={()=>navigate("/Login")}>GO to Investor Login </button>
          <button className='bg-gray-900 rounded-xl px-10 py-4' onClick={()=>navigate("/Login")}>GO to Startup Login </button>
          <button className='bg-gray-900 rounded-xl px-10 py-4' onClick={()=>navigate("/Login")}>GO to Admin Login </button>
        </div> 
      </div>
    </div>
  )
}

export default Home
