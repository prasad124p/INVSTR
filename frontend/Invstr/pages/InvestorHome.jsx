import React, {useState} from 'react'
import StartupCards from '../src/components/StartupCards';
import Navbar from '../src/components/Navbar';

const InvestorHome = () => {
    
    const [startups, setStartups] = useState([]);
const getStartups=async()=>{
    try{
        const response= await fetch("http://localhost:5000/investors")
        const data =await response.json();
         console.log("Fetched data:", data); 
        setStartups(data.startups);
    }catch(err){
        console.error("Error Fetching Startups:",err);
    }
  
}

  return (
    <div>
      <Navbar/>
      <h3>get list of all startups</h3>
      <button
        onClick={getStartups}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >see Startups
      </button>
      {startups.length>0 && <StartupCards startups={startups}/>}
    </div>
  )
}

export default InvestorHome
