import React from 'react';
import { Facebook, Music2 } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-richBrown text-desertBeige py-12 border-t border-warmCream/10">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <a href="#" className="text-2xl font-bold text-warmCream flex items-center gap-2 mb-4">
                            <span>RB Dates</span>
                        </a>
                        <p className="max-w-sm text-desertBeige/70 leading-relaxed">
                            Bringing the finest, sun-ripened dates from our palms to your table. Experience the natural sweetness and health benefits of premium quality dates.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-warmCream font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#about" className="hover:text-warmCream transition-colors">About Us</a></li>
                            <li><a href="#products" className="hover:text-warmCream transition-colors">Our Products</a></li>
                            <li><a href="#why-us" className="hover:text-warmCream transition-colors">Why Choose Us</a></li>
                            <li><a href="#contact" className="hover:text-warmCream transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-warmCream font-bold mb-4">Follow Us</h4>
                        <div className="flex gap-4">
                            <a href="https://www.tiktok.com/@rbdates" className="bg-warmCream/10 p-2 rounded-full hover:bg-warmCream/20 transition-colors text-warmCream">
                                <Music2 size={20} />
                            </a>
                            <a href="https://www.facebook.com/RBdates" className="bg-warmCream/10 p-2 rounded-full hover:bg-warmCream/20 transition-colors text-warmCream">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-warmCream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-desertBeige/50">
                    <p>&copy; {new Date().getFullYear()} RB Dates. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-desertBeige transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-desertBeige transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
