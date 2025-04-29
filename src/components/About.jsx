// src/pages/About.jsx
import React from 'react';


function About() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white">
      
      {/* Buttons Section */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-6 rounded-full transition-all duration-300">
          About Me
        </button>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-6 rounded-full transition-all duration-300">
          Skills
        </button>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-6 rounded-full transition-all duration-300">
          Projects
        </button>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-6 rounded-full transition-all duration-300">
          Internships
        </button>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-6 rounded-full transition-all duration-300">
          Experience
        </button>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-6 rounded-full transition-all duration-300">
          Contact
        </button>
      </div>
    </section>
  );
}

export default About;
