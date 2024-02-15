import React, { useState } from 'react';
import Image from 'next/image';

export default function About() {

    const [showMore, setShowMore] = useState(false);

    const displayMoreText = "Weiter lesen";
    const displayLessText = "Verbergen";

    const previewContent = (

        <React.Fragment>
            <h1 className="font-bold text-2xl lg:text-3xl text-center my-4 uppercase">Wir – Die Verkäufer</h1>
            <figure className="flex justify-center my-4">
                <Image
                    src="/img/wir.jpg"
                    alt="Meine Lebensgefährtin und ich"
                    width={1000}
                    height={450}
                    layout="responsive"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 800px"
                    priority
                    className="my-4 max-w-screen-md p-2 shadow-lg border border-gray-300 dark:border-gray-700"
                />
            </figure>
            <p className="text-justify mb-5">Wir – meine Lebensgefährtin und ich – kamen im Mai 2021 zum ersten Mal nach Kroatien. Wir wollten nach Italien, doch wegen Corona waren die Grenzen damals dicht. Da uns das Mittelmeer wichtig war, entschieden wir uns für das geöffnete Kroatien.</p>
        </React.Fragment>

    );

    const fullContent = (

        <React.Fragment>
            <p className="text-justify mb-5">Am besten gefiel es uns mit Abstand in der Kvarner Bucht. Aufgrund der schönen Landschaft entschied ich mich dann, ein Grundstück zu kaufen, um dort für uns ein eigenes Villa zu bauen - allerdings nicht irgendwo, sondern schon bewusst in Crikvenica, einer Kleinstadt mit sehr schönem touristischem Flair. Einer genialen Mischung aus Urlaubsparadies und guter Infrastruktur auch außerhalb der Saison.</p>
            <p className="text-justify mb-5">Wir sind am Mittelmeer schon viel rumgekommen und nirgendwo in Kroatien hatten wir aufgrund der Palmen und des &quot;Way of life&quot; so sehr das Gefühl, eigentlich an der Cote d Azur zu sein... Nach dem Urlaub war für uns klar: Wir wollen unser Villa in Deutschland verkaufen und nach Kroatien ziehen.</p>
            <p className="text-justify mb-5">Wir wohnen jetzt in der Nähe von Crikvenica während wir mit vier wachen Augen die Tätigkeiten der Baufirmen und Handwerker im Blick haben.</p>
            <p className="text-justify mb-5">Wir verliebten uns in dieses Land und fuhren vom Norden bis nach Dubrovnik im tiefen Süden.</p>
        </React.Fragment>
        
    );

    return (
        <section className="text-black dark:text-sky-200 p-4">
            <div className={`${showMore ? '' : 'block'}`}>
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
