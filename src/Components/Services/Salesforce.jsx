import React from 'react';
import SalesforceImage from '../../assets/Salesforce_Solutions.jpeg'; // Update the path to your image

const SalesforceSolutionsPage = () => {
    return (
        <div className="py-4 min-h-screen bg-gradient-to-br from-indigo-500 to-indigo-900">
            <div className="max-w-6xl   md:h-screen mx-auto py-4 flex flex-col md:flex-row items-center">
                {/* Text Section */}
                <div className="mt-3 md:w-3/5 px-4 py-8 text-white">
                    <h1 className="text-4xl font-bold">Salesforce Solutions</h1>
                    <p className="text-lg mt-6">
                    At Kaltics, we provide tailored Salesforce solutions to optimize your business processes and drive customer engagement. Our certified experts ensure seamless integration, customization, and implementation of Salesforce to meet your unique business needs. <br/> We specialize in enhancing workflow automation, data management, and customer relationship strategies. With our end-to-end support, you can unlock the full potential of Salesforce to achieve measurable growth and efficiency.
                    </p>
                    {/* <p className="text-lg mt-4">
                        Whether you're a small business or an enterprise, our Salesforce services ensure you leverage the full potential of the platform to boost productivity, improve customer interactions, and streamline operations. With us, your Salesforce environment becomes a key driver of growth.
                    </p>

                  
                    <h2 className="text-3xl font-bold mt-8">Our Salesforce Solutions Include:</h2>
                    <ul className="list-disc list-inside text-lg mt-4 space-y-4">
                        <li><strong>Salesforce Implementation:</strong> We provide end-to-end Salesforce implementation services, ensuring the platform is configured and integrated to suit your specific business requirements.</li>
                        <li><strong>Salesforce Customization:</strong> We tailor Salesforce's functionality with custom objects, workflows, and automation tools to match your business processes.</li>
                        <li><strong>Salesforce Integration:</strong> Seamlessly integrate Salesforce with other business systems, such as ERP, marketing automation tools, and e-commerce platforms to create a unified data ecosystem.</li>
                         <li><strong>Ongoing Support & Maintenance:</strong> We offer continuous support and maintenance services, ensuring your Salesforce environment remains secure, up-to-date, and optimized for performance.</li>
                    </ul> */}

                    
                   
                </div>

                {/* Image Section */}
                <div className="md:w-2/5 flex justify-center items-center">
                    <img
                        src={SalesforceImage}
                        alt="Salesforce Solutions"
                        className="max-h-80 object-cover rounded-lg shadow-lg"
                    />
                </div>
            </div>

            {/* Benefits Section */}
            <section className="py-16 px-8 bg-gray-100 text-gray-900">
                <h2 className="text-3xl font-bold text-center mb-8">Why Choose Kaltics for Salesforce Solutions?</h2>
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Benefit 1 */}
                    <div className="p-6 bg-white rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Expertise in Salesforce Technologies</h3>
                        <p>
                            Our team consists of certified Salesforce professionals skilled in the latest Salesforce technologies and best practices to deliver effective solutions.
                        </p>
                    </div>
                    {/* Benefit 2 */}
                    <div className="p-6 bg-white rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Tailored Solutions</h3>
                        <p>
                            We customize our solutions to meet the specific needs of your business, ensuring maximum effectiveness and alignment with your goals.
                        </p>
                    </div>
                    {/* Benefit 3 */}
                    <div className="p-6 bg-white rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">End-to-End Support</h3>
                        <p>
                            From initial consultation through implementation and beyond, we provide ongoing support to ensure your success with Salesforce.
                        </p>
                    </div>
                    {/* Benefit 4 */}
                    <div className="p-6 bg-white rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Proven Track Record</h3>
                        <p>
                            We have a proven track record of successful Salesforce implementations and satisfied clients across various industries.
                        </p>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="bg-gradient-to-r from-indigo-700 to-indigo-500 py-16 text-center text-white">
                <h2 className="text-3xl font-semibold mb-4">Ready to Elevate Your Business with Salesforce?</h2>
                <p className="mb-8">
                    Contact us today to discover how our Salesforce solutions can help your business thrive.
                </p>
                <button className="bg-white text-indigo-700 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
                    Get in Touch
                </button>
            </section>
        </div>
    );
};

export default SalesforceSolutionsPage;
