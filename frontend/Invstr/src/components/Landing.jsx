import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Lpg2 from "../assets/Lpg2.png";
import Lpg3 from "../assets/Lpg3.png";
import Lpg4 from "../assets/Lpg4.png";
import chairs from "../assets/chairs.jpg";

const slides = [
  {
    title: "Looking To Invest In Startups And Tap Into High Growth Ventures?",
    subtitle: "INVSTR Connects You With Next Big Thing!",
    bullets: [],
    img: Lpg2,
  },
  {
    title: "Don't Let Funding Hold You Back, Be The Next Big Thing",
    bullets: [
      "Connect With Investors",
      "Simplify Fund Raising",
      "Build Your Startup",
    ],
    img: Lpg3,
  },
  {
    title: "Turn Your Ideas Into Reality, Shape The Future With Innovation",
    bullets: [
      "Showcase Your Innovative Ideas",
      "Collaborate With Startups & Investors",
      "Bring Your Vision To Life",
    ],
    img: Lpg4,
  },
];


const Landing = () => {
  const navigate=useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0)
  useEffect(() => {
    const interval=setInterval(()=>{
      setCurrentSlide((prev)=>(prev + 1)%slides.length)
    },4000);
    return()=>clearInterval(interval);
  }, [slides.length])
  

  return (
        <div className="mb-10 relative overflow-hidden min-h-screen bg-cover bg-bottom">
      {/* Slides */}
      <div
        className="flex transition-transform duration-1000"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="flex flex-2 h-[90vh] min-w-full px-20">
            <div className="flex flex-col justify-center flex-1">
              <h1 className="text-5xl font-bold mb-6">{slide.title}</h1>
              {slide.subtitle && (
                <p className="text-2xl font-semibold mb-6">{slide.subtitle}</p>
              )}
              {slide.bullets?.length > 0 && (
                <ul className="text-2xl font-semibold mb-6 list-disc pl-5">
                  {slide.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              )}
              <button
                className="bg-cyan-950 rounded-xl px-6 py-3 text-white hover:bg-green-800 hover:scale-105 transition"
                onClick={() => navigate("/signup")}
              >
                Get Started
              </button>
            </div>
            <div className="flex-1 flex justify-center pl-10 items-center">
              <img src={slide.img} alt="Slide Visual" className="max-h-[55%]" />
            </div>
          </div>
        ))}
      </div>
{/* nav-dot */}
        <div className="absolute bottom-15 left-1/2 transform -translate-x-1/2 flex gap-3">
            {slides.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full cursor-pointer transition ${
                  currentSlide === index ? "bg-cyan-950 scale-110" : "bg-gray-400"
                }`}
              />
            ))}
        </div>
    </div>
  )
}

export default Landing
