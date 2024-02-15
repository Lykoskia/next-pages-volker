import React, { useState, useEffect, useRef } from 'react';
import Weather from '@/components/Weather';
import Image from 'next/image';
import { CheckCircleIcon, ArrowLongRightIcon } from '@heroicons/react/24/solid';

export default function Villa() {

    const [showMore, setShowMore] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const modalRef = useRef(null);

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
            <h1 className="font-bold text-2xl lg:text-3xl text-center my-4 uppercase">The villa – 950,000 EUR</h1>
            <p className="text-center">(Handover March / April 2024)</p>
            <section className="flex flex-wrap justify-center items-center my-4">
                {smallScreenImages.slice(0, 3).map((image, index) => (
                    <section key={index} className="w-1/3">
                        {renderImage(image, index)}
                    </section>
                ))}
            </section>
            <Weather />
            <p className="text-justify mb-5 pt-5 font-bold">
                Distance to Crikvenica Port: 1,170 meters
                <br />
                Distance to the sandy beach: 1,300 meters
            </p>
            <p className="text-justify mb-5">(Sea view AND high quality were important to us)</p>
            <p className="text-justify mb-5">The quality of a property begins with the choice of architect...</p>
            <p className="text-justify mb-5">The sea view was enormously important to us; but equally essential was high quality and here I decided on the spot for the 5th architect. This architect understood our desire for exceptional architecture combined with high practical usability. As an example, the top floor is mentioned here. In almost all villas, this is the sleeping area, but we wanted not to &quot;sleep away&quot; the most beautiful view, but to be able to &quot;experience&quot; it wide awake.</p>
            <p className="text-justify mb-5">While we waited for the building permit after completion of the project, I then obtained offers from about 15 construction companies for the implementation of the desired villa, but also looked at completed houses from the companies and talked to local acquaintances about their image and reputations... For this, it was good that we had our first residence in this area since December 2021 and I could actually use (felt) seven days a week exclusively for this project.</p>
            <p className="text-justify mb-5">The result were contracts with a very good construction company and very good craftsmen; I did not choose them because they were the cheapest, but because the higher price came with an even better image at high quality.</p>
        </React.Fragment>
    );

    const fullContent = (

        <React.Fragment>
            <h2 className="font-bold text-xl lg:text-2xl text-center my-12 text-red-700 dark:text-sky-200">This house features:</h2>
            <ul>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> Sea view</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> 263 sqm of living space; 290.25 sqm gross</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> additional 600 sqm garden area on 734 sqm plot</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> &quot;best panoramic floor&quot; for the open space area with living room, fireplace, dining room and kitchen on the top floor</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> high construction standard, very good insulation, for example 40 centimeters thick outer walls, thermal insulation floor panel, ground floor walls and roof</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> Energy efficiency class A-Plus</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> 3 floors</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> 5 bedrooms</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> 3 bathrooms plus bathtub in master bedroom</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> 4 toilets</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> A self-contained 4-star apartment with its own entrance and parking</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> Swimming pool (salt water, no chlorinated water)</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> Fireplace</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> Air conditioners</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> Underfloor heating</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> Fitted kitchen including kitchen island</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> High-quality aluminum windows (the largest 4.75 mx 2.30 m) with mosquito nets and electric shutters</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> Italian ceramics on all floors</li>
            </ul>

            <h2 className="font-bold text-xl lg:text-2xl text-center my-12 text-red-700 dark:text-sky-200">As a yield object, the income is in the high season:</h2>
            <ul>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> for the house (without apartment): at approx. 4,000 to 5,000 euros / week</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> for the apartment: at around 1,500 euros / week</li>
            </ul>
            <h2 className="font-bold text-xl lg:text-2xl text-center my-12 text-red-700 dark:text-sky-200">Also:</h2>
            <ul>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> carport</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> Devices for installing an e-charging station and video camera at the entrance</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> Sewage connection (You don&apos;t have a bio-cleaner or septic tank on property)</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> Brand new asphalt road in front of the house</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> 15 minutes walk to the center of Crikvenica</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 text-green-700 inline" /> 7 minutes drive to Crikvenica beach</li>
            </ul>



            <h2 className="font-bold text-xl lg:text-2xl text-center my-12 text-red-700 dark:text-sky-200">Important:</h2>
            <ul>
                <li className="style-none"><ArrowLongRightIcon className="w-5 h-5 text-sky-700 inline-block" /> This house was designed in such a way that it can also be inhabited / rented out in winter WITHOUT having to use the air conditioning systems, which waste money in constant use.</li> 
                <li className="style-none"><ArrowLongRightIcon className="w-5 h-5 text-sky-700 inline-block" /> The shell will be finished in mid-April 2023, the windows are expected to be installed by the end of April</li> 
                <li className="style-none"><ArrowLongRightIcon className="w-5 h-5 text-sky-700 inline-block" /> we let the shell harden for 5 to 6 months in the summer before the facade is applied in the fall</li> 
                <li className="style-none"><ArrowLongRightIcon className="w-5 h-5 text-sky-700 inline-block" /> The buyer decides on the garden design, the appearance of the facade and the balcony design (whether glass, what colour...), all included in the price</li> 
                <li className="style-none"><ArrowLongRightIcon className="w-5 h-5 text-sky-700 inline-block" /> As an example of the high quality: Triple glazing, all with a low-E factor, a special coating that allows little heat transfer. This means that the heat stays outside in the summer and inside in the winter.</li> 
                <li className="style-none"><ArrowLongRightIcon className="w-5 h-5 text-sky-700 inline-block" /> The tiles will be laid in May, until then the buyer can also decide on the tiles</li>
                <li className="style-none"><ArrowLongRightIcon className="w-5 h-5 text-sky-700 inline-block" /> Handover by arrangement</li>
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
