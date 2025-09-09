import React from "react";
import NavLog from "../src/components/NavLog";

const Services = () => {
  const services = [
    "Investment Advisory",
    "Financial Planning",
    "Tax Planning",
    "Risk Management",
    "IPR Management",
  ];

  return (
    <div>
      {/* Navbar */}
      <NavLog />

      {/* Page Content */}
      <section className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-900 mb-10 text-center">
          Our Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 duration-300"
            >
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                {service}
              </h2>
              <p className="text-gray-700">
                Detailed information about {service.toLowerCase()} will help
                clients make smarter financial decisions.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
