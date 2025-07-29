import React from 'react';
import { Link } from 'react-router-dom';

const certifications = [
  {
    title: 'Google Android Developer Internship',
    organization: 'Google (Eduskills)',
    date: 'Oct - Dec 2024',
    certificateLink: 'https://aictecert.eduskillsfoundation.org/pages/home/verify.php?cert=e749d8f8caa13d34b0037ed2f85f37f4',
    description: 'This internship enhanced my skills in Android app development, focusing on Java and Kotlin for building scalable apps.',
  },
  {
  title: 'Microsoft Azure AI Virtual Internship',
  organization: 'Microsoft (AICTE Eduskills)',
  date: 'May-June 2025',
  certificateLink: 'https://drive.google.com/file/d/1XjVEGdAUbsJ0JrKR3YSTKwQylANkB6Li/view?usp=sharing',
  description: 'Successfully completed the internship along with a hands-on project focused on deploying AI models using Azure services. Gained practical experience in machine learning, cognitive services, and cloud-based AI deployment.',
},
{
  title: 'Full-Stack Web Development with Node.js',
  organization: 'Codinza',
  date: 'Jan 2025',
  certificateLink: 'https://drive.google.com/file/d/1a9GsMarxnvTOqLRHEZwdVww-lnzvKQN6/view?usp=sharing',
  description: 'Completed a full-stack web development internship focusing on building dynamic web applications using Node.js, Express.js, MongoDB, and frontend technologies.',
},
  {
    title: 'AWS AIML Virtual Internship',
    organization: 'Amazon (Eduskills)',
    date: 'Jan - Mar 2024',
    certificateLink: 'https://aictecert.eduskillsfoundation.org/pages/home/verify.php?cert=ddc728b580a779040e0a32b27440a6c8',
    description: 'This internship provided hands-on experience with AWS services like S3, Lambda, and machine learning models.',
  },
  {
    title: 'Google AI/ML Internship',
    organization: 'Google (Eduskills)',
    date: 'Jan - Mar 2025',
    certificateLink: 'https://aictecert.eduskillsfoundation.org/pages/home/verify.php?cert=218ac1c3d1bc753cbecb50b6d371ce0a',
    description: 'Focused on AI/ML concepts and applications, including supervised and unsupervised learning techniques.',
  },
  {
    title: 'Palo Alto Cybersecurity Virtual Internship',
    organization: 'Palo Alto Networks (AICTE Eduskills)',
    date: 'Jul - Sept 2024',
    certificateLink: 'https://aictecert.eduskillsfoundation.org/pages/home/verify.php?cert=8098ee9da25844f84edda599c237a131',
    description: 'This internship offered in-depth knowledge about next-gen firewalls and cybersecurity principles.',
  },
  {
    title: 'CodeWay Python Internship',
    organization: 'CodeWay',
    date: 'Feb 8, 2024 - Mar 8, 2024',
    certificateLink: 'https://drive.google.com/file/d/1WQH9Wcfief3bO3wmYbXam-xjbIj4SBrr/view?usp=sharing',
    description: 'A focused program to enhance Python programming skills with practical problem-solving challenges.',
  },
  {
    title: 'Swecha AI Internship',
    organization: 'Swecha',
    date: 'May 14, 2024 - June 21, 2024',
    certificateLink: 'https://drive.google.com/file/d/10cdePk-rhIlwqJFXiV7IzmG6Z0UmCC7p/view?usp=sharing',
    description: 'An AI-centric internship where I developed machine learning models and applied them to real-world datasets.',
  },
  {
    title: 'AWS Data Engineering Internship',
    organization: 'Amazon (Eduskills)',
    date: 'April - June 2024',
    certificateLink: 'https://aictecert.eduskillsfoundation.org/pages/home/verify.php?cert=faecd4703ecfc8c153f83f7844600bc3',
    description: 'Hands-on experience with data engineering techniques using AWS, focusing on ETL processes and cloud technologies.',
  },
  {
    title: 'AWS AI-ML & Data Engineering Long-Term Internship',
    organization: 'EduSkills in collaboration with Andhra Pradesh State Council of Higher Education',
    date: '240 Hours',
    certificateLink: 'https://drive.google.com/file/d/1buD4k91TYQ6XRwOo67q1Jcb5mC7NcvIt/view?usp=sharing',
    description: 'This long-term internship enhanced my skills in both AI-ML and Data Engineering, focusing on AWS tools and cloud services.',
  },
  {
    title: 'AWS AI-ML Short-Term Internship',
    organization: 'EduSkills in collaboration with Andhra Pradesh State Council of Higher Education',
    date: '120 Hours',
    certificateLink: 'https://drive.google.com/file/d/1B0Spn1ihCpDHtorvdBTOkJbPEKMdfNNy/view?usp=sharing',
    description: 'This short-term internship provided intensive hands-on experience with AI and machine learning using AWS tools and services.',
  },
];

const courses = [
  {
    title: 'Python for Data Science Professional',
    organization: 'Udemy',
    date: 'Sept 26, 2024',
    certificateLink: 'https://drive.google.com/file/d/1GZTvrvlYEJN0H9RuSXHOJOaGlvL9i1I1/view?usp=sharing',
    description: 'Completed professional course covering data science concepts and Python applications.',
  },
  {
    title: 'Data Science with Python Bootcamp',
    organization: 'LetsUpgrade',
    date: 'June 3, 2024 - June 7, 2024',
    certificateLink: 'https://drive.google.com/file/d/1GKIwK_-mtesGWW5P8ztuRTN00zjdSCdB/view?usp=sharing',
    description: 'A 5-day bootcamp on Data Science fundamentals and Python tools.',
  },
  {
    title: 'Data Science Bootcamp: Analyzing Data to Create ML Models',
    organization: 'GeeksforGeeks',
    date: '8 weeks',
    certificateLink: 'https://drive.google.com/file/d/11n3RptyE2D8VUyYZW1I7Y1yBnq0P8-WD/view?usp=sharing',
    description: 'Completed 8-week bootcamp on analyzing data and building ML models.',
  },
  {
    title: 'AI with Python Online Course',
    organization: 'Great Learning Academy',
    date: 'Completed',
    certificateLink: 'https://drive.google.com/file/d/1JHEWarA6nruz40UdxlER_NnIXIAapB4T/view?usp=sharing',
    description: 'Learned artificial intelligence basics and applied them using Python.',
  },
  {
    title: 'Basic Game Development Using Scratch',
    organization: 'Coursera',
    date: 'June 4, 2024',
    certificateLink: 'https://drive.google.com/file/d/1_3CckCMYCGYPSnAMfUPZpT_LGiRLftto/view?usp=sharing',
    description: 'Completed course on basic game development concepts using Scratch platform.',
  },
  {
    title: 'Digital Skills: Artificial Intelligence',
    organization: 'Accenture',
    date: '3 weeks',
    certificateLink: 'https://drive.google.com/file/d/1X8cbxs0RjD8kdOuVbEdq-3xoR3K1bK9k/view?usp=sharing',
    description: 'Completed Accenture’s digital skills AI course in 3 weeks.',
  },
];

function Certifications() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-6">
  {/* Header and Badges Button */}
  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-10 space-y-4 lg:space-y-0">
    <h1 className="text-4xl font-bold text-purple-700 animate-bounceOnce text-center lg:text-left">
      My Certifications
    </h1>
    <div className="flex justify-center lg:justify-end">
      <Link to="/badges">
        <button className="bg-purple-700 text-white px-6 py-3 rounded-full shadow-lg hover:bg-purple-600 transition-colors">
          See Badges
        </button>
      </Link>
    </div>
  </div>

      {/* Certifications Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-6">
        {certifications.map((certification, idx) => (
          <div
            key={idx}
            className="p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 animate-fadeIn bg-gray-800"
          >
            <h3 className="text-2xl font-semibold text-white mb-2">{certification.title}</h3>
            <p className="text-xl text-white mb-2">{certification.organization}</p>
            <p className="text-md text-white mb-2">{certification.date}</p>
            <p className="text-white mb-2">{certification.description}</p>
            <a href={certification.certificateLink} target="_blank" rel="noopener noreferrer">
              <button className="bg-gray-700 text-white px-6 py-2 rounded-full mt-4 hover:bg-gray-600 transition-colors">
                See Certificate
              </button>
            </a>
          </div>
        ))}
      </div>

      {/* Course Certificates Section */}
      <h2 className="text-3xl font-bold text-center text-purple-700 mt-20 mb-10 animate-fadeIn">
        Course Completion Certificates
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 animate-fadeIn bg-gray-800"
          >
            <h3 className="text-2xl font-semibold text-white mb-2">{course.title}</h3>
            <p className="text-xl text-white mb-2">{course.organization}</p>
            <p className="text-md text-white mb-2">{course.date}</p>
            <p className="text-white mb-2">{course.description}</p>
            {course.certificateLink !== '#' && (
              <a href={course.certificateLink} target="_blank" rel="noopener noreferrer">
                <button className="bg-gray-700 text-white px-6 py-2 rounded-full mt-4 hover:bg-gray-600 transition-colors">
                  See Certificate
                </button>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;