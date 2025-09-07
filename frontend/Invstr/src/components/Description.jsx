import React from 'react'

const Description = () => {
  return (
    <div className="flex justify-center mt-60 mb-10">
      <div className=" bg-gray-300 shadow-lg border border-gray-200 w-[600px] rounded-2xl p-8 flex flex-col">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
          How INVSTR Works
        </h2>
        <div className="w-26 h-1 bg-gray-400 mx-auto mb-6 rounded-full"></div>
        <p className="text-black text-center leading-relaxed">
          INVSTR is a unified platform that connects <span className="font-semibold">Startups, Investors & Innovators</span>. 
          Whether you’re launching an idea, seeking funding, or exploring new opportunities, 
          INVSTR helps you <span className="font-semibold">discover, collaborate, and grow</span> — all in one place.
        </p>
        <div className="flex justify-center mt-6">
          <button className="bg-cyan-950 hover:bg-green-800 text-white px-6 py-2 rounded-lg shadow-md transition">
            Learn More
          </button>
        </div>

      </div>
    </div>
  )
}

export default Description
