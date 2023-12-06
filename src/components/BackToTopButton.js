import React, { useState, useEffect } from 'react';
import { ArrowLongUpIcon } from '@heroicons/react/24/solid';

const BackToTopButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 200) setVisible(true);
        else setVisible(false);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
        return () => window.removeEventListener('scroll', toggleVisible);
    }, []);

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-4 right-4 transition ease-in-out duration-500 ${visible ? 'opacity-100' : 'opacity-0'} bg-red-700 hover:bg-sky-700 dark:bg-sky-700 dark:hover:bg-red-700 text-white hover:text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-50`}
            aria-label="Back to Top"
        >
            <ArrowLongUpIcon className="w-6 h-6" />
        </button>
    );
};

export default BackToTopButton;
