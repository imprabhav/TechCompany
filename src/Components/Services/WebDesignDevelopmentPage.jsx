import React from 'react';
import WebDevelopmentImage from '../../assets/Web Design and Development Services.jpeg'; 

const WebDesignDevelopmentPage = () => {
    return (
        <div className="py-4 min-h-screen bg-gradient-to-br from-pink-500 to-red-900">
            <div className="max-w-6xl md:h-screen mx-auto py-4 flex flex-col md:flex-row items-center">
                {/* Text Section */}
                <div className="mt-3 md:w-3/5 px-6 py-8 text-white">
                    <h1 className="text-4xl font-bold">Web Design & Development</h1>
                    <p className="text-lg mt-6">
                        At Kaltics, we offer cutting-edge web design and development services tailored to elevate your brand and drive business growth. Our team creates responsive, user-friendly websites that not only look great but also deliver seamless experiences on all devices.
                    </p>
                    {/* <p className="text-lg mt-4">
                        From concept to launch, we work closely with you to ensure your website is aligned with your business goals and optimized for search engines, providing a solid foundation for your online presence.
                    </p>
                    <h2 className="text-3xl font-bold mt-8">Our Web Design & Development Services Include:</h2>
                    <ul className="list-disc list-inside text-lg mt-4 space-y-4">
                        <li>Custom Web Development</li>
                        <li>Responsive Design</li>
                        <li>eCommerce Solutions</li>
                        <li>CMS Integration</li>
                        <li>UI/UX Design</li>
                        <li>SEO Optimization</li>
                        <li>Website Maintenance & Support</li>
                    </ul> */}
                </div>

                {/* Image Section */}
                <div className="md:w-2/5 flex justify-center items-center">
                    <img
                        src={WebDevelopmentImage}
                        alt="Web Design & Development"
                        className="max-h-72 w-full object-cover rounded-lg shadow-lg"
                    />
                </div>
            </div>

            {/* Benefits Section */}
            <section className="py-16 px-8 bg-gray-100 text-gray-900">
                <h2 className="text-3xl font-bold text-center mb-8">Why Choose Kaltics for Web Development?</h2>
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Benefit 1 */}
                    <div className="p-6 bg-white rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Tailored Solutions</h3>
                        <p>
                            We customize each website to align perfectly with your brand identity and business objectives, ensuring a unique online presence.
                        </p>
                    </div>
                    {/* Benefit 2 */}
                    <div className="p-6 bg-white rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Responsive Design</h3>
                        <p>
                            Our designs ensure that your website looks stunning and functions flawlessly on all devices, providing an optimal user experience.
                        </p>
                    </div>
                    {/* Benefit 3 */}
                    <div className="p-6 bg-white rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">SEO-Friendly Development</h3>
                        <p>
                            We implement best practices in SEO during the development process, helping your website rank higher on search engines.
                        </p>
                    </div>
                    {/* Benefit 4 */}
                    <div className="p-6 bg-white rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Ongoing Support</h3>
                        <p>
                            Our team provides continuous support and maintenance, ensuring your website remains secure and up-to-date.
                        </p>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="bg-gradient-to-r from-red-700 to-red-500 py-16 text-center text-white">
                <h2 className="text-3xl font-semibold mb-4">Ready to Build Your Online Presence?</h2>
                <p className="mb-8">
                    Contact us today to discuss how our web design and development services can help your business thrive.
                </p>
                <button className="bg-white text-red-700 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
                    Get in Touch
                </button>
            </section>
        </div>
    );
};

export default WebDesignDevelopmentPage;
