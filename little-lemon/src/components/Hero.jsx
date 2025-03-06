import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../assets/food_hero.jpg";


const Hero = () => {
    return (
        <header className="bg-green-100 min-h-[85vh] flex items-center overflow-hidden">
            <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 md:px-12">

                {/* Left Section - Animated Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-center md:text-left"
                >
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-5xl md:text-6xl font-extrabold text-green-900 mb-3"
                    >
                        Little Lemon
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-2xl md:text-3xl text-gray-800 mb-5"
                    >
                        Chicago
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="text-lg text-gray-700 mb-8 leading-relaxed"
                    >
                        We are a family-owned Mediterranean restaurant, focused on
                        traditional recipes served with a modern twist.
                        Join us for an unforgettable dining experience, where every
                         dish is crafted with passion and fresh, quality ingredients.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                    >
                        <Link to="/Booking">
                            <button
                                aria-label="Make Reservation"
                                className="w-full sm:w-auto py-3 px-6 border border-transparent rounded-md shadow-lg text-base font-semibold text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 cursor-pointer transition-transform duration-200 hover:scale-105"
                                >
                                Reserve Your Table
                            </button>

                        </Link>
                    </motion.div>
                </motion.div>

                {/* Right Section - Animated Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex justify-center"
                >
                    <motion.img
                        src={heroImage}
                        alt="Delicious Mediterranean Cuisine"
                        className="h-[400px] md:h-[500px] w-full md:max-w-lg object-cover rounded-xl shadow-2xl transition-all duration-500 hover:scale-105"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                </motion.div>

            </section>
        </header>
    );
};

export default Hero;
