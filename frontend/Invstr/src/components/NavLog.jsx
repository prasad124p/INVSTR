import React from "react";
import INVSTR from "../assets/INVSTR.png";
import { useNavigate } from "react-router-dom";

const NavLog = () => {
    const navigate = useNavigate();
    const isLoggedIn= !!localStorage.getItem("token");
  return (
    <div>
      <section className="bg-gray-400 flex items-center justify-between px-6 py-3">
        <div>
          <img
            src={INVSTR}
            alt="INVSTR Logo"
            className="w-24 h-auto py-2"
          />
        </div>
        <div className="flex text-black items-center space-x-8 font-bold justify-center">
          <div className="flex  space-x-8 font-semibold text-sm ">
            <div className="group ">
              <h3 onClick={()=>navigate("/Services")}>OUR SERVICES</h3>
            <hr className="border-none opacity-0 group-hover:opacity-100 transition-opacity duration-500  outline-none h-1 rounded-full bg-gray-700 w-4/5 m-auto " />
            </div>

            <div className="group">
              <h3 onClick={()=>navigate("/About")}>ABOUT US</h3>
            <hr className="border-none opacity-0 group-hover:opacity-100 transition-opacity duration-500  outline-none h-1 rounded-full bg-gray-700 w-4/5 m-auto " />
            </div>

            <div className="group">
              <h3 onClick={()=>navigate("/Portfolio")}>OUR PORTFOLIO</h3>
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
          {isLoggedIn ?(
              <button
                className='bg-cyan-950 rounded-xl px-6 py-4 text-white hover:bg-green-800 self-center hover:scale-105 transition'
                onClick={()=>{
                localStorage.removeItem("token");
                navigate("/");
              }}>Logout</button>
            ):(
              <button  
              className='bg-cyan-950 rounded-xl px-6 py-2 text-white hover:bg-green-800 self-center hover:scale-105 transition'
              onClick={()=>{navigate("/Login")}}>
                Login
              </button>
            )}
        </div>
      </section>
    </div>
  );
};

export default NavLog;

