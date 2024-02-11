import React, { useState } from 'react';
import Image from 'next/image';

export default function About() {

    const [showMore, setShowMore] = useState(false);

    const displayMoreText = "Pročitaj više";
    const displayLessText = "Prikaži manje";

    const previewContent = (

        <React.Fragment>
            <h1 className="font-bold text-2xl lg:text-3xl text-center my-4 uppercase">O nama – prodavačima</h1>
            <figure className="flex justify-center my-4">
                <Image
                    src="/img/wir.jpg"
                    alt="Moja draga i ja"
                    width={1000}
                    height={450}
                    layout="responsive"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 800px"
                    priority
                    className="my-4 max-w-screen-md p-2 shadow-lg border border-gray-300 dark:border-gray-700"
                />
            </figure>
            <p className="text-justify mb-5">Mi – moja draga i ja – prvi put smo došli u Hrvatsku u svibnju 2021. Htjeli smo ići u Italiju, ali su granice tada bile zatvorene zbog korone. Budući da nam je Mediteran bio važan, odlučili smo se za otvorenu Hrvatsku.</p>
        </React.Fragment>

    );

    const fullContent = (

        <React.Fragment>
            <p className="text-justify mb-5">Zaljubili smo se u ovu zemlju i odvezli se sa sjevera do Dubrovnika na dubokom jugu.</p>
            <p className="text-justify mb-5">Na Kvarnerskom zaljevu nam se daleko najviše svidjelo. Zbog prekrasnog krajolika, tada sam odlučio kupiti zemljište da tamo sagradim vlastitu kuću - ali ne bilo gdje, već namjerno u Crikvenici, malom gradu s vrlo lijepim turističkim štihom. Genijalan spoj raja za odmor i dobre infrastrukture, čak i izvan sezone.</p>
            <p className="text-justify mb-5">Puno smo putovali po Mediteranu i nigdje drugdje u Hrvatskoj zbog palmi i odnosa prema životu nismo imali takav osjećaj da smo zapravo na Azurnoj obali... Nakon odmora bilo nam je jasno: želimo prodati kuću u Njemačkoj i preseliti se u Hrvatsku.</p>
            <p className="text-justify mb-5">I tako sada živimo u blizini, a aktivnosti građevinskih tvrtki i obrtnika uvijek budno pratimo.</p>
        </React.Fragment>

    );

    return (
        <section className="text-black dark:text-sky-200 p-4">
            <div className={`${showMore ? 'hidden' : 'block'}`}>
                {previewContent}
            </div>
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
