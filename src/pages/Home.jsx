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
      className={`flex flex-col justify-center items-center bg-gradient-to-r from-black via-blue-900 to-black text-white transition-all duration-700 ease-in-out ${
        showMore ? 'min-h-full' : 'h-screen'
      }`}
    >
      {/* Profile Picture */}
      <img
        src="/images/myphoto.jpg"
        alt="Profile"
        className="rounded-full w-44 h-44 object-cover shadow-2xl animate-fadeInFast border-4 border-white mb-4 animate-bounceOnce"
      />

      {/* Name */}
      <h2 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500 animate-bounceOnce">
        Hi, I'm Himanjali 👩‍💻
      </h2>

      {/* Short About Me */}
      <p className="text-lg text-center px-8 py-4 animate-slideUp delay-300 max-w-5xl font-medium animate-bounceOnce">
        Hi, I'm Himanjali, a final year student at VIT, with a passion for web development, AI, and data science. 
        I specialize in creating responsive, user-friendly websites using modern technologies like React and Tailwind CSS. 
        I have a deep interest in solving complex problems and constantly learning new skills. 
        My goal is to build impactful software solutions that can make a difference in people's lives. 
        Currently, I'm working on personal and collaborative projects that push the boundaries of innovation. 
        I'm always looking for opportunities to grow and contribute to the tech community...
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-6 mt-6">
        {[{ name: 'Skills', link: '/Skills' },
          { name: 'Projects', link: '/Projects' },
          { name: 'Internships', link: '/Internships' },
          { name: 'Certifications', link: '/Certifications' },
          { name: 'Contact', link: '/Contact' }]
          .map(({ name, link }) => (
            <a href={link} key={name}>
              <button className="bg-white text-black font-bold py-3 px-6 rounded-full hover:bg-gray-200 transition duration-300 transform hover:scale-105 animate-bounceOnce">
                {name}
              </button>
            </a>
          ))}
      </div>

      <button
          onClick={handleShowMore}
          className="bg-white text-black font-bold py-3 px-8 mt-8 rounded-full hover:bg-gray-200 transition transform hover:scale-105 animate-bounceOnce"
        >
          More About Me
        </button>
      

      {/* Full About Me Section */}
      {showMore && (
        <div className="mt-10 max-w-5xl p-8 bg-gradient-to-r from-blue-900 via-indigo-800 to-black rounded-3xl shadow-2xl animate-slideFade text-center">
          <h3 className="text-4xl font-bold mb-6 text-white animate-bounceOnce">My Journey ✨</h3>

          {/* Full about me text */}
          <div className="space-y-4 text-lg font-medium text-gray-300 animate-bounceOnce">
          <p className="text-lg mb-4">
            I am G. Himanjali, a final-year B.Tech student from Vishnu Institute of Technology, Bhimavaram...
          </p>
          <p className="text-lg mb-4">
            I come from Matsyapuri village, Bhimavaram. My parents, Rambabu and Bhavani, have always supported me...
          </p>
          {/* (Your full about me paragraphs continue here) */}
          <p className="text-lg mb-4">
            My hobbies include problem-solving, working on tech projects, and exploring new technologies...
          </p>
          <p className="text-lg mb-4">
            Looking ahead, I’m excited to innovate in AI, data science, and create a positive impact in the tech industry...
          </p>
          <p className="text-lg mb-2">I completed my Intermediate Education in Sri Surya Junior College Narapur and secured 95.9% in MAtchematics,Physics and Chemistry. </p>

<p className="text-lg mb-2">Coming to my schooling, I have secured 96% in Pratibha English Medium High School,Mogaltur.</p>

<p className="text-lg mb-2"> I've honed my skills in areas like programming, web development, AI, and data science. My journey so far has been a mix of challenges, successes, and continuous learning.</p>

<p className="text-lg mb-2">In addition to my academic pursuits, I’ve worked on several personal and collaborative projects. One of my key interests is using Artificial Intelligence and Machine Learning to create innovative solutions
   for real-world problems. I’ve also been actively involved in teaching and mentoring others in the field of Data Science and Machine Learning.</p>

<p className="text-lg mb-2">My hobbies include problem-solving, working on tech projects, and constantly exploring new technologies. I believe that with the right mindset and determination, one can overcome a
  ny obstacles and make meaningful contributions to society.</p>

<p className="text-lg mb-2">Looking ahead, I am excited about the opportunities that lie ahead in the tech industry. I hope to work in a dynamic environment that encourages innovation, creativity, and 
  continuous learning. My ultimate goal is to use my skills to make a positive impact on society and contribute to technological advancements that can improve lives.</p>

<p className="text-lg mb-2">As I continue my journey at VIT, I am excited about the possibilities of what lies ahead. I am determined to make the most of my final year and leverage all the knowledge a
  nd experience I’ve gained so far to create something impactful.</p>

<p className="text-lg mb-2">Throughout my education, my parents have instilled in me the importance of humility, hard work, and perseverance. Their guidance has been invaluable, and I strive to make 
  them proud with everything I do.</p>

<p className="text-lg mb-2">I am always open to new experiences, learning opportunities, and collaborations. I am eager to connect with like-minded individuals and organizations who share my passion 
  
  for technology, AI, and data science.</p>

<p className="text-lg mb-2">In the future, I see myself working on cutting-edge technologies, especially in AI and data science, where I can make a significant impact. Whether it's through creating smart
   applications, solving complex problems, or contributing to scientific research, I want to be part of the next wave of technological advancements.</p>


<p className="text-lg mb-2">Thanks for taking the time to learn more about me. I am excited to connect and share more about my journey and future aspirations. Let’s keep the conversation going and
   explore opportunities together.</p>
          </div>

          {/* Show Less Button */}
          <button
            onClick={handleShowLess}
            className="bg-white text-black font-bold py-3 px-8 mt-10 rounded-full hover:bg-gray-200 transition transform hover:scale-105 animate-bounceOnce"
          >
            Show Less
          </button>
        </div>
      )}
    </section>
  );
}

export default Home;