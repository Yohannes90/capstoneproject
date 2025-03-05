import React from "react";
import littlelemon_logo from "../assets/little-lemon2.png";

const Footer = () => {
  return (
    <footer className="bg-gray-400 text-white p-8">
      <section className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img
            src={littlelemon_logo}
            alt="Little Lemon Logo"
            className="h-12 mb-4"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Document Navigation</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Menu
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Reservations
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Order Online
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Login
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <ul className="space-y-1">
            <li>123 Main Street, City</li>
            <li>(123) 456-7890</li>
            <li>info@littlelemon.com</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Social Media Links</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:text-gray-300">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
