import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher = ({ scrolled }) => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setIsOpen(false);
    };

    const currentLang = i18n.language ? i18n.language.split('-')[0] : 'en';

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center gap-1 font-medium transition-colors ${scrolled ? 'text-richBrown hover:text-deepDateBrown' : 'text-warmCream hover:text-white'
                    }`}
                aria-label="Change Language"
                aria-expanded={isOpen}
            >
                <Globe size={20} />
                <span className="uppercase">{currentLang}</span>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-xl py-2 transition-all duration-300 transform origin-top-right z-50 border border-warmCream/20">
                    <button
                        onClick={() => changeLanguage('en')}
                        className={`block w-full text-left px-4 py-2 text-sm hover:bg-warmCream/20 transition-colors ${currentLang === 'en' ? 'text-deepDateBrown font-bold bg-warmCream/10' : 'text-richBrown'
                            }`}
                    >
                        English
                    </button>
                    <button
                        onClick={() => changeLanguage('es')}
                        className={`block w-full text-left px-4 py-2 text-sm hover:bg-warmCream/20 transition-colors ${currentLang === 'es' ? 'text-deepDateBrown font-bold bg-warmCream/10' : 'text-richBrown'
                            }`}
                    >
                        Español
                    </button>
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
