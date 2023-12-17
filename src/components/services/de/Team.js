import React, { useState, useRef } from 'react';
import Card from '@/components/Card';
import { CheckCircleIcon } from '@heroicons/react/24/solid';


export default function Team() {

    const [showMore, setShowMore] = useState(false);
    const volkerRef = useRef(null);
    const markoRef = useRef(null);
    const simoneRef = useRef(null);

    const displayMoreText = "Weiter lesen";
    const displayLessText = "Verbergen";

    const scrollToPerson = (person) => {
        let ref;
        if (person === 'Volker') ref = volkerRef;
        if (person === 'Marko') ref = markoRef;
        if (person === 'Simone') ref = simoneRef;

        if (ref && ref.current) {
            const offsetTop = ref.current.offsetTop;
            const navbarHeight = 64;
            window.scrollTo({
                top: offsetTop - navbarHeight,
                behavior: 'smooth'
            });
        }
    };

    const handleCardClick = (person) => {
        if (!showMore) {
            setShowMore(true);
        }
        setTimeout(() => scrollToPerson(person), 100)

    };

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    const previewContent = (

        <React.Fragment>
            <h1 className="font-bold text-2xl lg:text-3xl text-center my-4 uppercase">Ihr Team</h1>
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-4 lg:px-48 my-8">
                <Card
                    title="Volker"
                    content=""
                    imageUrl="/img/volker2.jpg"
                    onClick={() => handleCardClick('Volker')}
                />
                <Card
                    title="Marko"
                    content=""
                    imageUrl="/img/marko.jpg"
                    onClick={() => handleCardClick('Marko')}
                />
                <Card
                    title="Simone"
                    content=""
                    imageUrl="/img/simone.jpg"
                    onClick={() => handleCardClick('Simone')}
                />
            </div>
        </React.Fragment>

    );

    const VolkerContent = () => {
        return (
            <section ref={volkerRef}>
                <h2 className="text-center font-bold text-xl mb-5 py-5">Volker Hengst</h2>
                <ul>
                    <li className="style-none"><CheckCircleIcon className="w-5 h-5 mr-1 text-green-700 inline" />ViSdP: Volker Hengst</li>
                    <li className="style-none"><CheckCircleIcon className="w-5 h-5 mr-1 text-green-700 inline" />Datenschutz</li>
                    <li className="style-none"><CheckCircleIcon className="w-5 h-5 mr-1 text-green-700 inline" />Gewähr für meine Leistungen</li>
                </ul>

                <p className="text-justify mb-5 mt-5">Impressum: Volker Hengst, Gaj 47, 51252 Klenovica, Kroatien, Telefon: 0049 176 64 299 398 und 00385 95 526 56 28.</p>
                <p className="text-justify mb-5">Meine Aufträge führe ich nach bestem Wissen und Gewissen aus. Alles für Ihre Investitionen Entscheidende lasse ich mir schriftlich vor Ort bestätigen. Kaufen, unterschreiben, abschließen mach ich NUR nach Ihrer ausdrücklichen SCHRIFTLICHEN Erteilung / Genehmigung.</p>
                <p className="text-justify mb-5">Wenn ich also für Sie etwas recherchiere, dann stehe ich für die Korrektheit der von mir an Sie übermittelten Informationen ein, insofern mir die Informationen auch so erteilt worden.</p>
                <p className="text-justify mb-5">Wenn ich für Sie an den Meetings mit Nadzor oder Baufirma teilnehme, dann vertrete ich Ihre Wünsche so, wie wir es zuvor schriftlich abgestimmt haben. Wenn ich für Sie von Baufortschritten vor Ort Bericht erstatte, dann mache ich das von all den Dingen, welche Sie mir zuvor aufgetragen haben.</p>
                <p className="text-justify mb-5">Für Fehler der Firmen bei deren Informationen, Verspätungen oder Ausführungen hafte ich nicht. Ich gebe aber mein Bestes, um in Ihrem Sinne Nachteilen zu Ihren Ungunsten entgegenzuwirken.</p>
                <p className="text-justify mb-5">Um für Sie auch an den entscheidenden Meetings mit Nadzor, Baufirmen und Handwerkern teilnehmen zu können, arbeite ich mit einem Partner, Marco Vukelic, aus der Baubranche zusammen, der mir in den Meetings und Diskussionen assistiert. In diesen Meetings wird Kroatisch gesprochen und hierfür war es mir wichtig, dass ich mit einem kroatischen Muttersprachler als gemeinsames Team auftrete. Seine Dienste sind im Preis bereits enthalten.</p>
            </section>
        )
    }

    const MarkoContent = () => {
        return (
            <section ref={markoRef}>
                <h2 className="text-center font-bold text-xl mb-5 py-5">Marko Vukelić</h2>
                <p className="text-justify mb-5">Marko Vukelic, 28 Jahre, aufgewachsen in Novi Vinodolski, Vater Förster, Mutter Architektin. Natürlich durch meine Mutter beeinflusst, hat mich seit meiner frühesten Jugend der Bau und die Planung von Häusern fasziniert. Seit meinem 12 Lebensjahr half ich meiner Mutter im Büro. Später habe ich mich in Richtung Technischer Bau orientiert und schrieb mich an der Fakultät für ziviles Bauwesen in Rijeka ein. Mein Diplom werde ich erwartungsgemäß in Kürze (2024) erhalten.</p>
                <p className="text-justify mb-5">Kroatien ist inzwischen ein sehr beliebtes Land für Investoren, gerade aus dem mitteleuropäischen Raum. Da nur die wenigsten Ingenieure hier eine Fremdsprache beherrschen, ist insbesondere dies meine Marktlücke. Ich möchte ausländische Investoren von der Bauseite aus unterstützen, hier für ihre neuen Häuser begleitet zu werden. Ich werde in den Meetings, die in kroatischer Sprache stattfinden, mit Volker Hengst Ihre Schnittstelle sein. Sowohl im bau-fachlichen wie auch im sprachlichen Bereich.</p>
            </section>
        )
    }

    const SimoneContent = () => {
        return (
            <section ref={simoneRef}>
                <h2 className="text-center font-bold text-xl mb-5 py-5">Simone Stampa</h2>
                <p className="text-justify mb-5">Sollten Sie ein Haus mit abgeschlossenem Innendesign oder komplett möbliert fertigstellen wollen, wäre Simone Stampa die entsprechende Dame, die ich Ihnen empfehlen würde. Neben Ihren Kenntnissen über Innendesign und Praxis-Tauglichkeit ist sie zudem sehr gut über Aktionen, Rabatte und Qualitäten der umliegenden Möbelhäuser und Einrichtungsstudios informiert. Dieser Service ist im Preis nicht inbegriffen und ist Verhandlungssache. Haben Sie den Wunsch, Frau Stampa in Ihre Überlegungen mit einzubeziehen, kontaktieren Sie bitte ebenfalls diese Website.</p>
                <p className="text-justify mb-5">Möchten Sie ein schlüsselfertiges bzw. voll möbliertes Haus übergeben bekommen, bieten wir auch diesen Service an. Preise und Details hierfür nach Bedarf und Absprache.</p>
            </section>
        )
    }

    const fullContent = (

        <React.Fragment>
            <VolkerContent />
            <MarkoContent />
            <SimoneContent />
        </React.Fragment>

    );

    return (

        <section className="text-black dark:text-sky-200 p-4">
            {previewContent}
            {showMore && fullContent}
            <div className="text-center mt-8">
                <button
                    onClick={toggleShowMore}
                    className={`${showMore ? 'danger-button' : 'success-button'}`}
                >
                    {showMore ? displayLessText : displayMoreText}
                </button>
            </div>
        </section>

    );
}
