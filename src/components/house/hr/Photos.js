import React, { useState } from 'react';
import Carousel from '@/components/Carousel';
import Gallery from '@/components/Gallery';

export default function Photos() {

    const [showMore, setShowMore] = useState(false);

    const displayMoreText = "Pročitaj više";
    const displayLessText = "Prikaži manje";

    const slides = [
        { src: '/img/progress/1.jpg', alt: 'Photo 1' },
        { src: '/img/progress/2.jpg', alt: 'Photo 2' },
        { src: '/img/progress/3.jpg', alt: 'Photo 3' },
        { src: '/img/progress/4.jpg', alt: 'Photo 4' },
        { src: '/img/progress/5.jpg', alt: 'Photo 5' },
        { src: '/img/progress/6.jpg', alt: 'Photo 6' },
        { src: '/img/progress/7.jpg', alt: 'Photo 7' },
        { src: '/img/progress/8.jpg', alt: 'Photo 8' },
        { src: '/img/progress/9.jpg', alt: 'Photo 9' },
        { src: '/img/progress/10.jpg', alt: 'Photo 10' },
        { src: '/img/progress/11.jpg', alt: 'Photo 11' },
        { src: '/img/progress/12.jpg', alt: 'Photo 12' },
        { src: '/img/progress/13.jpg', alt: 'Photo 13' },
        { src: '/img/progress/14.jpg', alt: 'Photo 14' },
        { src: '/img/progress/15.jpg', alt: 'Photo 15' },
        { src: '/img/progress/16.jpg', alt: 'Photo 16' },
        { src: '/img/progress/17.jpg', alt: 'Photo 17' },
        { src: '/img/progress/18.jpg', alt: 'Photo 18' },
    ];

    const blueprints = [
        { src: '/img/blueprints/1-medium.jpg', alt: 'Blueprint 1' },
        { src: '/img/blueprints/2-medium.jpg', alt: 'Blueprint 2' },
        { src: '/img/blueprints/3-medium.jpg', alt: 'Blueprint 3' },
        { src: '/img/blueprints/4-medium.jpg', alt: 'Blueprint 4' },
        { src: '/img/blueprints/5-medium.jpg', alt: 'Blueprint 5' },
        { src: '/img/blueprints/6-medium.jpg', alt: 'Blueprint 6' },
    ];

    const images = [
        { src: '/img/images/1.jpeg', alt: 'Photo 1' },
        { src: '/img/images/2.jpeg', alt: 'Photo 2' },
        { src: '/img/images/3.jpeg', alt: 'Photo 3' },
        { src: '/img/images/4.jpeg', alt: 'Photo 4' },
        { src: '/img/images/5.jpeg', alt: 'Photo 5' },
        { src: '/img/images/6.jpeg', alt: 'Photo 6' },
    ];

    const previewContent = (

        <React.Fragment>
            <h1 className="font-bold text-2xl lg:text-3xl text-center mt-4 mb-8 uppercase">Galerija slika</h1>
            <Carousel slides={slides} />
        </React.Fragment>

    );

    const fullContent = (

        <React.Fragment>

            <section className="my-8">
                <Gallery images={images} />
                <Carousel slides={blueprints} />
            </section>

        </React.Fragment>

    );

    return (

        <section className="text-black dark:text-sky-200 p-4">
            {previewContent}
            {showMore && fullContent}
            <div className="text-center mt-8">
                <button
                    onClick={() => setShowMore(!showMore)}
                    className={`${showMore ? 'danger-button' : 'success-button'}`}
                >
                    {showMore ? displayLessText : displayMoreText}
                </button>
            </div>
        </section>

    );
}
