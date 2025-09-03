import React from "react";
import INVSTR from "../assets/INVSTR.png";
import { useNavigate } from "react-router-dom";

const NavLog = () => {
    const navigate = useNavigate();
  return (
    <div>
      <section className="bg-oklch(98% 0.016 73.684) flex items-center justify-between p-4">
        <div>
          <img
            src={INVSTR}
            alt="INVSTR Logo"
            className="w-25 h-auto rounded-xl"
          />
        </div>
        <div className="flex space-x-6 text-black font-semibold">
          <div className="flex item-center justify-between p-4 text-sm px-20 space-x-8">
            <h3>OUR SERVICES</h3>
            <h3>ABOUT US</h3>
            <h3>OUR PORTFOLIO</h3>
            <h3>BLOG</h3>
            <h3>CONTACT US</h3>
          </div>
        <button className='bg-green-600 rounded-xl px-6 py-2' onClick={()=>navigate("/Login")}>GO to Login </button>

          
        </div>
      </section>
    </div>
  );
};

export default NavLog;
