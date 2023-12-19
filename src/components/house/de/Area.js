import React, { useState } from 'react';
import Image from 'next/image';

export default function Area() {

    const [showMore, setShowMore] = useState(false);

    const displayMoreText = "Weiter lesen";
    const displayLessText = "Verbergen";

    const previewContent = (

        <React.Fragment>
            <h1 className="font-bold text-2xl lg:text-3xl text-center my-4 uppercase">Nord-Kroatien, die Kvarner Bucht und Crikvenica</h1>
            <figure className="flex justify-center my-4">
                <Image 
                    src="/img/ck.jpg"
                    alt="Crikvenica"
                    layout="responsive"
                    width={1275}
                    height={850}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 800px"
                    priority
                    className="my-4 max-w-screen-md p-2 shadow-lg border border-gray-300 dark:border-gray-700"
                />
            </figure>
            <p className="text-justify mb-5">&quot;Crikvenica: Der nach Übernachtungszahlen beliebteste Ort in der beliebtesten Region Kroatiens, der Kvarner Bucht&quot;</p>
            <p className="text-justify mb-5">Kroatien ist der jüngste Mitgliedstaat der Europäischen Union und bildet mit 1800 Kilometern Küstenlinie eine fantastische Möglichkeit zum Urlauben. Das Adrialand verzeichnete in den letzten Jahren immer höhere Touristenzahlen.</p>
            <p className="text-justify mb-5">Die meisten ausländischen Übernachtungen entfielen auf Deutsche (24,9 Mio), gefolgt von Slowenen (10,1 Mio) und Österreichern (8,2 Mio). Auf deutschsprechende Urlauber sind die Kroaten bestens eingestellt, zumeist benötigt man noch nicht mal Englisch, da sehr viele Kroaten Deutsch verstehen und auch selbst sprechen können.</p>          
            <p className="text-justify mb-5">Mit glasklarem Meer, daneben liegenden Bergen und insgesamt einer schönen Landschaft ist Kroatien insbesondere bei Badeurlaubern, Segelfreunden und Naturliebhabern sehr beliebt.</p>
        </React.Fragment>

    );

    const fullContent = (

        <React.Fragment>
            <p className="text-justify mb-5">Und Kroatien boomt: Im vergangenen Jahr 2022 verzeichnete das Adrialand insgesamt 104,8 Mio. Übernachtungen. Plus 11 Prozent. Die Tourismuserlöse für Gastronomie, Pensions- und Villabesitzer übertrafen die Erwartungen. Die ursprüngliche Prognose der kroatischen Notenbank (HNB) für das Gesamtjahr 2022 war schon nach neun Monaten überschritten worden.</p>
            <p className="text-justify mb-5">Durch die jüngste Euro-Einführung und den Beitritt zum Schengen-Raum seit Januar 2023 ist man in dem Land jetzt noch optimistischer; insbesondere in Istrien und in der Kvarner Bucht; da viele Gäste aus Deutschland, Österreich und Slowenien eine kurze Anreise haben. Die Urlauber haben keine Grenzkontrollen und das ehemals gebühren-zehrende Geldumtauschen in kroatische Kuna entfällt ebenfalls.</p>
            <p className="text-justify mb-5">Für das neue Jahr 2023 erwartet die kroatische Tourismus-Branche neue Rekordzahlen inklusive Rekord-Übernachtungen, die erstmals auch die Vor-Corona-Zeit-Rekorde brechen sollen. Also die höchsten, die es je gab.</p>
            <p className="text-justify mb-5">Die Kvarner Bucht im Norden des Landes ist die mit am meisten frequentierte Urlaubsdestination Kroatiens. In ihr befindet sich die zweitgrößte Stadt Kroatiens, Rijeka. In der Hafenmetropole hat man alles was man benötigt, ob 3 große Einkaufsmalls inklusive Kinos, diverse Baumärkte, gutbestückte Autohäuser, eine Hafen-Flanier-Meile, eine große Fußgängerzone mit diversen Boutiquen und Cafes am Hafen,... 20 Autominuten von Rijeka entfernt liegt das aufgrund der vielen Palmen an der Hafenpromenade auch als St.Tropez Kroatiens bekannte Crikvenica.</p>
            <p className="text-justify mb-5">Die gesamte Bucht ist durch hohe Gebirgszüge vor starken Winden geschützt und hat mit seinen bis zu 2.500 Sonnenstunden im Jahr ein ausgezeichnetes Klima und eine hervorragende Wasserqualität. In der Kvaner Bucht befindet sich mit Platak auch eines der wenigen Ski-Gebiete von wo aus man beim Skifahren das Mittelmeer sehen kann.</p>
            <p className="text-justify mb-5">Eine Vorstellung, welche abwechslungsreichen Möglichkeiten die Natur mit den Bergen am Meer hervorbringt, bietet einem eine ganz neue Sport-Disziplin; nämlich ein Zweikampf aus Segeln und Ski. Am ersten März-Wochenende 2023 wurde am Strand der Kvarner Bucht und in Platak das Snipe and Ski-Race ausgetragen, beim dem die Teilnehmer am Freitag in Platak zunächst im Riesenslalom antraten, ehe sie am Samstag und Sonntag am Küstenort Kostrena bei einer Segel-Regatta diesen Wettbewerb vollendeten.</p>
            <p className="text-justify mb-5">Nur legidlich 6 Fahrstunden von München entfernt befindet sich der nach Übernachtungszahlen bei Urlaubern beliebteste Ort der Kvarner Bucht: Crikvenica.</p>
            <p className="text-justify mb-5">Die mit vielen Palmen gesäumte traumhafte Riviera von Crikvenica erstreckt sich über 8 Kilometer.</p>
            <p className="text-justify mb-5">Vorsichtig und langsam hat man sich in Crikvenica seit nun über 125 Jahren auf den Tourismus eingestellt, dementsprechend bietet es eine angenehme Mischung zwischen einheimisch-verbliebener Tradition wie öffentlich ausgetragenen Wasserball-Matches im kleinen Hafen von Crikvenica oder dem eigenen Karneval des Küstenstädtchens und andererseits einem breiten Angebot zu flanieren, insbesondere an der langen Strandpromenade mit den dazugehörigen Bars und Restaurants. Und wer richtig viel Zeit hat, geht gleich weiter am Strand in die Nachbarorte Dramalj und Selce.</p>
            <p className="text-justify mb-5">Glasklares Meer, frische Luft und traumhaft schöne Strände, zudem unzählige Wasser-, Sport- und Freizeitmöglichkeiten sind die Attribute, die aus Crikvenica den beliebtesten Badeurlaubsort der Kvarner Bucht machen. Das absolute Highlight ist der mit der &quot;Blauen Flagge&quot; ausgezeichnete goldgelbe Sandstrand &quot;Gradska Kupaliste&quot;.</p>
            <p className="text-justify mb-5">Viele meinen Crikvenica habe den Charme der Cote d&apos;Azur, aber das zu immer noch moderaten Preisen.</p>
            <p className="text-justify mb-5">Und wer am Strand seine Blicke schweifen lässt, hat Vis a Vis mit der Insel Krk vor sich zudem noch ein wunderschönes Panorama.</p>
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
