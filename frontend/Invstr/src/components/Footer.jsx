import React from 'react'
import INVSTR from "../assets/INVSTR.png";
const Footer = () => {
  return (
    <div className='flex flex-2 ml-10 gap-10 mb-10 text-gray-500'>
      <div className='flex flex-col w-2/5 mt-10'>
        <div>
            {/* <img
            src={INVSTR}
            alt="INSVTR Logo"
            className="w-[150px] h-[70px] object-fill"
            /> */}
        </div>
        
        <div className='px-20'>
            <p className='text-base font-bold'>24/7 Call US</p>
            <p className='text-gray-700 font-bold text-xl'> +91-88XXXXXX00</p>
            <hr/>
        </div>
                

        <div className='px-20'>
            <p className='text-base font-bold'>Get Updates</p>
            <p className='text-gray-700 font-bold text-xl'>Welcome to INVSTR, Signup For Our Latest news & Article. We won't Spam you.</p>
            <div className='group'>
                <input
            className=' bg-gray-300 group-hover:text-gray-700 text-black w-full mt-2 placeholder:text-center border-black border-2 py-2 rounded-full'
            type="email"
            placeholder=' Enter Email'
            />
            </div>
        </div>
      </div>
      <div className='flex flex-2 text-2xl w-full justify-around  mt-10'>
        <div className='text-xl'>
            <h3 className=' text-2xl font-bold text-gray-700'>Our Services</h3>
            <div className='mt-2 font-bold space-y-1.5 '>
                <p className="cursor-pointer hover:text-gray-700">&gt; Investment advisory</p>
                <p className="cursor-pointer hover:text-gray-700">&gt; Financial Planning</p>
                <p className="cursor-pointer hover:text-gray-700">&gt; Tax Planning</p>
                <p className="cursor-pointer hover:text-gray-700">&gt; Risk Management</p>
                <p className="cursor-pointer hover:text-gray-700">&gt; IPR Management</p>
            </div>
        </div>
        <div className='text-xl '>
            <h3 className='text-2xl  text-gray-700 font-bold'>Quick Links</h3>
            <div className='mt-2 font-bold space-y-1.5' >
                <p className="cursor-pointer hover:text-gray-700">&gt; About Us</p>
                <p className="cursor-pointer hover:text-gray-700">&gt; Testimonials</p>
                <p className="cursor-pointer hover:text-gray-700">&gt; Our Team</p>
                <p className="cursor-pointer hover:text-gray-700">&gt; Latest Articles</p>
                <p className="cursor-pointer hover:text-gray-700">&gt; Privacy Policy</p>        
            </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Footer
