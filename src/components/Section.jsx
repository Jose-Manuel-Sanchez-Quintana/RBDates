import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Section = ({ children, className, id, ...props }) => {
    return (
        <section
            id={id}
            className={twMerge("py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto", className)}
            {...props}
        >
            {children}
        </section>
    );
};

export default Section;
