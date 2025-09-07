import React from 'react'
import { useNavigate } from 'react-router-dom'

const MainHome = () => {
    const navigate= useNavigate();
    const handleGetStarted=(role)=>{
        navigate(`/signup?role=${role}`)
    };
  return (
    <div className='mt-5 mb-10'>
      <div className='ml-115 mr-85 py-20'>
        <h1 className=' flex-wrap text-5xl font-bold mb-4'>Connecting Startups, Investors & Innovators On One Platform </h1>
        <p className='px-45 mt-5 text-2xl font-semibold'>Discover, Invest and Grow</p>
      </div>
      <div>
        <div className=' flex justify-center gap-10'>
            <div className=' w-80 max-w-xs px-10 transition-transform transform hover:scale-105 py-10 bg-gray-300 flex flex-col justify-between rounded-2xl shadow-md'>
                <div className='font-bold text-xl '>Startup</div>
                <div className='mb-8 mt-5'>Launch and grow your startup</div>
                <div className="group flex items-center text-blue-700 mb-2 cursor-pointer" onClick={()=>handleGetStarted("startup")}>
                    <span className='translation-colors duration-200 group-hover:text-blue-800 group-hover:scale-110'>Get Started</span>
                    <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </div>           
            </div>
            <div className='w-80 max-w-xs px-10 py-10 transition-transform transform hover:scale-105 bg-gray-300 flex flex-col justify-between rounded-2xl shadow-md'>
                <div className='font-bold text-xl'>Investor</div>
                <div className='mb-8 mt-5'>Explore Investment Opportunities</div>
                <div className="group flex items-center text-blue-700 mb-2  cursor-pointer" onClick={()=>handleGetStarted("investor")}>
                    <span className='translation-colors duration-200 group-hover:text-blue-800 group-hover:scale-110'>Get Started</span>
                    <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </div>        
            </div>
            <div className='w-80 flex flex-col justify-between max-w-xs px-10 py-10 transition-transform transform hover:scale-105 bg-gray-300  rounded-2xl shadow-md'>
                <div className='font-bold text-xl'>Innovator</div>
                <div className='mb-8 mt-5'>Give Your Idea A Chance</div>
                <div className="group flex items-center text-blue-700 mb-2 cursor-pointer" onClick={()=>handleGetStarted("innovator")}>
                    <span className='translation-colors duration-200 group-hover:text-blue-800 group-hover:scale-110'>Get Started</span>
                    <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MainHome
