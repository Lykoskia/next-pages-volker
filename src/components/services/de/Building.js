import React, { useState } from 'react';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';

export default function Building() {

    const [showMore, setShowMore] = useState(false);

    const displayMoreText = "Weiter lesen";
    const displayLessText = "Verbergen";

    const previewContent = (

        <React.Fragment>
            <h1 className="font-bold text-2xl lg:text-3xl text-center my-4 uppercase">Bau meiner Villa</h1>
            <ul>
                <li className="style-none"><ArrowLongRightIcon className="w-5 h-5 mr-1 text-sky-700 inline" />Grundstück gesucht und gefunden</li>
                <li className="style-none"><ArrowLongRightIcon className="w-5 h-5 mr-1 text-sky-700 inline" />Architekten gesucht und gefunden</li>
                <li className="style-none"><ArrowLongRightIcon className="w-5 h-5 mr-1 text-sky-700 inline" />Nadzor (Super-Visor der Baustelle) gesucht und gefunden</li>
                <li className="style-none"><ArrowLongRightIcon className="w-5 h-5 mr-1 text-sky-700 inline" />Baufirma gesucht und gefunden</li>
                <li className="style-none"><ArrowLongRightIcon className="w-5 h-5 mr-1 text-sky-700 inline" />Diverse Handwerker gesucht und gefunden</li>
                <li className="style-none"><ArrowLongRightIcon className="w-5 h-5 mr-1 text-sky-700 inline" />Website-Entwickler gesucht und gefunden</li>
            </ul>

            <p className="text-justify mb-5 mt-5">Im Mai 2021 war ich das erste Mal in meinem Leben in Kroatien, und zwar weil der Italien-Urlaub wegen Corona gecancelt werden musste - denn Italien hatte seine Grenzen noch dicht.</p>
            <p className="text-justify mb-5">In Kroatien ist aber alles legerer (an die Langsamkeit musste ich mich allerdings auch erst gewöhnen..) und so machte ich mit meiner Lebensgefährtin einen &quot;Ausweich-Urlaub&quot;. Bei diesem verliebte ich mich in das Land und kaufte dort ein Grundstück, wo es mir tatsächlich am besten gefiel - nämlich im Hafenstädtchen Crikvenica.</p>
        </React.Fragment>

    );

    const fullContent = (

        <React.Fragment>
            <p className="text-justify mb-5 mt-5">Danach folgte die Suche nach einem Architeckten, nach einem Nadzor (einem Bau-Sachverständigen, der gesetzlich vorgeschrieben ist, den man selbst als Investor bezahlen muss und der im ausschließlichen Interesse des Investors auf dem Bau darauf achtet, dass alle Gesetze und durch das Architekten-Projekt gewünschten Qualitäten eingehalten werden), nach einer Baufirma für den Rohbau, nach einer guten Fensterfirma, Verputzer, Fliesenleger, Fassaden-Bauer, Maler, Handwerker für Knauf, Sanitär, Elektrik, Landvermesser,..... und und und.</p>
            <p className="text-justify mb-5">Am allerwichtigsten sind allerdings meine Erfahrungen mit dem Bauamt. Für alles habe ich mir immer diverse Angebote eingeholt und dieses Wissen kann ich nun auch für andere nutzen und weitergeben.</p>
            <p className="text-justify mb-5">Meine Erfahrungen sind vielfältig, ich schränke diese allerdings auf die Küstenlinie zwischen Jadranovo bis Klenovica ein; dazu gehören auch Orte wie Novi Vinodolski, Selce, Dramalj und vor allen Crikvenica, wo auch das so wichtige Bauamt ansässig ist (wie auch das Finanzamt und das Grundbuchamt) und diese Ämter sind für genau diese Region zuständig.</p>
            <p className="text-justify mb-5">Nach all den Entscheidungen, die ich für mich treffen musste, baue ich jetzt in Crikvenica ein Haus und bin - Stand März - in der dritten Etage meines Rohbaus. Das Haus wird im Sommer 2023 fertig sein.</p>
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
