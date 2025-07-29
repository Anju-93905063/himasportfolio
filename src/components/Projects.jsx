import React from 'react';

const projects = [
  {
    title: 'SkinCareAI',
    description: 'SkinCareAI is an AI-powered web app that analyzes skin images to detect possible conditions and provide instant insights. It features a clean UI, secure Firebase authentication, and Gemini API integration for accurate diagnosis.',
    image: '/images/skincare.png',
    github: 'https://github.com/Anju-93905063/SkinCareAI',
    youtube: 'https://youtube.com/skincarreAI',
  },
  {
    title: 'Task Management Web App',
    description:
      'A simple and user-friendly task management application allowing users to add, view, update, and delete tasks. Built with React, Node.js, Express.js, and MongoDB.',
    image: '/images/tasks.jpg', // Add this image in your public/images folder
    github: 'https://github.com/Anju-93905063/TasksManaging',
    youtube: 'https://youtube.com/yourtaskmanagementappdemo',
  },
  {
  title: 'Enchanted Wings: Butterfly Species Classifier',
  description:
    'A Flask-based AI web app that classifies butterfly species using transfer learning with VGG16. Users can upload butterfly images and get accurate species predictions instantly through a responsive and styled interface.',
  image: '/images/butterfly.png', // Add this image in your public/images folder
  github: 'https://github.com/Anju-93905063/butterfly_classification', // replace with actual repo if available
  youtube: 'https://drive.google.com/file/d/1uWuGeNQl2RQajHkwoU4Ay9OU-dZKIHbL/view?usp=sharing',
},
  {
    title: 'Cryptowithstegano',
    description:
      'A secure system that combines cryptography and steganography to hide and encrypt messages. Ensures maximum digital security.',
    image: '/images/crypto.png',
    github: 'https://github.com/Anju-93905063/Cryptowithstegano',
    youtube: 'https://youtube.com/yourcryptowithsteganodemo',
  },
  {
    title: 'Online Prescription Generator',
    description:
      'An application to generate prescriptions based on user-entered health symptoms, offering health tips, disease control info, and a user-friendly login system.',
    image: '/images/medical.jpg',
    github: 'https://github.com/Anju-93905063/MedicalPrescription',
    youtube: 'https://youtube.com/yourprescriptiongeneratordemo',
  },
];

function Projects() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-black via-blue-900 to-black py-10 flex flex-col items-center animate-fadeIn">
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500 mb-10 animate-fadeIn">
        Projects
      </h2>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 animate-slideUp"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-contain mb-4 rounded-md"
            />
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="flex justify-center gap-4">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <button className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700">
                  GitHub
                </button>
              </a>
              <a href={project.youtube} target="_blank" rel="noopener noreferrer">
                <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-400">
                  YouTube
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
