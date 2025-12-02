import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    return (
        <Section id="about" className="bg-warmCream">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src="/assets/dates-closeup.jpg"
                            alt="Close up of fresh dates"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-2/3 aspect-video rounded-xl overflow-hidden shadow-xl border-4 border-warmCream hidden md:block">
                        <img
                            src="/assets/pollen.jpg"
                            alt="Date processing"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-deepDateBrown text-sm font-bold uppercase tracking-widest mb-2">{t('about.sectionTitle')}</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-richBrown mb-6">{t('about.mainTitle')}</h3>
                    <p className="text-richBrown/80 text-lg mb-6 leading-relaxed">
                        {t('about.p1')}
                    </p>
                    <p className="text-richBrown/80 text-lg mb-8 leading-relaxed">
                        {t('about.p2')}
                    </p>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="border-l-4 border-deepDateBrown pl-4">
                            <h4 className="text-2xl font-bold text-deepDateBrown mb-1">100%</h4>
                            <p className="text-richBrown/70">{t('about.natural')}</p>
                        </div>
                        <div className="border-l-4 border-deepDateBrown pl-4">
                            <h4 className="text-2xl font-bold text-deepDateBrown mb-1">Premium</h4>
                            <p className="text-richBrown/70">{t('about.quality')}</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

export default About;
