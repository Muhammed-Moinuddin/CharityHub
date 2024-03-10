import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black-500 text-white p-6 mt-auto w-full border-t border-gray-500">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between pb-6">
                    <div className="flex flex-col items-center w-full md:w-1/2 mb-4 md:mb-0">
                        <div>
                            <h2 className="text-lg font-semibold mb-2">About Company</h2>
                            <p className="text-left text-gray-300">Connecting helpers, organizations, and donors. Built with passion in MERN during a hackathon, fostering collaboration for a positive impact. Join our journey of compassion and community.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-full md:w-1/2 mb-4 md:mb-0">
                        <div>
                            <h2 className="text-lg font-semibold mb-2">Contact Information</h2>
                            <p className="text-left text-gray-300">Email: contact@example.com</p>
                            <p className="text-left text-gray-300">Phone: +1 123-456-7890</p>
                            <p className="text-left text-gray-300">Address: Your Company Address</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center border-t border-gray-500">
                    <div className="w-full">
                        <p className="mt-3 text-center text-gray-300">&copy; 2024 Your Company. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;