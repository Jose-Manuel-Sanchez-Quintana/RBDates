import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/palms.jpg"
                    alt="Dates drying in the sun"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-warmCream" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-block py-1 px-3 rounded-full bg-warmCream/20 backdrop-blur-sm border border-warmCream/30 text-warmCream text-sm font-medium mb-6 tracking-wider uppercase"
                >
                    Premium Quality Dates
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold text-warmCream mb-6 leading-tight"
                >
                    RB Dates
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-desertBeige mb-10 font-light"
                >
                    From Palm to Table — Experience the Sweetness of Nature
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a
                        href="#products"
                        className="px-8 py-4 bg-deepDateBrown text-warmCream rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                    >
                        Explore Our Dates
                    </a>
                    <a
                        href="#about"
                        className="px-8 py-4 bg-warmCream text-deepDateBrown rounded-full font-semibold text-lg hover:bg-white transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                    >
                        Our Story
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
