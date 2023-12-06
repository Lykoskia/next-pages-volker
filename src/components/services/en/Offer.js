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

    const displayMoreText = "Read more";
    const displayLessText = "Show less";

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
            <h1 className="font-bold text-3xl text-center my-4 uppercase">My Offer</h1>

            {isInitialModalOpen && (
                <div className="modal">
                    <div ref={initialModalRef} className="modal-content">
                        <span className="m-4 mx-6 text-3xl float-right cursor-pointer dark:text-sky-200" onClick={closeInitialModal}>&times;</span>
                        <section className="bg-yellow-600 dark:bg-gray-950 p-4 border-2 border-white shadow-lg shadow-red-700">
                            <p className="text-red-700 font-bold text-xl text-center">When building your house on site:</p>
                            <p className="text-red-700 font-bold text-xl text-center mb-4">+ 49 176 64 299 398</p>
                            <p className="text-green-700 font-bold text-xl text-center">Volker Hengst</p>
                            <p className="text-green-700 font-bold text-xl text-center mb-4">ALWAYS at your service in Northern Croatia</p>
                            <p className="text-black dark:text-sky-200 font-bold text-xl text-center">for you on site - also to quickly correct errors</p>
                            <p className="text-sky-700 font-bold text-xl text-center"><a href="https://wa.me/4917664299398" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400"><SiWhatsapp className="inline text-green-700" /> - Message Volker Hengst on WhatsApp</a></p>
                        </section>
                    </div>
                </div>
            )}

            <h2 className="text-red-700 dark:text-blue-200 text-center text-lg lg:text-2xl font-bold mb-3">You are far away - and disasters happen...</h2>
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
                    <li className="style-none"><CheckCircleIcon className="w-5 h-5 mr-1 text-green-700 inline" />Research for properties, architects, construction companies, tradesmen.</li>
                    <li className="style-none"><CheckCircleIcon className="w-5 h-5 mr-1 text-green-700 inline" />Meetings in English, German and Croatian with architects, construction companies, craftsmen, brokers, Sellers</li>
                    <li className="style-none"><CheckCircleIcon className="w-5 h-5 mr-1 text-green-700 inline" />Checking construction activities and construction progress</li>
                    <li className="style-none"><CheckCircleIcon className="w-5 h-5 mr-1 text-green-700 inline" />I will report everything to you via photo, text and/or phone calls</li>
                    <li className="style-none"><CheckCircleIcon className="w-5 h-5 mr-1 text-green-700 inline" />Normal availability for you 7 days a week between 8 a.m. and 10 p.m. (for urgent matters In certain situations my cell phone is constantly on)</li>
                    <li className="style-none"><CheckCircleIcon className="w-5 h-5 mr-1 text-green-700 inline" />You are in Germany while I take care of your investment on site (in the sense of a personal assistant)</li>
                    <li className="style-none"><CheckCircleIcon className="w-5 h-5 mr-1 text-green-700 inline" />Due to accuracy, I only offer this service to people who speak German like a &quot;native language&quot;</li>
                    <li className="style-none"><CheckCircleIcon className="w-5 h-5 mr-1 text-green-700 inline" />My promise: never more than 3 customers on assignment at the same time</li>
                    <li className="style-none"><CheckCircleIcon className="w-5 h-5 mr-1 text-green-700 inline" />100 euros per gross sqm, 20,000 euros minimum</li>
                </ul>
            </section>

        </React.Fragment>

    );

    const fullContent = (

        <React.Fragment>
            <p className="text-justify mb-5">Croatia is a booming country. Especially in tourism. And of course this also results in a good return on holiday apartments and holiday homes. Here too, prices are moving comfortably upwards. If you have also considered purchasing a property in Croatia, but you are not yet able to do so in Germany, I come into play. I can take care of your concerns.</p>
            <p className="text-justify mb-5">It&apos;s best, of course, if you take a vacation here soon and we can get to know each other in person. I am your service provider and take care of things on site that cannot or should not be done remotely.</p>
            <p className="text-justify mb-5">There is so much to research and take into account when investing in a property that you should either be there yourself (best option) or at least need someone there and gives an account or follows up immediately if things are not progressing or something even needs to be corrected.</p>
            <p className="text-justify mb-5">Thanks to my meticulous and well-structured way of working, you can be sure that I will inquire about the construction progress every day, even if you are not in Croatia.</p>
            <p className="text-justify mb-5">Although you may want to come to Croatia in person to sign contracts with construction companies, I am available to you as a permanent contact person and can even take photos and drive to the construction companies.</p>
            <p className="text-justify mb-5">My condition for cooperation: You can be reached by me via an email address where you should always confirm receipt of my emails when you read them, and you are also Reachable for me via Whatsapp and have &quot;activated&quot; the blue tick option after reading.</p>
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
