import React, { useState, useEffect } from 'react';

function Home() {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  const handleShowLess = () => {
    setShowMore(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (window.location.hash === '#aboutme') {
      setShowMore(true);
    }
  }, []);

  return (
    <section
      id="home"
      className={`flex flex-col items-center justify-center bg-gradient-to-r from-black via-blue-900 to-black text-white transition-all duration-700 ease-in-out ${
        showMore ? 'min-h-full' : 'min-h-screen'
      } py-10 px-4 sm:px-6 lg:px-10`}
    >
      {/* Profile Picture */}
      <img
        src="/images/myphoto.jpg"
        alt="Profile"
        className="rounded-full w-36 h-36 sm:w-44 sm:h-44 object-cover shadow-2xl border-4 border-white mb-6 animate-bounceOnce"
      />

      {/* Name */}
      <h2 className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500 mb-4 text-center animate-bounceOnce">
        Hi, I'm Himanjali 👩‍💻
      </h2>

      {/* Short About Me */}
      <p className="text-base sm:text-lg text-center px-2 sm:px-6 md:px-16 lg:px-28 xl:px-32 py-4 max-w-5xl font-medium animate-slideUp animate-bounceOnce">
        Hi, I'm Himanjali, a final year student at VIT, with a passion for web development, AI, and data science. 
        I specialize in creating responsive, user-friendly websites using modern technologies like React and Tailwind CSS. 
        I have a deep interest in solving complex problems and constantly learning new skills. 
        My goal is to build impactful software solutions that can make a difference in people's lives. 
        Currently, I'm working on personal and collaborative projects that push the boundaries of innovation. 
        I'm always looking for opportunities to grow and contribute to the tech community...
      </p>

      {/* Navigation Buttons */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6">
        {[
          { name: 'Skills', link: '/Skills' },
          { name: 'Projects', link: '/Projects' },
          { name: 'Internships', link: '/Internships' },
          { name: 'Certifications', link: '/Certifications' },
          { name: 'Contact', link: '/Contact' },
        ].map(({ name, link }) => (
          <a href={link} key={name}>
            <button className="bg-white text-black font-bold py-2 px-5 sm:py-3 sm:px-6 rounded-full hover:bg-gray-200 transition duration-300 transform hover:scale-105 animate-bounceOnce">
              {name}
            </button>
          </a>
        ))}
      </div>

      {/* Show More Button */}
      {!showMore && (
        <button
          onClick={handleShowMore}
          className="bg-white text-black font-bold py-2 px-6 sm:py-3 sm:px-8 mt-8 rounded-full hover:bg-gray-200 transition transform hover:scale-105 animate-bounceOnce"
        >
          More About Me
        </button>
      )}

      {/* Full About Me Section */}
      {showMore && (
        <div className="mt-10 max-w-5xl p-6 sm:p-8 bg-gradient-to-r from-blue-900 via-indigo-800 to-black rounded-3xl shadow-2xl animate-slideFade text-center">
          <h3 className="text-2xl sm:text-4xl font-bold mb-6 text-white animate-bounceOnce">My Journey ✨</h3>

          <div className="space-y-4 text-sm sm:text-base font-medium text-gray-300 animate-bounceOnce text-left sm:text-justify">
            <p>I am G. Himanjali, a final-year B.Tech student from Vishnu Institute of Technology, Bhimavaram...</p>
            <p>I come from Matsyapuri village, Bhimavaram. My parents, Rambabu and Bhavani, have always supported me...</p>
            <p>My hobbies include problem-solving, working on tech projects, and exploring new technologies...</p>
            <p>Looking ahead, I’m excited to innovate in AI, data science, and create a positive impact in the tech industry...</p>
            <p>I completed my Intermediate Education in Sri Surya Junior College Narapur and secured 95.9% in MPC subjects.</p>
            <p>I scored 96% in Pratibha English Medium High School, Mogaltur.</p>
            <p>I've honed my skills in programming, web development, AI, and data science. My journey is full of learning and growth.</p>
            <p>In addition to academics, I’ve worked on personal and team projects using AI/ML for real-world problems. I love mentoring too.</p>
            <p>I believe with the right mindset and perseverance, we can create impactful solutions for society.</p>
            <p>My dream is to work in an innovative environment that values learning and contribution.</p>
            <p>Thanks to my parents for their constant support. I owe them everything.</p>
            <p>I’m always open to collaboration and learning. Let’s build something impactful together!</p>
          </div>

          {/* Show Less Button */}
          <button
            onClick={handleShowLess}
            className="bg-white text-black font-bold py-2 px-6 sm:py-3 sm:px-8 mt-8 rounded-full hover:bg-gray-200 transition transform hover:scale-105 animate-bounceOnce"
          >
            Show Less
          </button>
        </div>
      )}
    </section>
  );
}

export default Home;
