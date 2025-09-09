import React from "react";
import NavLog from "../src/components/NavLog";

const Portfolio = () => {
  const projects = [
    { name: "Project Alpha", description: "Investment portfolio optimization" },
    { name: "Project Beta", description: "Financial planning tool for SMEs" },
    { name: "Project Gamma", description: "Tax filing automation software" },
    { name: "Project Delta", description: "Risk analysis dashboard" },
    { name: "Project Epsilon", description: "IPR management system" },
  ];

  return (
    <div>
      {/* Navbar */}
      <NavLog />

      {/* Page Content */}
      <section className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-900 mb-10 text-center">
          Our Portfolio
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 duration-300"
            >
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                {project.name}
              </h2>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
