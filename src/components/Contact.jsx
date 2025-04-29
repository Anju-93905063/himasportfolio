import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-indigo-800 to-black p-6 animate-fadeIn">
      <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500 mb-10 animate-fadeIn">
        Contact Me
      </h1>

      {/* Main contact box */}
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-xl hover:scale-105 transform transition-all duration-300 hover:shadow-2xl">
        <div className="space-y-8">
          
          {/* Email */}
          <div className="flex items-center space-x-4">
            <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="Email" className="w-8 h-8" />
            <a href="mailto:gannabathulahimanjali@gmail.com" className="text-xl font-semibold text-indigo-700 hover:underline">
              gannabathulahimanjali@gmail.com
            </a>
          </div>

          {/* Mobile */}
          <div className="flex items-center space-x-4">
            <img src="https://cdn-icons-png.flaticon.com/512/597/597177.png" alt="Phone" className="w-8 h-8" />
            <a href="tel:+919390506336" className="text-xl font-semibold text-indigo-700 hover:underline">
              +91-9390506336
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center space-x-4">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-8 h-8" />
            <a href="https://www.linkedin.com/in/himanjali-gannabathula-133a21275/" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-indigo-700 hover:underline">
              LinkedIn Profile
            </a>
          </div>

          {/* Credly */}
          <div className="flex items-center space-x-4">
            <img src="https://tse3.mm.bing.net/th?id=OIP.38UMj55uajYeTyLIo3NiUQAAAA&pid=Api&P=0&h=180" alt="Credly" className="w-8 h-8 rounded-full" />
            <a href="https://www.credly.com/users/gannabathula-himanjali" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-indigo-700 hover:underline">
              Credly Profile
            </a>
          </div>

          {/* GitHub */}
          <div className="flex items-center space-x-4">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="w-8 h-8" />
            <a href="https://github.com/Anju-93905063/" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-indigo-700 hover:underline">
              GitHub Profile
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
