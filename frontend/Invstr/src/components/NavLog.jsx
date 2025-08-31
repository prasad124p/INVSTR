import React from "react";
import INVSTR from "../assets/INVSTR.png";
import { useNavigate } from "react-router-dom";

const NavLog = () => {
    const navigate = useNavigate();
  return (
    <div>
      <section className="bg-black flex items-center justify-between p-4">
        <div>
          <img
            src={INVSTR}
            alt="INVSTR Logo"
            className="w-25 h-auto rounded-xl"
          />
        </div>
        <div className="flex space-x-6 text-white font-semibold">
          <div className="flex item-center justify-between p-4 text-sm px-20 space-x-3  ">
            <h3>OUR SERVICES</h3>
            <h3>ABOUT US</h3>
            <h3>OUR PORTFOLIO</h3>
            <h3>BLOG</h3>
            <h3>CONTACT US</h3>
          </div>
        <button className='bg-green-800 rounded-xl px-10 py-4' onClick={()=>navigate("/Login")}>GO to Login </button>

          
        </div>
      </section>
    </div>
  );
};

export default NavLog;
