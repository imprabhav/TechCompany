import React from 'react';
import DataAnalyticsImage from '../../assets/dataanalysis.jpg'; // Update the path to your image

const DataAnalyticsPage = () => {
    return (
        <div className="py-4 min-h-screen bg-gradient-to-br from-blue-500 to-blue-900">
            <div className="max-w-6xl md:h-screen mx-auto py-4 flex flex-col md:flex-row items-center ">
                <div className="mt-3 md:w-3/5 px-4 py-8 text-white">
                    <h1 className="text-4xl font-bold mt-30">Data Analytics</h1>
                    <p className="text-lg mt-6">
                        At Kaltics, we empower businesses with data-driven decision-making through advanced analytics solutions. Our data analytics services cover the full lifecycle of data, from collection and processing to actionable insights that optimize business performance.
                    </p>
                    {/* <p className="text-lg mt-6">
                        We specialize in leveraging data to deliver customized analytics solutions that fit your specific business needs, allowing you to make informed decisions and stay competitive in today's data-driven world.
                    </p>

               
                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold">Our Data Analytics Services</h2>
                        <ul className="mt-4 space-y-4">
                            <li>
                                <strong>Data Collection & Processing:</strong> We help you capture, clean, and organize data from multiple sources, ensuring data accuracy and quality.
                            </li>
                            <li>
                                <strong>Business Intelligence (BI) Solutions:</strong> Transform your data into valuable insights using BI dashboards and reporting tools. We provide easy-to-read, real-time data visualization to help you make fast, informed decisions.
                            </li>
                            <li>
                                <strong>Predictive Analytics:</strong> Our predictive analytics services allow you to forecast future trends, identify opportunities, and mitigate risks using advanced statistical models and machine learning algorithms.
                            </li>
                            <li>
                                <strong>Big Data Solutions:</strong> We harness the power of big data to provide deeper insights and scalable analytics solutions, helping you process large datasets with ease.
                            </li>
                            <li>
                                <strong>Data Warehousing:</strong> We design and implement secure, scalable data warehouses that consolidate your data into a single, efficient source of truth for faster, more accurate analysis.
                            </li>
                        </ul>
                    </div> */}
                </div>


                {/* Image Section */}
                <div className="md:w-2/5 flex justify-center items-center">
                    <img
                        src={DataAnalyticsImage}
                        alt="Data Analytics Visualization"
                        className="max-h-80 object-cover rounded-lg shadow-lg"
                    />
                </div>
            </div>

            {/* Benefits Section */}
            <section className="py-16 px-8 bg-gray-100 text-gray-900">
                <h2 className="text-3xl font-bold text-center mb-8">Why Choose Kaltics for Data Analytics?</h2>
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-6 bg-white rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Industry Expertise</h3>
                        <p>
                            Our data experts have vast experience across industries, helping you unlock the full potential of your data no matter your field of operation.
                        </p>
                    </div>

                    <div className="p-6 bg-white rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Custom Solutions</h3>
                        <p>
                            We tailor our analytics solutions to your business, ensuring they meet your specific requirements and deliver actionable insights.
                        </p>
                    </div>

                    <div className="p-6 bg-white rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Real-time Analytics</h3>
                        <p>
                            Our solutions provide real-time data insights, enabling faster decision-making and helping you react to changes in your business environment instantly.
                        </p>
                    </div>

                    <div className="p-6 bg-white rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Security & Compliance</h3>
                        <p>
                            We prioritize data security and compliance, ensuring that your data is protected while adhering to industry regulations and standards.
                        </p>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="bg-gradient-to-r from-blue-700 to-blue-500 py-16 text-center text-white">
                <h2 className="text-3xl font-semibold mb-4">Ready to Unlock the Power of Data?</h2>
                <p className="mb-8">
                    Contact Kaltics today to leverage data analytics for your business growth.
                </p>
                <button className="bg-white text-blue-700 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
                    Get Started
                </button>
            </section>
        </div>
    );
};

export default DataAnalyticsPage;
