import React from 'react';
import { Link } from 'react-router-dom';

const badges = [
  {
    title: 'Introduction to Cybersecurity',
    organization: 'Cisco',
    issued: 'Issued 1/9/23',
    description: 'An introductory course on cybersecurity concepts, covering the fundamentals of security protocols and practices in a modern environment.',
    photo: '/images/ciscobadge.png',
    link: 'https://www.credly.com/badges/7ec62db3-0c7c-4426-bbd9-02a4af9a7b50',
  },
  {
    title: 'AWS Academy Graduate - AWS Academy Cloud Foundations',
    organization: 'Amazon Web Services Training and Certification',
    issued: 'Issued 2/12/24',
    description: 'Fundamentals of cloud computing and AWS core services, including the architecture and deployment of AWS-based applications.',
    photo: '/images/awscloudbadge.png',
    link: 'https://www.credly.com/badges/bb4be3db-7554-4cd7-b743-d2067663787d',
  },
  {
    title: 'AWS Academy Graduate - AWS Academy Machine Learning Foundations',
    organization: 'Amazon Web Services Training and Certification',
    issued: 'Issued 2/16/24',
    description: 'A foundational course in machine learning with AWS services, teaching the basics of machine learning algorithms and deployment using AWS.',
    photo: '/images/awsaimlbadge.png',
    link: 'https://www.credly.com/badges/6e17eb91-aa46-4db7-8842-928dda901424',
  },
  {
    title: 'AWS Academy Graduate - AWS Academy Data Engineering',
    organization: 'Amazon Web Services Training and Certification',
    issued: 'Issued 5/8/24',
    description: 'A course on data engineering concepts, providing hands-on experience with AWS tools for building and managing scalable data infrastructure.',
    photo: '/images/awsdebadge.png',
    link: 'https://www.credly.com/badges/8532230b-c1b9-458c-87dc-60d41725a043',
  },
  {
    title: 'Fundamentals of Azure AI Services',
    organization: 'Microsoft',
    issued: 'Issued 6/19/2024',
    description: 'Introduction to AI services in the Azure platform, including the basics of deploying AI models and creating intelligent applications using Azure AI.',
    photo: '/images/azurebadge.png',
    link: 'https://learn.microsoft.com/en-us/users/himanjali-7898/achievements/hrjv9q28?ref=https%3A%2F%2Fwww.linkedin.com%2F',
  },
  {
    title: 'Prompt Design in Vertex AI Skill Badge',
    organization: 'Google Cloud',
    issued: 'Issued 10/26/24',
    description: 'Skill badge awarded for expertise in prompt design for Vertex AI, focusing on building conversational AI models and natural language processing.',
    photo: '/images/googlebadge.png',
    link: 'https://www.credly.com/badges/01f03258-177a-479f-9940-1602c63f56fa',
  },
];

function Badges() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-6">
      <h1 className="text-4xl font-bold text-center text-purple-700 mb-10 animate-bounceOnce">
        My Badges
      </h1>

      {/* Button to navigate to certifications page */}
      <Link to="/certifications">
        <button
          className="fixed top-4 right-4 bg-purple-700 text-white px-8 py-4 rounded-full shadow-lg hover:bg-purple-600 transition-colors"
        >
          See Certifications
        </button>
      </Link>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-6">
        {badges.map((badge, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 animate-fadeIn bg-gray-800`}
          >
            <img
              src={badge.photo}
              alt={badge.title}
              className="w-full h-40 object-contain rounded-md mb-4" // Changed object-cover to object-contain
            />
            <h3 className="text-2xl font-semibold text-white mb-2">{badge.title}</h3>
            <p className="text-xl text-white mb-2">{badge.organization}</p>
            <p className="text-md text-white mb-4">{badge.issued}</p>
            <p className="text-white mb-4">{badge.description}</p>
            <a
              href={badge.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-gray-700 text-white px-6 py-2 rounded-full mt-4 hover:bg-gray-600 transition-colors">
                See Badge
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Badges;
