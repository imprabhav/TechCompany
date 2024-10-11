import { link } from 'framer-motion/client';
import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: 'Web Design and Development Services',
    description: 'We have mastered the top web technologies to deliver high-performing & engaging web solutions for smarter work and improved customer service.',
    logo: '🌐', // Placeholder for logo
    link:'/web-development'

  },
  {
    id: 2,
    title: 'Mobile App Development',
    description: 'Leverage Thecodeye’s multiyear experience in developing native and cross-platform mobile apps for consumer-facing and business environments.',
    logo: '📱', // Placeholder for logo
    link:'/app-development'
  },
  {
    id: 3,
    title: 'Data Analytics',
    description: 'Unlock the power of your data to drive strategic business decisions through our expert analytics solutions.',
    logo: '📊', // Placeholder for logo
    link:'/data-analytics'

  },
  {
    id: 4,
    title: 'Salesforce Solutions',
    description: 'Engage with us to maximize your Salesforce investment, its benefits, and features.',
    logo: '⚙️', // Placeholder for logo
    link:'/sap'

  },
];

const ServiceCard = () => {
  return (
    <div className="py-12 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-16">
        {services.map((service) => (
          <div key={service.id} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center justify-center mb-6 text-6xl">
              {service.logo}
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-center">
              {service.title}
            </h3>
            <p className="text-gray-600 text-center mb-6">{service.description}</p>
            <div className="flex justify-center">
            <Link to={service.link}>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300">
                Learn More
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
