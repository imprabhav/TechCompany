import React from "react";
import grp from "../../assets/grp.jpg";
import about2 from "../../assets/about2.jpg";
import about3 from "../../assets/group3.jpg";
import about4 from "../../assets/about4.jpg";



const About = () => {
  return (
    <div>
      {/* First section - remains unchanged */}
      <div className="py-4 min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
        <div className="max-w-6xl mx-auto p-4 flex flex-col md:flex-row items-center h-screen">
          <div className="md:w-1/2 px-4 py-8 text-white">
            <h1 className="text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl mb-6">
              Creativity, transparency, robust delivery, and customer-centric
              approach are the key spotlights of our software development
              services. We help businesses elevate their value and drive success
              by identifying your needs and meeting them through engineering
              custom software solutions.
            </p>
            <p className="text-xl">
              TheCodeye is a unique endeavor to understand your business from
              your viewpoint and craft the ultimate solution to help you
              succeed.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={grp}
              alt="Team Group Photo"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Second section - updated with 40:60 ratio */}
      {/* Second section - updated with aligned text and image */}
      <div className="min-h-screen bg-white flex items-center">
        <div className="max-w-6xl mx-auto p-4 flex flex-col md:flex-row">
          <div className="md:w-2/5 order-2 md:order-1 self-stretch">
            <img
              src={about2}
              alt="About Us Second Image"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-3/5 p-8 text-gray-800 order-1 md:order-2 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-bold mb-2 text-gray-900">
                A team of enthusiastic & creative minds
              </h2>
              <div className="w-24 h-1 bg-blue-500 mb-6"></div>
              <p className="text-xl mb-6 text-gray-700">
                Our team is guided by a common goal and professional values. You
                will find a perfect blend of technical, managerial, and
                developmental skills in Thecodeye. We achieve extraordinary
                results due to the interprofessional team collaboration and
                out-of-the-box thinking. Complex technical tasks encourage us to
                generate creative ideas and outperform our own results.
              </p>
            </div>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">—</span>
                <span>
                  Our community embraces the varied experiences of our team
                  members and game-changing mindset of our clients.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">—</span>
                <span>
                  We apply an agile approach to resolving wide-ranged business
                  issues.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">—</span>
                <span>
                  Thecodeye takes extra steps to ensure stunning results.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">—</span>
                <span>
                  We take into consideration the satisfaction of our customers
                  when estimating our performance.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Core Values Section */}
      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          {/* Title */}
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Our Core Values
          </h2>
          {/* Blue underline */}
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          {/* Subheading */}
          <p className="text-xl text-gray-700">
            We value our clients’ success. We are generous in sharing our
            knowledge. Our attention to quality makes the software development
            journey worthy for customers of Thecodeye.
          </p>
          <img src={about4}
            className="mt-5 w-full max-h-80 object-cover object-[50%_70%] rounded-lg shadow-lg mx-auto"
          />
        </div>
      </div>
    </div>
  ); 
};

export default About;
