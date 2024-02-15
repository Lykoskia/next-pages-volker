import React, { useState, useEffect, useRef } from 'react';
import Weather from '@/components/Weather';
import Image from 'next/image';
import { CheckCircleIcon, ArrowLongRightIcon } from '@heroicons/react/24/solid';

export default function Villa() {

    const [showMore, setShowMore] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const modalRef = useRef(null);

    const displayMoreText = "Weiter lesen";
    const displayLessText = "Verbergen";

    const openModal = (img) => {
        setSelectedImage(img);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        const handleEscapePress = (e) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        };

        const handleClickOutside = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                closeModal();
            }
        };

        if (showModal) {
            window.addEventListener('keydown', handleEscapePress);
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            window.removeEventListener('keydown', handleEscapePress);
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            window.removeEventListener('keydown', handleEscapePress);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showModal, modalRef]);

    const smallScreenImages = [
        { src: '/img/1a_t.png', fullSrc: '/img/1a.png', alt: 'Photo 1a' },
        { src: '/img/2a_t.png', fullSrc: '/img/2a.png', alt: 'Photo 2a' },
        { src: '/img/3a_t.png', fullSrc: '/img/3a.png', alt: 'Photo 3a' },
    ];

    const isSmallScreen = () => window.innerWidth < 640;

    const handleImageClick = (image, isModal) => {
        if (isModal) {
            setSelectedImage(image.fullSrc);
            setShowModal(true);
        } else {
            window.open(image.fullSrc, '_blank');
        }
    };

    const renderImage = (image) => {
        return (
            <section key={image.alt} className="block">
                <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={220}
                    onClick={() => handleImageClick(image, !isSmallScreen())}
                    className="mx-auto cursor-pointer shadow-lg border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-800 hover:ring-2 hover:ring-red-700 dark:hover:ring-sky-500 rounded hover:scale-110 p-2 my-4"
                    loading="eager"
                    priority
                />
            </section>
        );
    };

    const previewContent = (
        <React.Fragment>
            <h1 className="font-bold text-2xl lg:text-3xl text-center my-4 uppercase">Die Villa – 950.000 EUR</h1>
            <p className="text-center">(Übergabe März / April 2024)</p>
            <section className="flex flex-wrap justify-center items-center my-4">
                {smallScreenImages.slice(0, 3).map((image, index) => (
                    <section key={index} className="w-1/3 px-2 md:px-0 md:mx-auto">
                        {renderImage(image, index)}
                    </section>
                ))}
            </section>
            <Weather />
            <p className="text-justify mb-5 pt-5 font-bold">
                Entfernung zum Crikvenica-Hafen: 1.170 Meter
                <br />
                Entfernung zum Sandstrand: 1.300 Meter
            </p>
            <p className="text-justify mb-5">(Meeresblick UND hohe Qualität waren uns wichtig)</p>
            <p className="text-justify mb-5">Die Qualität einer Immobilie beginnt bereits mit der Wahl des Architekten...</p>
            <p className="text-justify mb-5">Der Meeresblick war für uns enorm wichtig; aber ebenso essentiell war für uns eine hohe Qualität und schon hier hatte ich mich vor Ort erst für den 5.Architekten entschieden. Diese Architektin verstand unseren Wunsch nach außergewöhnlicher Architektur verbunden mit einer hohen Praxis-Tauglichkeit. Als Beispiel sei hier die oberste Etage genannt. Bei fast allen Villen ist dort der Schlafbereich, wir wollten oben aber den schönsten Blick nicht &quot;verschlafen&quot;, sondern hellwach &quot;erleben&quot; können.</p>
            <p className="text-justify mb-5">Während wir nach Fertigstellung des Projektes auf die Baugenehmigung warteten, ließ ich mir anschließend von rund 15 Bauunternehmen nicht nur die Angebote für die Umsetzung der Wunsch-Villa zukommen, sondern schaute mir auch fertige Häuser von den Firmen an und sprach mit einheimischen Bekannten über deren Image und Reputationen... Dafür war es gut, dass wir seit Dezember 2021 unseren Erst-Wohnsitz in dieser Gegend hatten und ich tatsächlich (gefühlte) sieben Tage in der Woche ausschließlich für dieses Projekt nutzen konnte.</p>
            <p className="text-justify mb-5">Herausgekommen waren Verträge mit einem sehr guten Bauunternehmen und sehr guten Handwerkern; die ich nicht nahm, weil sie die günstigsten waren, sondern weil der höhere Preis mit einem noch besseren Image bei hoher Qualität zusammenkam.</p>
        </React.Fragment>

    );

    const fullContent = (

        <React.Fragment>
            <h2 className="font-bold text-xl lg:text-2xl text-center my-12 text-red-700 dark:text-sky-200">Dieses Villa verfügt über:</h2>
            <ul>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline-block" /> Meeresblick</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> 263 qm Wohnfläche; 290,25qm brutto</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> weitere 600 qm Gartenfläche bei 734 qm Grundstück</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> &quot;beste Panorama-Etage&quot; für den Open-Space-Bereich mit Wohnzimmer, Kamin, Esszimmer und Küche im obersten Stockwerk</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> hoher Baustandard, sehr gute Isolation, zum Beispiel 40 Zentimeter dicke Außenwände, Thermo-Isolation Bodenplatte, Erdgeschoss-Wände und Dach</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> Energie-Effizienz-Klasse A-Plus</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> 3 Etagen</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> 5 Schlafzimmer</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> 3 Bäder plus Badewanne im Master-Schlafzimmer</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> 4 Toiletten</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> ein in sich abgeschlossenes 4-Sterne-Appartment mit eigenem Eingang und eigenen Parkplätzen</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> Swimming-Pool (Salzwasser, kein chloriertes Wasser)</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> Kamin</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> Klimaanlagen</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> Fußbodenheizung</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> Einbauküche inklusive Kücheninsel</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> qualitativ hochwertige Alu-Fenster (das größte 4,75 m x 2,30 m) mit Moskitonetzen und elektrischen Rolläden</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> italienische Keramik auf allen Fußböden</li>
            </ul>

            <h2 className="font-bold text-xl lg:text-2xl text-center my-12 text-red-700 dark:text-sky-200">Als Rendite-Objekt liegen die Einnahmen in der Hochsaison:</h2>
            <ul>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline-block" /> für das Villa (ohne Appartment): bei ca. 4.000 bis 5.000 Euro / Woche</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> für das Appartment: bei ca. 1.500 Euro / Woche</li>
            </ul>

            <h2 className="font-bold text-xl lg:text-2xl text-center my-12 text-red-700 dark:text-sky-200">Außerdem:</h2>
            <ul>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline-block" /> Carport</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> Vorrichtungen für den Einbau von E-Ladestation und Video-Kamera am Eingang.</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline-block" /> Anschluss ans Abwassersystem (Sie haben keinen Bio-Cleaner oder Septic Tank auf dem Grundstück)</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> nagelneue Asphaltstraße vor dem Villa</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline-block" /> 15 Minuten Fußweg bis zum Zentrum Crikvenicas</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> 7 Autominuten zum Strand von Crikvenica</li>
            </ul>

            <h2 className="font-bold text-xl lg:text-2xl text-center my-12 text-red-700 dark:text-sky-200">Wichtig:</h2>
            <ul>
                <li className="style-none"><ArrowLongRightIcon className="w-5 h-5 text-sky-700 inline-block" /> dieses Villa wurde so konzipiert, dass es auch im Winter bewohnt / vermietet werden kann OHNE dabei die im dauerhaften Gebrauch geldzehrenden Klimaanlagen benutzen zu müssen.</li> 
                <li className="style-none"><ArrowLongRightIcon className="w-5 h-5 text-sky-700 inline-block" /> der Rohbau wird Mitte April 2023 fertig sein, die Fenster sind voraussichtlich bis Ende April eingesetzt</li> 
                <li className="style-none"><ArrowLongRightIcon className="w-5 h-5 text-sky-700 inline-block" /> wir lassen den Rohbau im Sommer über 5 bis 6 Monate aushärten, bevor im Herbst die Fassade aufgetragen wird</li> 
                <li className="style-none"><ArrowLongRightIcon className="w-5 h-5 text-sky-700 inline-block" /> der Käufer entscheidet über die Gartengestaltung, das Aussehen der Fassade und die Balkongestaltung (ob Glas, welche Färbung...), alles im Preis enthalten</li> 
                <li className="style-none"><ArrowLongRightIcon className="w-5 h-5 text-sky-700 inline-block" /> als Beispiele für die hohe Qualität: 3-fach Verglasung, alle mit Low-E-Faktor, einer speziellen Beschichtung, welche wenig Wärme-Übertragung zulässt. Das heißt, im Sommer bleibt die Wärme draußen, im Winter bleibt die Wärme im Villa.</li> 
                <li className="style-none"><ArrowLongRightIcon className="w-5 h-5 text-sky-700 inline-block" /> im Mai werden die Fliesen verlegt, bis dahin kann der Käufer auch über die Fliesen entscheiden</li>
                <li className="style-none"><ArrowLongRightIcon className="w-5 h-5 text-sky-700 inline-block" /> Übergabe nach Absprache</li> 
            </ul>
        </React.Fragment>

    );

    return (

        <section className="text-black dark:text-sky-200 p-4">
            {previewContent}
            {showMore && fullContent}
            <section className="text-center mt-8">
                <button
                    onClick={() => setShowMore(!showMore)}
                    className={`${showMore ? 'danger-button' : 'success-button'}`}
                >
                    {showMore ? displayLessText : displayMoreText}
                </button>
            </section>
            {showModal && (
                <section className="modal">
                    <section ref={modalRef} className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <Image
                            src={selectedImage}
                            alt="Finished villa"
                            width={1000}
                            height={550}
                            loading="lazy"
                            className="mx-auto p-2"
                        />
                    </section>
                </section>
            )}
        </section>
    );
}
