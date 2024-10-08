import React from 'react';
import MobileDevelopmentImage from '../../assets/mobile.jpg'; 

const MobileDevelopmentPage = () => {
    return (
        <div className="py-4 min-h-screen bg-gradient-to-br from-purple-500 to-purple-900">
            <div className="max-w-6xl   md:h-screen mx-auto py-4 flex flex-col md:flex-row items-center">
                {/* Text Section */}
                <div className="mt-3 md:w-3/5 px-4 py-8 text-white">
                    <h1 className="text-4xl font-bold">Mobile Application Development</h1>
                    <p className="text-lg mt-6">
                        Kaltics acts as an end-to-end software development partner that builds excellent mobile experiences. Our user-centric mobile solutions are powered by innovative technologies and fueled by our competence and vast experience in custom app development.
                    </p>
                    {/* <p className="text-lg mt-4">
                        At Kaltics, we understand your business from your perspective and craft custom mobile solutions to help you achieve your goals, whether it's increasing revenue, improving customer engagement, or optimizing your business processes.
                    </p>

                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold">Key Features of Our Mobile App Solutions</h2>
                        <ul className="mt-4 space-y-4">
                            <li>
                                <strong>Custom Mobile Apps:</strong> We develop tailored mobile apps for iOS and Android that perfectly align with your business needs and objectives.
                            </li>
                            <li>
                                <strong>Cross-platform Development:</strong> We specialize in building cross-platform apps using frameworks like React Native and Flutter, ensuring a seamless experience across devices.
                            </li>
                            <li>
                                <strong>Intuitive UI/UX Design:</strong> Our design approach focuses on delivering a visually appealing and easy-to-navigate user experience that keeps your customers engaged.
                            </li>
                            <li>
                                <strong>Scalable Solutions:</strong> We design mobile applications that grow with your business, ensuring high performance and scalability as your user base expands.
                            </li>
                            <li>
                                <strong>App Store Optimization (ASO):</strong> We optimize your app for better visibility and rankings on app stores, ensuring it reaches the right audience and drives downloads.
                            </li>
                        </ul>
                    </div> */}
                </div>

                {/* Image Section */}
                <div className="md:w-2/5 flex justify-center items-center">
                    <img
                        src={MobileDevelopmentImage}
                        alt="Mobile App Development"
                        className="max-h-80 object-cover rounded-lg shadow-lg"
                    />
                </div>
            </div>

            {/* Benefits Section */}
            <section className="py-16 px-8 bg-gray-100 text-gray-900">
                <h2 className="text-3xl font-bold text-center mb-8">Why Choose Kaltics for Mobile Development?</h2>
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Benefit 1 */}
                    <div className="p-6 bg-white rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Expertise in Leading Technologies</h3>
                        <p>
                            Our team of developers is skilled in cutting-edge technologies like Swift, Kotlin, React Native, and Flutter, ensuring you get the best solution for your needs.
                        </p>
                    </div>
                    {/* Benefit 2 */}
                    <div className="p-6 bg-white rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">End-to-End Development</h3>
                        <p>
                            From ideation and design to development, testing, and deployment, we provide full-cycle mobile app development services to bring your vision to life.
                        </p>
                    </div>
                    {/* Benefit 3 */}
                    <div className="p-6 bg-white rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Post-launch Support</h3>
                        <p>
                            We offer ongoing support and maintenance after launch, ensuring your app remains up-to-date, secure, and functioning optimally.
                        </p>
                    </div>
                    {/* Benefit 4 */}
                    <div className="p-6 bg-white rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Agile Development Methodology</h3>
                        <p>
                            Our agile approach ensures faster time-to-market with continuous iterations and feedback loops, allowing for rapid development and better product quality.
                        </p>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="bg-gradient-to-r from-purple-700 to-purple-500 py-16 text-center text-white">
                <h2 className="text-3xl font-semibold mb-4">Ready to Transform Your Mobile Strategy?</h2>
                <p className="mb-8">
                    Contact us today to discuss how we can build a mobile app tailored to your business needs.
                </p>
                <button className="bg-white text-purple-700 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
                    Get in Touch
                </button>
            </section>
        </div>
    );
};

export default MobileDevelopmentPage;
