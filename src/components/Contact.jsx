import React from 'react';
import Section from './Section';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <Section id="contact" className="bg-warmCream">
            <div className="md:grid-cols-2 gap-12 lg:gap-24">
                <div>
                    <h2 className="text-deepDateBrown text-sm font-bold uppercase tracking-widest mb-2">Get in Touch</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-richBrown mb-6">Let's Connect</h3>
                    <p className="text-richBrown/80 text-lg mb-10 leading-relaxed">
                        Have questions about our products or want to place a bulk order? We'd love to hear from you. Reach out to us directly
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="bg-deepDateBrown/10 p-3 rounded-full text-deepDateBrown">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-richBrown text-lg">Phone</h4>
                                <p className="text-richBrown/70">+1 928-259-9317</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="bg-deepDateBrown/10 p-3 rounded-full text-deepDateBrown">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-richBrown text-lg">Email</h4>
                                <p className="text-richBrown/70">hello@rbdates.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="bg-deepDateBrown/10 p-3 rounded-full text-deepDateBrown">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-richBrown text-lg">Location</h4>
                                <p className="text-richBrown/70">Palm Grove Valley, CA 92201</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
