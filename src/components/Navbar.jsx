import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setIsOpen(false);
    };

    const navLinks = [
        { name: t('navbar.about'), href: '#about' },
        { name: t('navbar.products'), href: '#products' },
        { name: t('navbar.whyUs'), href: '#why-us' },
        { name: t('navbar.contact'), href: '#contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent text-warmCream py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
                <a href="#" className={`text-2xl font-bold flex items-center gap-2 ${scrolled ? 'text-richBrown' : 'text-warmCream'}`}>
                    <img src="/assets/logo.jpg" alt="RB Dates Logo" className="h-10 w-10 object-contain rounded-full" />
                    <span>RB Dates</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`font-medium hover:text-deepDateBrown transition-colors ${scrolled ? 'text-richBrown' : 'text-warmCream'}`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <LanguageSwitcher scrolled={scrolled} />
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-4 md:hidden">
                    <LanguageSwitcher scrolled={scrolled} />
                    <button
                        className={`${scrolled ? 'text-richBrown' : 'text-warmCream'}`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/10 backdrop-blur-xs border-t border-desertBeige/20 shadow-xl"
                    >
                        <div className="flex flex-col p-4 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="font-medium text-lg py-2 border-b border-desertBeige/30 text-richBrown"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
