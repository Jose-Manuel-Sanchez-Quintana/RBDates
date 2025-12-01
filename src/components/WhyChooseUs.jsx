import React from 'react';
import Section from './Section';
import { Sun, Leaf, Award, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: <Sun size={32} />,
        title: "Sun-Kissed Flavor",
        description: "Grown in the ideal climate, our dates absorb the natural sweetness of the sun."
    },
    {
        icon: <Leaf size={32} />,
        title: "Sustainably Grown",
        description: "We use eco-friendly farming practices to protect our land and your health."
    },
    {
        icon: <Award size={32} />,
        title: "Premium Selection",
        description: "Only the finest dates make the cut, ensuring consistent size, texture, and taste."
    },
    {
        icon: <Truck size={32} />,
        title: "Farm to Doorstep",
        description: "Direct distribution means you get the freshest dates at the best value."
    }
];

const WhyChooseUs = () => {
    return (
        <Section id="why-us" className="bg-deepDateBrown relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1" fill="#FAF7F2" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#pattern)" />
                </svg>
            </div>

            <div className="relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-desertBeige text-sm font-bold uppercase tracking-widest mb-2">Why Choose Us</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-warmCream">The RB Dates Difference</h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-richBrown/50 backdrop-blur-sm p-8 rounded-2xl border border-warmCream/10 hover:bg-richBrown/70 transition-colors group"
                        >
                            <div className="bg-warmCream/10 w-16 h-16 rounded-full flex items-center justify-center text-warmCream mb-6 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h4 className="text-xl font-bold text-warmCream mb-3">{feature.title}</h4>
                            <p className="text-desertBeige leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default WhyChooseUs;
