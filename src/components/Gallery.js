import React, { useState } from 'react';
import Image from 'next/image';

export default function Gallery({ images }) {
    const [hoveredImage, setHoveredImage] = useState(null);

    const handleImageHover = (index) => {
        setHoveredImage(index);
    };

    const handleImageLeave = () => {
        setHoveredImage(null);
    };

    return (
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 mx-6 lg:mx-24 justify-center">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`border border-gray-300 dark:border-gray-700 p-4 thumbnail-container transform transition-transform hover:scale-110 ${hoveredImage === index ? 'hovered' : ''
                        } flex items-center justify-center`}
                    onMouseEnter={() => handleImageHover(index)}
                    onMouseLeave={handleImageLeave}
                >
                    <a href={image.src} target="_blank" rel="noopener noreferrer">
                        <div className="w-full sm:w-auto">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={200}
                                height={150}
                                objectFit="contain"
                                layout="responsive"
                            />
                        </div>
                    </a>
                </div>
            ))}
        </section>
    );
};
