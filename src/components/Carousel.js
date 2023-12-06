import React, { useState } from 'react';
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

export default function Carousel({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    const gridColsBase = 'grid-cols-6';
    const gridColsLarge = slides.length >= 18 ? 'lg:grid-cols-9' : 'lg:grid-cols-6';

    return (
        <section className="mx-auto my-4">
            {/* Main Image Container with border */}
            <section className="flex justify-center">
                <section className="relative max-w-[1200px] w-full border border-gray-300 dark:border-gray-700 p-2">
                    <button
                        className="absolute left-6 lg:left-12 z-10 transform -translate-y-1/2 top-1/2"
                        onClick={prevSlide}
                        aria-label="Previous Slide"
                    >
                        <ChevronDoubleLeftIcon className="w-6 h-6 lg:w-12 lg:h-12 hover:bg-red-100 dark:hover:bg-sky-100 text-red-700 dark:text-sky-700 hover:opacity-50" />
                    </button>

                    <a href={slides[currentIndex].src} target="_blank" rel="noopener noreferrer">
                        <Image
                            src={slides[currentIndex].src}
                            alt={slides[currentIndex].alt}
                            width={800}
                            height={360}
                            objectFit="contain"
                            className={'w-full max-h-[80vh]'}
                            style={{ cursor: 'pointer' }}
                        />
                    </a>

                    <button
                        className="absolute right-6 lg:right-12 z-10 transform -translate-y-1/2 top-1/2"
                        onClick={nextSlide}
                        aria-label="Next Slide"
                    >
                        <ChevronDoubleRightIcon className="w-6 h-6 lg:w-12 lg:h-12 hover:bg-red-100 dark:hover:bg-sky-100 text-red-700 dark:text-sky-700 hover:opacity-50" />
                    </button>
                </section>
            </section>

            {/* Thumbnails Container with border */}
            <section className={'flex justify-center mt-4 border border-gray-300 dark:border-gray-700 overflow-x-auto max-w-[1200px] mx-auto p-2'}>
                <section className={`grid ${gridColsBase} ${gridColsLarge} gap-2 justify-items-center`}>
                    {slides.map((slide, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`flex justify-center items-center p-1 ${currentIndex === index ? 'ring-2 ring-sky-500' : 'ring-1 ring-gray-300 hover:ring-2 hover:ring-red-700'}`}
                            aria-label={`Slide ${index + 1}`}
                        >
                            <Image src={slide.src} alt={slide.alt} width={200} height={90} objectFit="cover" />
                        </button>
                    ))}
                </section>
            </section>
        </section>
    );
};
