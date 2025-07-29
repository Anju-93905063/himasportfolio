import React from 'react';

const internships = [
  {
    title: 'AWS AIML Virtual Internship',
    organization: 'Amazon (Eduskills)',
    cohort: 'Cohort 7',
    duration: 'Jan - Mar 2024 (10 weeks)',
    focus: 'AI/ML concepts and applications',
    logo: '/images/awsaiml.jpeg',
  },
  {
  title: 'Ethical Hacking Virtual Internship',
  organization: 'Eduskills',
  cohort: 'Cohort 12',
  duration: 'Jan - Mar 2024 (10 weeks)',
  focus: 'Ethical hacking techniques, network security, and penetration testing fundamentals',
  logo: '/images/ethical.jpeg', // Make sure to include this image in your public/images folder
},
  {
    title: 'CodeWay Python Internship',
    organization: 'CodeWay',
    cohort: 'Cohort 7',
    duration: 'Feb 8, 2024 - Mar 8, 2024',
    focus: 'Python programming and problem-solving',
    logo: '/images/codeway.jpeg',
  },
  {
    title: 'Swecha AI Internship',
    organization: 'Swecha',
    cohort: 'Cohort 8',
    duration: 'May 14, 2024 - June 21, 2024',
    focus: 'AI concepts and applications in projects',
    logo: '/images/swecha.jpeg',
  },
  {
    title: 'AWS Data Engineering Internship',
    organization: 'Amazon (Eduskills)',
    cohort: 'Cohort 8',
    duration: 'Apr - Jun 2024',
    focus: 'Data Engineering tools and techniques',
    logo: '/images/awsde.jpeg',
  },
  {
    title: 'Palo Alto Networks Cybersecurity Internship',
    organization: 'Palo Alto Networks (AICTE Eduskills)',
    cohort: 'Cohort 9',
    duration: 'July - Sept 2024',
    focus: 'Cybersecurity concepts, Next-Gen Firewalls, and Security Operations',
    logo: '/images/palocyber.jpeg',
  },
  {
    title: 'Google Android Developer Internship',
    organization: 'Google (Eduskills)',
    cohort: 'Cohort 10',
    duration: 'Oct - Dec 2024',
    focus: 'Android App Development',
    logo: '/images/googleandroid.jpeg',
  },
  {
    title: 'Google AIML Internship',
    organization: 'Google (Eduskills)',
    cohort: 'Cohort 11',
    duration: 'Jan - Mar 2025',
    focus: 'AI/ML concepts and applications',
    logo: '/images/googleaiml.jpeg',
  },
];

function Internships() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-900 via-indigo-800 to-black p-6 animate-fadeIn">
      <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500 mb-10 animate-fadeIn">
        Internships
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {internships.map((internship, index) => (
          <div key={index} className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300 hover:shadow-2xl">
            <div className="flex justify-center mb-6">
              <img
                src={internship.logo}
                alt={internship.title}
                className="w-24 h-24 rounded-full border-4 border-indigo-600"
              />
            </div>
            <h3 className="text-xl font-semibold text-indigo-700 mb-2 text-center">{internship.title}</h3>
            <p className="text-md font-medium text-gray-600 mb-2 text-center">{internship.organization}</p>
            <p className="text-sm text-gray-500 mb-2 text-center italic">
              <strong>Cohort:</strong> {internship.cohort}
            </p>
            <p className="text-sm text-gray-500 mb-2 text-center">
              <strong>Duration:</strong> {internship.duration}
            </p>
            <p className="text-sm text-gray-500 text-center">
              <strong>Focus:</strong> {internship.focus}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Internships;
