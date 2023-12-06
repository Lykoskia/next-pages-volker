import React, { useState } from 'react';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';

export default function Building() {

    const [showMore, setShowMore] = useState(false);

    const displayMoreText = "Read more";
    const displayLessText = "Show less";

    const previewContent = (

        <React.Fragment>
            <h1 className="font-bold text-2xl lg:text-3xl text-center my-4 uppercase">Building my Villa</h1>
            <ul>
                <li className="style-none"><ArrowLongRightIcon className="w-5 h-5 mr-1 text-sky-700 inline" />Property sought and found</li>
                <li className="style-none"><ArrowLongRightIcon className="w-5 h-5 mr-1 text-sky-700 inline" />Architects sought and found</li>
                <li className="style-none"><ArrowLongRightIcon className="w-5 h-5 mr-1 text-sky-700 inline" />Nadzor (super visor of the construction site) sought and found</li>
                <li className="style-none"><ArrowLongRightIcon className="w-5 h-5 mr-1 text-sky-700 inline" />Searched for and found a construction company</li>
                <li className="style-none"><ArrowLongRightIcon className="w-5 h-5 mr-1 text-sky-700 inline" />Searched and found various craftsmen</li>
                <li className="style-none"><ArrowLongRightIcon className="w-5 h-5 mr-1 text-sky-700 inline" />Searched and found a website developer</li>
            </ul>

            <p className="text-justify mb-5 mt-5">In May 2021 I was in Croatia for the first time in my life, because my vacation in Italy had to be canceled due to Corona - because Italy still had its borders closed.</p>
            <p className="text-justify mb-5">But in Croatia everything is more casual (I had to get used to the slow pace though...) and so I went on an &quot;alternative vacation&quot; with my partner. I fell in love with the country and bought a property where I actually liked it best - namely in the harbor town of Crikvenica.</p>
        </React.Fragment>

    );

    const fullContent = (

        <React.Fragment>
            <p className="text-justify mb-5 mt-5">This was followed by the search for an architect, for a Nadzor (a construction expert who is required by law, whom you as an investor have to pay yourself and who, in the exclusive interest of the investor, ensures that all laws and the architect&apos;s office comply with the construction work. project desired qualities are met), for a construction company for the shell construction, for a good window company, plasterer, tiler, facade builder, painter, craftsman for Knauf, plumbing, electrical, land surveyor,... and and and.</p>
            <p className="text-justify mb-5">Most importantly, however, are my experiences with the building authority. I always got various offers for everything and I can now use and pass on this knowledge to others.</p>
            <p className="text-justify mb-5">My experiences are varied, but I limit them to the coastline between Jadranovo and Klenovica; This also includes places like Novi Vinodolski, Selce, Dramalj and especially Crikvenica, where the important building office is located (as well as the tax office and the land registry) and these offices are responsible for exactly this region.</p>
            <p className="text-justify mb-5">After all the decisions I had to make for myself, I am now building a house in Crikvenica and - as of March - I am on the third floor of my shell. The house will be ready in summer 2023.</p>
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
