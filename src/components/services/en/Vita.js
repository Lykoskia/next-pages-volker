import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';

export default function Vita() {

    const [showMore, setShowMore] = useState(false);

    const displayMoreText = "Read more";
    const displayLessText = "Show less";

    const previewContent = (

        <React.Fragment>
            <h1 className="font-bold text-3xl text-center my-4 uppercase">My Vita</h1>
            <ul>
                <li className="style-none"><ArrowLongRightIcon className="w-5 h-5 mr-1 text-sky-700 inline" />Born in Hamburg in 1967</li>
                <li className="style-none"><ArrowLongRightIcon className="w-5 h-5 mr-1 text-sky-700 inline" />Since 2021 with permanent residence in the Kvarner Bay, Croatia</li>
                <li className="style-none"><ArrowLongRightIcon className="w-5 h-5 mr-1 text-sky-700 inline" />Speak German and English fluently</li>
                <li className="style-none"><ArrowLongRightIcon className="w-5 h-5 mr-1 text-sky-700 inline" />After graduating from high school, he was a businessman by profession and then a news journalist and presenter on radio and television (20 years at Deutschlandfunk and 10 years at Euronews)</li>
                <li className="style-none"><ArrowLongRightIcon className="w-5 h-5 mr-1 text-sky-700 inline" />I now have various private and “construction” contacts in the region</li>
            </ul>

            <p className="text-justify mb-5 mt-5">Volker Hengst, born in 1967, emigrated from Germany in 2021, lives in Klenovica, Croatia, with his primary residence, has an &quot;OIB&quot;, the Croatian tax number.</p>
            <p className="text-justify mb-5">Serious by profession, (news anchor at Euronews, Norddeutscher Rundfunk) I have also been a news anchor at Deutschlandfunk for more than 20 years, where I was a permanent member of the speaker ensemble until I applied for a two-year break at my own request in November 2021. This still exists today, but things are going well in Croatia.</p>

        </React.Fragment>

    );

    const fullContent = (

        <React.Fragment>
            <p className="text-justify mb-5">I am now fully integrated; apart from the language, I behave completely normally among the locals. I have statutory health insurance here and as a table tennis player in the two clubs STK Crikvenica and Novi Vinodolski, I have contact with the locals.</p>
            <p className="text-justify mb-5">My first doubles partner was a long-time employee of Lesnina XXL (furniture store), and for the past 8 months, my regular doubles partner has been one of the most skilled and experienced police officers at the local police station in Crikvenica, which is also responsible for the entire surrounding area.</p>
            <p className="text-justify mb-5">In addition, there are now around 500 additional contacts through house building research, neighbors and acquaintances of acquaintances.</p>
            <p className="text-justify mb-5">And contacts are immensely important here - especially in Croatia. Firstly because these contacts can help directly and secondly because every Croatian feels like he has 100 very good friends who can help you.</p>
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
