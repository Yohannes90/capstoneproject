import React from "react";
import littlelemon_logo from "../assets/little-lemon.png";


const Footer = () => {
    return (
        <footer className="bg-green-600 text-white p-8">
            <section className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <img
                        src={littlelemon_logo}
                        alt="Little Lemon Logo"
                        className="bg-grey-400 h-12 mb-6 mx-auto md:mx-0"
                    />
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-300">Document Navigation</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="/" className="hover:text-green-500 transition duration-300">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-green-500 transition duration-300">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-green-500 transition duration-300">
                                Menu
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-green-500 transition duration-300">
                                Reservations
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-green-500 transition duration-300">
                                Order Online
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-green-500 transition duration-300">
                                Login
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-300">Contact</h3>
                    <ul className="space-y-2">
                        <li>123 Main Street, City</li>
                        <li>(123) 456-7890</li>
                        <li>info@littlelemon.com</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-300">Social Media Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="hover:text-green-500 transition duration-300">
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-green-500 transition duration-300">
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-green-500 transition duration-300">
                                Twitter
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
            <div className="text-center mt-8 text-gray-400 text-sm">
                <p>&copy; 2025 Little Lemon. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
