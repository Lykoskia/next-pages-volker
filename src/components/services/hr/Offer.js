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

    const displayMoreText = "Pročitaj više";
    const displayLessText = "Prikaži manje";

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
            <h1 className="font-bold text-3xl text-center my-4 uppercase">Moja Ponuda</h1>

            {isInitialModalOpen && (
                <div className="modal">
                    <div ref={initialModalRef} className="modal-content">
                        <span className="m-4 mx-6 text-3xl float-right cursor-pointer dark:text-sky-200" onClick={closeInitialModal}>&times;</span>
                        <section className="bg-yellow-600 dark:bg-gray-950 p-4 border-2 border-white shadow-lg shadow-red-700">
                            <p className="text-red-700 font-bold text-xl text-center">Kada gradite svoju kuću na gradilištu:</p>
                            <p className="text-red-700 font-bold text-xl text-center mb-4">+ 49 176 64 299 398</p>
                            <p className="text-green-700 font-bold text-xl text-center">Volker Hengst</p>
                            <p className="text-green-700 font-bold text-xl text-center mb-4">UVIJEK Vama na usluzi u Sjevernoj Hrvatskoj</p>
                            <p className="text-black dark:text-sky-200 font-bold text-xl text-center">za vas na lokaciji - također za brzo ispravljanje pogrešaka</p>
                            <p className="text-sky-700 font-bold text-xl text-center"><a href="https://wa.me/4917664299398" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400"><SiWhatsapp className="inline text-green-700" /> - Pišite na WhatsApp Volkeru Hengstu</a></p>
                        </section>
                    </div>
                </div>
            )}

            <h2 className="text-red-700 dark:text-blue-200 text-center text-lg lg:text-2xl font-bold mb-3">Daleko ste - a katastrofe se dešavaju...</h2>
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
                    <li className="style-none"><CheckCircleIcon className="w-5 h-5 mr-1 text-green-700 inline" />Istraživanje nekretnina, arhitekata, građevinskih tvrtki, trgovaca.</li>
                    <li className="style-none"><CheckCircleIcon className="w-5 h-5 mr-1 text-green-700 inline" />Sastanci na engleskom, njemačkom i hrvatskom jeziku s arhitektima, građevinskim tvrtkama, obrtnicima, brokerima, Prodavači</li>
                    <li className="style-none"><CheckCircleIcon className="w-5 h-5 mr-1 text-green-700 inline" />Provjera građevinskih aktivnosti i napretka izgradnje</li>
                    <li className="style-none"><CheckCircleIcon className="w-5 h-5 mr-1 text-green-700 inline" />Sve ću vam prijaviti putem fotografije, SMS-a i/ili telefonskih poziva</li>
                    <li className="style-none"><CheckCircleIcon className="w-5 h-5 mr-1 text-green-700 inline" />Uobičajena dostupnost za vas 7 dana u tjednu između 8 i 22 sata (za hitne U određenim situacijama moj mobitel je stalno uključen)</li>
                    <li className="style-none"><CheckCircleIcon className="w-5 h-5 mr-1 text-green-700 inline" />Vi ste u Njemačkoj dok se ja brinem o vašoj investiciji na licu mjesta (u smislu osobnog asistenta)</li>
                    <li className="style-none"><CheckCircleIcon className="w-5 h-5 mr-1 text-green-700 inline" />Zbog točnosti ovu uslugu nudim samo osobama koje govore njemački kao materinji jezik</li>
                    <li className="style-none"><CheckCircleIcon className="w-5 h-5 mr-1 text-green-700 inline" />Moje obećanje: nikad više od 3 kupca na zadatku u isto vrijeme</li>
                    <li className="style-none"><CheckCircleIcon className="w-5 h-5 mr-1 text-green-700 inline" />100 eura po kvadratnom metru bruto, najmanje 20.000 eura</li>
                </ul>
            </section>

        </React.Fragment>

    );

    const fullContent = (

        <React.Fragment>
            <p className="text-justify mb-5">Hrvatska je zemlja u usponu. Pogotovo u turizmu. A to naravno rezultira i dobrim povratom apartmana i kuća za odmor. I ovdje se cijene lagano kreću prema gore. Ako ste i vi razmišljali o kupnji nekretnine u Hrvatskoj, ali to još ne možete učiniti u Njemačkoj, ja dolazim u obzir. Mogu se pobrinuti za vaše brige.</p>
            <p className="text-justify mb-5">Naravno, najbolje je da uskoro odete na odmor ovdje i da se možemo osobno upoznati. Ja sam vaš pružatelj usluga i brinem se o stvarima na licu mjesta koje se ne mogu ili ne bi trebale obaviti na daljinu.</p>
            <p className="text-justify mb-5">Ima toliko toga za istražiti i uzeti u obzir kada ulažete u nekretninu da biste trebali ili sami biti tamo (najbolja opcija) ili barem trebate nekoga tamo i dati račun ili odmah prati ako stvari ne napreduju ili je čak potrebno nešto ispraviti.</p>
            <p className="text-justify mb-5">Zahvaljujući mom pedantnom i dobro strukturiranom načinu rada, možete biti sigurni da ću se svaki dan raspitivati o tijeku izgradnje, čak i ako niste u Hrvatskoj.</p>
            <p className="text-justify mb-5">Iako možda želite osobno doći u Hrvatsku na potpisivanje ugovora s građevinskim tvrtkama, ja sam vam na raspolaganju kao stalna kontakt osoba te mogu čak fotografirati i odvesti se na građevinu tvrtke.</p>
            <p className="text-justify mb-5">Moji uvjeti za suradnju: Dostupni ste putem e-mail adrese gdje uvijek trebate potvrditi primitak mojih e-mailova kada ih pročitate, a također ste mi dostupni putem Whatsapp i &quot;aktivirali&quot; opciju plave kvačice nakon čitanja.</p>
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
