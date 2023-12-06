import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';

export default function Vita() {

    const [showMore, setShowMore] = useState(false);

    const displayMoreText = "Weiter lesen";
    const displayLessText = "Verbergen";

    const previewContent = (

        <React.Fragment>
            <h1 className="font-bold text-3xl text-center my-4 uppercase">Meine Vita</h1>
            <ul>
                <li className="style-none"><ArrowLongRightIcon className="w-5 h-5 mr-1 text-sky-700 inline" />Jahrgang 1967, geboren in Hamburg</li>
                <li className="style-none"><ArrowLongRightIcon className="w-5 h-5 mr-1 text-sky-700 inline" />Seit 2021 mit festem Erst-Wohnsitz in der Kvarner Bucht, Kroatien</li>
                <li className="style-none"><ArrowLongRightIcon className="w-5 h-5 mr-1 text-sky-700 inline" />Spreche Deutsch und Englisch fließend</li>
                <li className="style-none"><ArrowLongRightIcon className="w-5 h-5 mr-1 text-sky-700 inline" />Von Beruf nach dem Abitur Kaufmann und anschließend Nachrichten-Journalist und Moderator in Radio und Fernsehen (alleine 20 Jahre beim Deutschlandfunk und 10 Jahre Euronews)</li>
                <li className="style-none"><ArrowLongRightIcon className="w-5 h-5 mr-1 text-sky-700 inline" />Habe inzwischen diverse private und &quot;Bau&quot;-Kontakte in der Region</li>
            </ul>

            <p className="text-justify mb-5 mt-5">Volker Hengst, Jahrgang 1967, aus Deutschland im Jahr 2021 ausgewandert, im kroatischen Klenovica wohnhaft mit Erstwohnsitz, im Besitz einer &quot;OIB&quot;, der kroatischen Steuernummer.</p>
            <p className="text-justify mb-5">Von Beruf aus seriös, (Nachrichtensprecher bei Euronews, beim Norddeutschen Rundfunk) ich bin seit mehr als 20 Jahren zudem Nachrichtensprecher im Deutschlandfunk, gehörte dort als festes Mitglied zum Sprecher-Ensemble, bis ich im November 2021 auf eigenen Wunsch eine zweijährige Auszeit beantragte. Diese währt noch heute, doch in Kroatien läuft es gut.</p>

        </React.Fragment>

    );

    const fullContent = (

        <React.Fragment>
            <p className="text-justify mb-5">Ich bin jetzt voll integriert, außer der Sprache bewege ich mich unter den Einheimischen vollkommen normal. Ich bin hier in der gesetzlichen Krankenversicherung und als Tischtennisspieler in den beiden Vereinen STK Crikvenica und Novi Vinodolski habe ich Kontakt zur Basis der Einheimischen.</p>
            <p className="text-justify mb-5">Mein erster Doppelpartner war ein langjähriger Mitarbeiter von Lesnina XXL (Möbelhaus), seit 8 Monaten ist mein fester Doppelpartner einer der routiniertesten und erfahrensten Polizisten der hiesigen Polizeitstation von Crikvenica, welche auch für die gesamte Umgebung zuständig ist.</p>
            <p className="text-justify mb-5">Hinzu kommen inzwischen rund 500 weitere Kontakte durch Hausbau-Recherche, Nachbarschaft und Bekannte von Bekannten.</p>
            <p className="text-justify mb-5">Und Kontakte sind hier - gerade in Kroatien - immens wichtig. Erstens weil diese Kontakt direkt helfen können und zweitens weil jeder Kroate gefühlt 100 sehr gute Bekannte hat, welche einem dann weiterhelfen.</p>
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
