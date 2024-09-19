import React from "react";

const Contact = () => {
  return (
    <div className="py-12 bg-gray-100 px-4 md:px-16">
      <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-blue-500 p-8 rounded-lg shadow-lg text-white">
          <h3 className="text-3xl font-semibold mb-4 text-white">
            Get in touch
          </h3>
          <p className="mb-6 text-lg leading-relaxed">
            We believe in providing solutions to your business ideas,
            challenges, and technical needs. Drop us a line about your project
            via the website contact form, and we will help you plan your way
            forward. Our team will contact you at the earliest. Having learned
            your vision, technical challenges, and requirements, we will provide
            you with our solutions to enhance your business acumen/prospects.
          </p>
          <div className="space-y-4">
            <div className="bg-white text-gray-800 p-4 rounded-md shadow-md">
              <strong className="block text-xl text-blue-600 mb-1">
                Address:
              </strong>
              <p>
                20 W. Dry Creek Circle
                <br />
                Littleton, CO 80120 USA
              </p>
            </div>
            <div className="bg-white text-gray-800 p-4 rounded-md shadow-md">
              <strong className="block text-xl text-blue-600 mb-1">
                Phone:
              </strong>
              <p>747474747474</p>
            </div>
            <div className="bg-white text-gray-800 p-4 rounded-md shadow-md">
              <strong className="block text-xl text-blue-600 mb-1">
                Email:
              </strong>
              <p>info@.com</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold mb-6 text-center">
            Drop us a line
          </h3>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-600 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-3 h-32 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
