import React from "react";
import INVSTR from "../assets/INVSTR.png";


const Navbar = () => {
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
          <h3>OUR SERVICES</h3>
          <h3>ABOUT US</h3>
          <h3>OUR PORTFOLIO</h3>
          <h3>BLOG</h3>
          <h3>CONTACT US</h3>
          
        </div>
      </section>
    </div>
  );
};

export default Navbar;
