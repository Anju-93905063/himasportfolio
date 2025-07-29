import React from 'react';

function Hero() {
  return (
    <section className="flex flex-col justify-center items-center text-center h-screen bg-gradient-to-r from-blue-400 to-indigo-600">
      <h1 className="text-4xl md:text-6xl font-bold text-white">Hi, I'm Himanjali</h1>
      <p className="mt-4 text-lg md:text-2xl text-white">Aspiring Developer | Tech Enthusiast</p>
      <a href="#contact" className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-md hover:bg-blue-100 transition">
        Contact Me
      </a>
    </section>
  );
}

export default Hero;
