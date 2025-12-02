import React from 'react';
import Section from './Section';
import { Sun, Leaf, Award, Truck } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const WhyChooseUs = () => {
    const { t } = useTranslation();

    const features = [
        {
            icon: <Sun size={32} />,
            title: t('whyUs.items.flavor.title'),
            description: t('whyUs.items.flavor.description')
        },
        {
            icon: <Leaf size={32} />,
            title: t('whyUs.items.sustainable.title'),
            description: t('whyUs.items.sustainable.description')
        },
        {
            icon: <Award size={32} />,
            title: t('whyUs.items.premium.title'),
            description: t('whyUs.items.premium.description')
        },
        {
            icon: <Truck size={32} />,
            title: t('whyUs.items.delivery.title'),
            description: t('whyUs.items.delivery.description')
        }
    ];

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
                    <h2 className="text-desertBeige text-sm font-bold uppercase tracking-widest mb-2">{t('whyUs.sectionTitle')}</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-warmCream">{t('whyUs.mainTitle')}</h3>
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
