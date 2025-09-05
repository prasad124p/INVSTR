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
            className="w-25 h-auto py-2"
          />
        </div>
        <div className="flex space-x-6 text-black font-semibold">
          <div className="flex item-center justify-between p-4 text-sm px-20 space-x-8">
            <div className="group ">
              <h3>OUR SERVICES</h3>
            <hr className="border-none opacity-0 group-hover:opacity-100 transition-opacity duration-500  outline-none h-1 rounded-full bg-gray-700 w-4/5 m-auto " />
            </div>

            <div className="group">
              <h3>ABOUT US</h3>
            <hr className="border-none opacity-0 group-hover:opacity-100 transition-opacity duration-500  outline-none h-1 rounded-full bg-gray-700 w-4/5 m-auto " />
            </div>

            <div className="group">
              <h3>OUR PORTFOLIO</h3>
            <hr className="border-none opacity-0 group-hover:opacity-100 transition-opacity duration-500  outline-none h-1 rounded-full bg-gray-700 w-4/5 m-auto " />
            </div>

            <div className="group">
              <h3>BLOG</h3>
            <hr className="border-none opacity-0 group-hover:opacity-100 transition-opacity duration-500  outline-none h-1 rounded-full bg-gray-700 w-4/5 m-auto " />
            </div>

            <div className="group">
              <h3>CONTACT US</h3>
            <hr className="border-none opacity-0 group-hover:opacity-100 transition-opacity duration-500  outline-none h-1 rounded-full bg-gray-700 w-4/5 m-auto " />
            </div>

          </div>
        <button   className='bg-cyan-950 rounded-xl px-6 py-2 text-white hover:bg-green-800 hover:scale-105 transition' onClick={()=>navigate("/Login")}> Login </button>
        </div>
      </section>
    </div>
  );
};

export default NavLog;
