import React, { useState } from 'react';
import Image from 'next/image';

export default function About() {

    const [showMore, setShowMore] = useState(false);

    const displayMoreText = "Read more";
    const displayLessText = "Show less";

    const previewContent = (

        <React.Fragment>
            <h1 className="font-bold text-2xl lg:text-3xl text-center my-4 uppercase">About us – the sellers</h1>
            <figure className="flex justify-center my-4">
                <Image
                    src="/img/wir.jpg"
                    alt="My significant other and me"
                    width={1000}
                    height={450}
                    layout="responsive"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 800px"
                    priority
                    className="my-4 max-w-screen-md p-2 shadow-lg border border-gray-300 dark:border-gray-700"
                />
            </figure>
            <p className="text-justify mb-5">We – my partner and I – came to Croatia for the first time in May 2021. We wanted to go to Italy, but the borders were closed at the time because of Corona. Since the Mediterranean was important to us, we decided on open Croatia.</p>
        </React.Fragment>

    );

    const fullContent = (

        <React.Fragment>
            <p className="text-justify mb-5">We fell in love with this country and drove from the north to Dubrovnik in the deep south.</p>
            <p className="text-justify mb-5">We liked it best by far in the Kvarner Bay. Because of the beautiful landscape, I then decided to buy a plot of land to build our own house there - but not just anywhere, but deliberately in Crikvenica, a small town with a very nice tourist flair. An ingenious mix of holiday paradise and good infrastructure, even out of season.</p>
            <p className="text-justify mb-5">We have traveled a lot on the Mediterranean and nowhere else in Croatia did we have such a feeling of actually being on the Cote d Azur because of the palm trees and the &quot;way of life&quot;... After the holiday it was clear to us: We want to sell our house in Germany and move to Croatia.</p>
            <p className="text-justify mb-5">We now live near Crikvenica while keeping an eye on the activities of construction companies and craftsmen with four eyes wide open.</p>
        </React.Fragment>

    );

    return (
        <section className="text-black dark:text-sky-200 p-4">
            {previewContent}
            <div className={`${showMore ? 'block' : 'hidden'}`}>
                {fullContent}
            </div>
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
