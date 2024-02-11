import React, { useState, useEffect, useRef } from 'react';
import Weather from '@/components/Weather';
import Image from 'next/image';
import { CheckCircleIcon, ArrowLongRightIcon } from '@heroicons/react/24/solid';

export default function Villa() {

    const [showMore, setShowMore] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const modalRef = useRef(null);

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
                    loading="lazy"
                />
            </section>
        );
    };

    const previewContent = (
        <React.Fragment>
            <h1 className="font-bold text-2xl lg:text-3xl text-center my-4 uppercase">Vila – 950.000 EUR</h1>
            <p className="text-center">(Primopredaja u ožujku / travnju 2024)</p>
            <section className="flex flex-wrap justify-center items-center my-4">
                {smallScreenImages.slice(0, 3).map((image, index) => (
                    <section key={index} className="w-full md:w-1/3">
                        {renderImage(image, index)}
                    </section>
                ))}
            </section>
            <Weather />
            <p className="text-justify mb-5 pt-5 font-bold">
                Udaljenost od luke Crikvenica: 1.170 metara
                <br />
                Udaljenost od pješčane plaže: 1.300 metara
            </p>
            <p className="text-justify mb-5">(Pogled na more i visoka kvaliteta su nam bili iznimno važni)</p>
            <p className="text-justify mb-5">Kvaliteta nekretnine počinje izborom arhitekta...</p>
            <p className="text-justify mb-5">Pogled na more bio nam je iznimno važan; ali isto tako nam je bila bitna visoka kvaliteta i ovdje sam se već na licu mjesta odlučio za 5. arhitekta. Ovaj arhitekt razumio je našu želju za izvanrednom arhitekturom u kombinaciji s visokom praktičnom prikladnošću. Gornji kat je primjer. U gotovo svim vilama tu je prostor za spavanje, no mi nismo željeli &quot;prespavati&quot; najljepši pogled na katu, već ga &quot;doživjeti&quot; budni.</p>
            <p className="text-justify mb-5">Dok smo čekali građevinsku dozvolu nakon završetka projekta, ne samo da sam dobio ponude od 15-ak građevinskih tvrtki za realizaciju kuće kakvu sam želio, već sam gledao i gotove kuće. Obratili smo se tvrtkama i razgovarali s lokalnim poznanicima o njihovom imidžu i reputaciji... Bilo je dobro što imamo svoje primarno prebivalište na ovom području od prosinca 2021. i zapravo sam mogao koristit sedam dana u tjednu isključivo za ovaj projekt.</p>
            <p className="text-justify mb-5">Rezultat su bili ugovori s vrlo dobrim građevinskim poduzećem i vrlo dobrim majstorima; koje nisam uzeo jer su bili najjeftiniji, već zato što je viša cijena u kombinaciji s još boljom slikom i kvalitetom.</p>
        </React.Fragment>
    );

    const fullContent = (

        <React.Fragment>
            <h2 className="font-bold text-xl lg:text-2xl text-center my-12 text-red-700 dark:text-sky-200">Značajke ovog doma:</h2>
            <ul>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> Pogled na more</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> 263 m² stambene površine; 290,25 m² bruto</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> dodatnih 600 m² vrta na parceli od 734 m²</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> &quot;najbolji panoramski kat&quot; za otvoreni prostor s dnevnim boravkom, kaminom, blagovaonicom i kuhinjom na gornjem katu</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> visoki standard gradnje, vrlo dobra izolacija, na primjer vanjski zidovi debljine 40 centimetara, termoizolacijska podna ploča, zidovi prizemlja i krov</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> Razred energetske učinkovitosti A+</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> 3 kata</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> 5 spavaćih soba</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> 3 kupaonice plus kada u glavnoj spavaćoj sobi</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> 4 toaleta</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> Samostalni apartman s 4 zvjezdice, vlastitim ulazom i parkingom</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> Bazen (slana voda, bez klorirane vode)</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> Kamin</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> Klima uređaji</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> Podno grijanje</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> Ugrađena kuhinja uključujući kuhinjski otok</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> Visokokvalitetni aluminijski prozori (najveći 4,75 m x 2,30 m) s komarnicima i električnim griljama</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> Talijanska keramika na svim podovima</li>
            </ul>

            <h2 className="font-bold text-xl lg:text-2xl text-center my-12 text-red-700 dark:text-sky-200">Kao objekt prinosa, prihod je na vrhuncu sezone:</h2>
            <ul>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> za kuću (bez stana): cca 4.000 do 5.000 eura tjedno</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> za stan: oko 1.500 eura/tjedan</li>
            </ul>
            <h2 className="font-bold text-xl lg:text-2xl text-center my-12 text-red-700 dark:text-sky-200">Također:</h2>
            <ul>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> Nadstrešnica za automobil</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> Uređaji za postavljanje e-punionice i video kamere na ulazu</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> Kanalizacijski priključak (Nemate bio-čistač ili septičku jamu na posjedu)</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> Potpuno novi asfalt ispred kuće</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> 15 minuta hoda do centra Crikvenice</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> 7 minuta vožnje do plaže Crikvenica</li>
            </ul>

            <h2 className="font-bold text-xl lg:text-2xl text-center my-12 text-red-700 dark:text-sky-200">Važno:</h2>
            <ul>
                <li className="style-none"><ArrowLongRightIcon className="w-5 h-5 text-sky-700 inline-block" /> ova kuća je projektirana na način da se u njoj može stanovati / iznajmljivati i zimi BEZ potrebe za korištenjem klimatizacijskih sustava koji uzalud troše novac u stalnom korištenju.</li>
                <li className="style-none"><ArrowLongRightIcon className="w-5 h-5 text-sky-700 inline-block" /> Oplata će biti gotova sredinom travnja 2023., očekuje se da će prozori biti postavljeni do kraja travnja</li>
                <li className="style-none"><ArrowLongRightIcon className="w-5 h-5 text-sky-700 inline-block" /> ostavljamo školjku da se stvrdne 5 do 6 mjeseci ljeti prije nanošenja fasade u jesen</li>
                <li className="style-none"><ArrowLongRightIcon className="w-5 h-5 text-sky-700 inline-block" /> Kupac odlučuje o uređenju vrta, izgledu fasade i uređenju balkona (da li staklo, koje boje...), sve je uključeno u cijenu</li>
                <li className="style-none"><ArrowLongRightIcon className="w-5 h-5 text-sky-700 inline-block" /> Kao primjer visoke kvalitete: trostruko staklo, sve s niskim E faktorom, poseban premaz koji omogućuje mali prijenos topline. To znači da toplina ostaje vani ljeti, a unutra zimi.</li>
                <li className="style-none"><ArrowLongRightIcon className="w-5 h-5 text-sky-700 inline-block" /> Pločice će biti postavljene u svibnju, do tada se kupac može odlučiti i za pločice</li>
                <li className="style-none"><ArrowLongRightIcon className="w-5 h-5 text-sky-700 inline-block" /> Primopredaja po dogovoru</li>
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
                            loading="eager"
                            className="mx-auto p-2"
                        />
                    </section>
                </section>
            )}
        </section>
    );
}
