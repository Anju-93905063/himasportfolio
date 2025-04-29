import React from 'react';

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center">
      <h1 className="text-white text-2xl font-bold">Himanjali</h1>
      <div className="space-x-4">
        <a href="#home" className="text-white hover:underline">Home</a>
        <a href="#about" className="text-white hover:underline">About</a>
        <a href="#contact" className="text-white hover:underline">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
