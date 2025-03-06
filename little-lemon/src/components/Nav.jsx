import React from "react";
import littlelemon_logo from "../assets/little-lemon.png";


const Nav = () => {
    return (
        <nav className="flex items-center justify-between p-4 bg-white shadow-md border-b-2 border-gray-200">
            <img
                src={littlelemon_logo}
                alt="Little Lemon Logo"
                className="h-12 sm:h-16 md:h-20 pl-8"
            />
            <ul className="flex space-x-6 text-lg font-semibold pr-20">
                <li>
                    <a
                        href="/"
                        className="text-gray-800 hover:text-green-600 transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="text-gray-800 hover:text-green-600 transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        About
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="text-gray-800 hover:text-green-600 transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        Menu
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="text-gray-800 hover:text-green-600 transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        Reservations
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="text-gray-800 hover:text-green-600 transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        Order Online
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="text-gray-800 hover:text-green-600 transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        Login
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
