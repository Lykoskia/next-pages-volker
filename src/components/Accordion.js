import React, { useState } from 'react';
import { ChevronDoubleUpIcon, ChevronDoubleDownIcon } from '@heroicons/react/24/solid';

export default function Accordion({ title, children, translations }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const getTranslatedTitle = (titleKey) => {
        return translations[titleKey] || titleKey;
    };

    return (
        <section className="border-b-8 border-sky-100 dark:border-gray-900">
            <section
                className={`group rounded-full flex justify-between items-center p-3 pl-8 pr-8 cursor-pointer select-none dark:text-gray-300 ${isOpen ? "bg-red-200 dark:bg-sky-900 hover:bg-sky-300 dark:hover:bg-sky-700" : "bg-sky-200 dark:bg-sky-950 hover:bg-sky-200 dark:hover:bg-sky-800"}`}
                onClick={handleToggle}
            >
                <span className="text-lg font-bold text-red-700 group-hover:text-sky-700 dark:group-hover:text-white dark:text-sky-300 uppercase">
                    {getTranslatedTitle(title)}
                </span>
                <section className="group-hover:text-sky-700 dark:group-hover:text-white">
                    {isOpen ? <ChevronDoubleUpIcon className="h-6 w-6" /> : <ChevronDoubleDownIcon className="h-6 w-6" />}
                </section>
            </section>
            {isOpen && (
                <section>
                    <section className="p-4">
                        {children}
                    </section>
                </section>
            )}
        </section>
    );
};
