import React, { useState } from 'react';
import Section from './Section';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
    {
        id: 1,
        title: "Premium Medjool Dates",
        description: "Known as the 'King of Dates', our Medjool dates are large, soft, and bursting with caramel-like flavor.",
        image: "/assets/boxes.jpg"
    },
    {
        id: 2,
        title: "Fresh Harvest",
        description: "Hand-picked at the perfect moment of ripeness to ensure maximum sweetness and texture.",
        image: "/assets/dates-closeup.jpg"
    },
    {
        id: 3,
        title: "Quality Processing",
        description: "Our rigorous sorting and packing process guarantees that only the best dates make it to your table.",
        image: "/assets/processing.jpg"
    },
    {
        id: 4,
        title: "Golden Medjool Delights",
        description: "These Medjool dates are large and elongated, with a rich amber-brown color that signals their natural sweetness and premium quality.",
        image: "/assets/dates-box2.jpg"
    }
];

const Products = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => (prevIndex + newDirection + products.length) % products.length);
    };

    return (
        <Section id="products" className="bg-white overflow-hidden">
            <div className="text-center mb-16">
                <h2 className="text-deepDateBrown text-sm font-bold uppercase tracking-widest mb-2">Our Collection</h2>
                <h3 className="text-4xl md:text-5xl font-bold text-richBrown">Nature's Finest Dates</h3>
            </div>

            <div className="relative h-[500px] w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-warmCream">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);

                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                            }
                        }}
                        className="absolute w-full h-full flex flex-col md:flex-row"
                    >
                        <div className="w-full md:w-1/2 h-1/2 md:h-full relative">
                            <img
                                src={products[currentIndex].image}
                                alt={products[currentIndex].title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden" />
                        </div>
                        <div className="w-full md:w-1/2 h-1/2 md:h-full bg-deepDateBrown p-8 md:p-12 flex flex-col justify-center text-warmCream">
                            <h4 className="text-3xl font-bold mb-4">{products[currentIndex].title}</h4>
                            <p className="text-desertBeige text-lg mb-8 leading-relaxed">
                                {products[currentIndex].description}
                            </p>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <button
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-white/40 transition-colors z-10"
                    onClick={() => paginate(-1)}
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-white/40 transition-colors z-10"
                    onClick={() => paginate(1)}
                >
                    <ChevronRight size={24} />
                </button>

                {/* Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                    {products.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                            }}
                            className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-warmCream' : 'bg-white/30'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Products;
