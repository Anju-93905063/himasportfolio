import React from "react";

const Contact = () => {
  const contacts = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/561/561127.png",
      text: "gannabathulahimanjali@gmail.com",
      link: "mailto:gannabathulahimanjali@gmail.com",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/597/597177.png",
      text: "+91-9390506336",
      link: "tel:+919390506336",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
      text: "LinkedIn Profile",
      link: "https://www.linkedin.com/in/himanjali-gannabathula-133a21275/",
    },
    {
      icon: "https://tse3.mm.bing.net/th?id=OIP.38UMj55uajYeTyLIo3NiUQAAAA&pid=Api&P=0&h=180",
      text: "Credly Profile",
      link: "https://www.credly.com/users/gannabathula-himanjali",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
      text: "GitHub Profile",
      link: "https://github.com/Anju-93905063/",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-indigo-800 to-black p-6">
      <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500 mb-10">
        Contact Me
      </h1>

      <div className="max-w-4xl mx-auto space-y-6">
        {contacts.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-transform hover:scale-105 flex flex-col items-center sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4"
          >
            <img
              src={item.icon}
              alt="icon"
              className="w-10 h-10 object-contain"
            />
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 text-base sm:text-lg font-semibold break-all text-center sm:text-left"
            >
              {item.text}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
