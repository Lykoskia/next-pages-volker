import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { SiWhatsapp } from 'react-icons/si';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export default function Offer() {

    const [showMore, setShowMore] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const initialModalRef = useRef(null);
    const modalRef = useRef(null);
    const [isInitialModalOpen, setIsInitialModalOpen] = useState(false);

    useEffect(() => {
        setIsInitialModalOpen(true);
    }, []);

    const closeInitialModal = () => {
        setIsInitialModalOpen(false);
    };

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
                if (showModal) {
                    closeModal();
                }
                if (isInitialModalOpen) {
                    closeInitialModal();
                }
            }
        };

        const handleClickOutside = (e) => {
            if (showModal && modalRef.current && !modalRef.current.contains(e.target)) {
                closeModal();
            }
            if (isInitialModalOpen && initialModalRef.current && !initialModalRef.current.contains(e.target)) {
                closeInitialModal();
            }
        };

        window.addEventListener('keydown', handleEscapePress);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('keydown', handleEscapePress);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showModal, isInitialModalOpen]);

    const smallScreenImages = [
        { src: '/img/1.jpeg', alt: 'Photo 1' },
        { src: '/img/2.jpeg', alt: 'Photo 2' },
        { src: '/img/1.jpg', alt: 'Photo 3' },
    ];

    const isSmallScreen = () => window.innerWidth < 640;

    const handleImageClick = (image, isModal) => {
        if (isModal) {
            openModal(image.src);
        } else {
            window.open(image.src, '_blank');
        }
    };

    const renderImage = (image, index) => {
        const imgSrc = isSmallScreen() ? smallScreenImages[index].src : image.src;
        return (
            <section className="block">
                <Image src={imgSrc} alt={image.alt} width={875} height={875} loading="lazy" onClick={() => handleImageClick(image, !isSmallScreen())} className="mx-auto cursor-pointer shadow-lg border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-800 hover:ring-2 hover:ring-red-700 dark:hover:ring-sky-500 rounded hover:scale-110 p-2 my-4" />
            </section>
        );
    };

    const previewContent = (

        <React.Fragment>
            <h1 className="font-bold text-3xl text-center my-4 uppercase">Mein Angebot</h1>

            {isInitialModalOpen && (
                <div className="modal">
                    <div ref={initialModalRef} className="modal-content">
                        <span className="m-4 mx-6 text-3xl float-right cursor-pointer dark:text-sky-200" onClick={closeInitialModal}>&times;</span>
                        <section className=" bg-yellow-600 dark:bg-gray-950 p-4 border-2 border-white shadow-lg shadow-red-700">
                            <p className="text-red-700 font-bold text-xl text-center">Bei ihrem Hausbau vor Ort:</p>
                            <p className="text-red-700 font-bold text-xl text-center mb-4">+ 49 176 64 299 398</p>
                            <p className="text-green-700 font-bold text-xl text-center">Volker Hengst</p>
                            <p className="text-green-700 font-bold text-xl text-center mb-4">STETS zu Ihrem Diensten in Nordkroatien</p>
                            <p className="text-black dark:text-sky-200 font-bold text-xl text-center">für Sie vor Ort - auch um Fehler schnell zu korrigieren</p>
                            <p className="text-sky-700 font-bold text-xl text-center"><a href="https://wa.me/4917664299398" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400"><SiWhatsapp className="inline text-green-700" /> - WhatsApp an Volker Hengst schreiben</a></p>
                        </section>
                    </div>
                </div>
            )}

            <h2 className="text-red-700 dark:text-blue-200 text-center text-lg lg:text-2xl font-bold mb-3">Sie sind weit weg - und Katastrophen passieren...</h2>
            <div className="container mx-auto px-12 md:px-36">
                <section className="flex flex-wrap justify-center items-center my-4">
                    {smallScreenImages.slice(0, 2).map((image, index) => (
                        <section key={index} className="w-full md:w-1/3 px-4">
                            {renderImage(image, index)}
                        </section>
                    ))}
                </section>
                <div className="flex flex-wrap mb-3">
                    <div className="w-full md:w-1/3 flex items-center justify-center text-center">
                        <p className="md:hidden font-bold text-3xl text-red-700 dark:text-blue-200 my-4">Nema problema...</p>
                        <span className="hidden md:block font-bold text-3xl text-red-700 dark:text-blue-200">Nema problema...</span>
                    </div>
                    {smallScreenImages.slice(2).map((image, index) => (
                        <section key={index} className="w-full md:w-1/3">
                            {renderImage(image, index)}
                        </section>
                    ))}
                    <div className="w-full md:w-1/3 flex items-center justify-center text-center">
                        <p className="md:hidden font-bold text-3xl text-red-700 dark:text-blue-200 my-4">Doch !!</p>
                        <span className="hidden md:block font-bold text-3xl text-red-700 dark:text-blue-200">Doch !!</span>
                    </div>
                </div>
            </div>

            <section>
                <ul>
                    <li className="style-none"><CheckCircleIcon className="w-5 h-5 mr-1 text-green-700 inline" />Recherche für Grundstücke, Architekten, Baufirmen, Handwerker.</li>
                    <li className="style-none"><CheckCircleIcon className="w-5 h-5 mr-1 text-green-700 inline" />Meetings in englischer, deutscher und kroatischer Sprache mit Architekten, Baufirmen, Handwerkern, Maklern, Verkäufern</li>
                    <li className="style-none"><CheckCircleIcon className="w-5 h-5 mr-1 text-green-700 inline" />Überprüfen von Bautätigkeiten und Baufortschritt</li>
                    <li className="style-none"><CheckCircleIcon className="w-5 h-5 mr-1 text-green-700 inline" />Für alles erstatte ich Ihnen Bericht per Foto, Text und / oder mittels Telefonaten</li>
                    <li className="style-none"><CheckCircleIcon className="w-5 h-5 mr-1 text-green-700 inline" />Für Sie normale Erreichbarkeit 7 Tage in der Woche zwischen 8 und 22 Uhr (für dringende Situationen ist mein Handy durchgehend an)</li>
                    <li className="style-none"><CheckCircleIcon className="w-5 h-5 mr-1 text-green-700 inline" />Sie sind in Deutschland während ich mich um Ihre Investition vor Ort kümmere (im Sinne eines persönlichen Assistenten)</li>
                    <li className="style-none"><CheckCircleIcon className="w-5 h-5 mr-1 text-green-700 inline" />Aufgrund der Genauigkeit biete ich diesen Service nur für Personen an, die &quot;Deutsch&quot; als Muttersprache haben</li>
                    <li className="style-none"><CheckCircleIcon className="w-5 h-5 mr-1 text-green-700 inline" />Mein Versprechen: niemals mehr als 3 Kunden zur gleichen Zeit im Auftrag</li>
                    <li className="style-none"><CheckCircleIcon className="w-5 h-5 mr-1 text-green-700 inline" />100 Euro pro brutto-qm, 20.000 Euro Minimum</li>
                </ul>
            </section>

        </React.Fragment>

    );

    const fullContent = (

        <React.Fragment>
            <section className="my-5">
                <p className="text-justify mb-5">Kroatien ist ein boomendes Land. Vor allem im Tourismus. Und das zieht natürlich auch eine gute Rendite in Urlaubs-Appartments und Urlaubs-Häuser nach sich. Auch hier bewegen sich die Preise angenehm nach oben. Wenn Sie für sich auch überlegt haben, in Kroatien eine Immobilie zu erwerben, aber Sie in Deutschland noch nicht abkömmlich sind, komme ich ins Spiel. Ich kann mich um ihr Anliegen kümmern.</p>
                <p className="text-justify mb-5">Am besten natürlich, wenn Sie hier in Kürze Urlaub machen und wir uns persönlich kennenlernen können. Ich bin ihr Dienstleister und kümmere mich vor Ort um das, was man nicht aus der Ferne machen kann oder nicht machen sollte.</p>
                <p className="text-justify mb-5">Es gibt hier bei einer Investition in eine Immobilie so viel zu recherchieren und zu berücksichtigen, dass man entweder selbst vor Ort sein sollte (beste Variante) oder zumindest jemanden benötigt, der vor Ort ist und Rechenschaft abliefert bzw. hier sofort nachhakt, wenn es nicht vorangeht oder sogar etwas korrigiert werden muss.</p>
                <p className="text-justify mb-5">Durch meine akribische und gut strukturierte Arbeitsweise können Sie sicher sein, dass ich mich täglich nach dem Bau-Fortschritt erkundige, selbst wenn Sie nicht in Kroatien sind.</p>
                <p className="text-justify mb-5">Trotzdem Sie für Vertrags-Unterzeichnungen mit Baufirmen vielleicht persönlich nach Kroatien kommen möchten, stehe ich Ihnen als ständiger Ansprechpartner zur Verfügung und kann sogar Fotos machen und zu den Baufirmen fahren.</p>
                <p className="text-justify mb-5">Meine Bedingung für eine Zusammenarbeit: Sie sind für mich sowohl über eine mail-adresse erreichbar bei der Sie bitte den Eingang meiner e-mails immer bestätigen wenn Sie diese lesen, zudem sind Sie für mich über Whatsapp erreichbar und haben die Möglichkeit der blauen Häkchen nach dem Lesen &quot;aktiviert&quot;.</p>
            </section>
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
                            alt="in Arbeit"
                            width={875}
                            height={875}
                            loading="eager"
                            className="max-w-[90vh] max-h-[90vh]"
                        />
                    </section>
                </section>
            )}
        </section>

    );
}
