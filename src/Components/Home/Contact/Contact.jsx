import React, { useState } from "react";

const Contact = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // State to handle form submission status
  const [status, setStatus] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "193ed288-672d-49a7-bf56-3f49e870589d",
        ...formData,
      }),
    });

    const result = await response.json();

    if (response.ok) {
      setStatus("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      setStatus(`Error: ${result.message}`);
    }
  };

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
                2 Wolsey Island way
                <br />
                Leicester, UK
              </p>
            </div>
            <div className="bg-white text-gray-800 p-4 rounded-md shadow-md">
              <strong className="block text-xl text-blue-600 mb-1">
                Phone:
              </strong>
              <p>+447907453107, +447918257835, +918318064649</p>
            </div>
            <div className="bg-white text-gray-800 p-4 rounded-md shadow-md">
              <strong className="block text-xl text-blue-600 mb-1">
                Email:
              </strong>
              <p>info.thecodeye@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold mb-6 text-center">
            Drop us a line
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-600 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 h-32 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors duration-300"
              >
                Send Message
              </button>
              <p className="mt-4 text-gray-500">{status}</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
