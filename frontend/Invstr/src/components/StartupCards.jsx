import React from 'react'
import { useLoaderData } from 'react-router-dom';

const StartupCards = ({startups}) => {
    
  return (
    <div>
      <div className='startup-list grid grid-cols-2 p-6 gap-6 '>
        {startups.map((startup)=>(
           <div key={startup._id} className='card '>
                <div className='card-body text-white grid grid-cols-4 gap-6 p-10 bg-gray-700 rounded-xl '>
                    <div className='title'>Name :{startup.name}</div>
                    <div className='investorName'>Investor Name :{startup.InvestorName}</div>
                    <div className='funding'>Size Of Funding Round :{startup.FundingRoundSize}</div>
                    <div className='raised'>Capital Raised Till Date{startup.RaisedTillDate}</div>
                </div>
           </div>
        ))}
      </div>
    </div>
  )
}

export default StartupCards
