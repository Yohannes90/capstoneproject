import React from "react";
import littlelemon_logo from "../assets/little-lemon.png";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      <img
        src={littlelemon_logo}
        alt="Little Lemon Logo"
        className="h-12" // Adjust logo height as needed
      />
      <ul className="flex space-x-6">
        <li>
          <a href="#" className="text-gray-800 hover:text-green-600">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-800 hover:text-green-600">
            About
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-800 hover:text-green-600">
            Menu
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-800 hover:text-green-600">
            Reservations
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-800 hover:text-green-600">
            Order Online
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-800 hover:text-green-600">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
