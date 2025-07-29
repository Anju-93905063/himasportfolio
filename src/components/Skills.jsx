import React from 'react';

function Skills() {
  const skills = [
    {
      category: "Languages",
      items: [
        { name: "Python", img: "/images/python.jpeg" },
        { name: "C", img: "/images/c.jpeg" },
        { name: "Java", img: "/images/java.jpeg" },
        { name: "JavaScript", img: "/images/javascript.jpeg" },
        { name: "HTML CSS", img: "/images/html.jpeg" },
        { name: "PHP", img: "/images/php.jpeg" },
        { name: "SQL", img: "/images/sql.jpeg" },
        { name: "NoSQL", img: "/images/nosql.jpeg"}
      ],
    },
    {
      category: "Frameworks / Libraries",
      items: [
        { name: "React.js", img: "/images/react.jpeg" },
        { name: "Express.js", img: "/images/expressjs.jpeg" },
        { name: "Node.js", img: "/images/nodejs.jpeg" },
        { name: "Tailwind CSS", img: "/images/tailwind.jpeg" },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "Firebase (Firestore)", img: "/images/firebase.jpeg" },
        { name: "MongoDB", img: "/images/mongodb.jpeg" },
        { name: "MySQL", img: "/images/mysql.jpeg" },
      ],
    },
    {
      category: "Tools / Platforms",
      items: [
        { name: "VS Code", img: "/images/vscode.jpeg" },
        { name: "Git & GitHub", img: "/images/git.jpeg" },
        { name: "Google Cloud", img: "/images/google.jpeg" },
      ],
    },
    {
      category: "APIs and Services",
      items: [
        { name: "REST APIs", img: "/images/api.jpeg" },
        { name: "OAuth / JWT Authentication", img: "/images/oauth.jpeg" },
      ],
    },
    {
      category: "AI / Data Science",
      items: [
        { name: "Machine Learning", img: "/images/ml.jpeg" },
        { name: "Data Science (Python)", img: "/images/datascience.jpeg" },
        { name: "Retrieval-Augmented Generation (RAG)", img: "/images/rag.jpeg" },
      ],
    },
    {
      category: "Cybersecurity Knowledge",
      items: [
        { name: "Cybersecurity Basics", img: "/images/cyber.jpeg" },
        { name: "Next-Generation Firewalls", img: "/images/next.jpeg" },
      ],
    },
    {
      category: "Soft Skills",
      items: [
        { name: "Problem-solving", img: "/images/problem.jpeg" },
        { name: "Project Development", img: "/images/project.jpeg" },
        { name: "Communication", img: "/images/comm.jpeg" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-blue-900 to-black p-6 animate-fadeIn">
      <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500 mb-10 animate-fadeIn">
        My Skills
      </h1>

      <div className="flex flex-col gap-10 max-w-6xl mx-auto">
        {skills.map((section, idx) => (
          <div key={idx}>
            <h2 className="text-3xl font-semibold text-pink-600 mb-6">{section.category}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {section.items.map((skill, skillIdx) => (
                <div
                  key={skillIdx}
                  className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:scale-105 transition-transform duration-300 animate-slideUp"
                >
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className="w-16 h-16 mb-4 object-contain"
                  />
                  <p className="text-lg font-medium text-gray-700">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
