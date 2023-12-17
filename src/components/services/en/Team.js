import React, { useState } from 'react';
import Card from '@/components/Card';
import { CheckCircleIcon } from '@heroicons/react/24/solid';


export default function Team() {

    const [showMore, setShowMore] = useState(false);

    const displayMoreText = "Read more";
    const displayLessText = "Show less";

    const previewContent = (

        <React.Fragment>
            <h1 className="font-bold text-2xl lg:text-3xl text-center my-4 uppercase">Your Team</h1>
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-4 lg:px-48 my-8">
                <Card
                    title="Volker"
                    content=""
                    imageUrl="/img/volker2.jpg"
                />
                <Card
                    title="Marko"
                    content=""
                    imageUrl="/img/marko.jpg"
                />
                <Card
                    title="Simone"
                    content=""
                    imageUrl="/img/simone.jpg"
                />
            </div>
        </React.Fragment>

    );

    const fullContent = (

        <React.Fragment>
            <ul>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 mr-1 text-green-700 inline" />ViSdP: Volker Hengst</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 mr-1 text-green-700 inline" />Data protection</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 mr-1 text-green-700 inline" />Guarantee for my services</li>
            </ul>

            <p className="text-justify mb-5 mt-5">Impressum: Volker Hengst, Gaj 47, 51252 Klenovica, Croatia, telephone: 0049 176 64 299 398 and 00385 95 526 56 28.</p>
            <p className="text-justify mb-5">I carry out my orders to the best of my knowledge and belief. I will have everything that is crucial to your investment confirmed in writing on site. I will ONLY purchase, sign and complete with your express WRITTEN approval/approval.</p>
            <p className="text-justify mb-5">So if I research something for you, I vouch for the correctness of the information I provide to you, to the extent that the information was given to me.</p>
            <p className="text-justify mb-5">If I take part in the meetings with Nadzor or the construction company for you, then I will represent your wishes as we have previously agreed in writing. When I report to you on construction progress on site, I do so on all the things you previously asked me to do.</p>
            <p className="text-justify mb-5">I am not liable for errors made by companies in their information, delays or execution. However, I will do my best to counteract disadvantages to your disadvantage on your behalf.</p>
            <p className="text-justify mb-5">In order to be able to take part in the crucial meetings with Nadzor, construction companies and craftsmen for you, I work with a partner, Marco Vukelic, from the construction industry, who assists me in the meetings and discussions. Croatian is spoken in these meetings and it was important to me that I act as a team with a native Croatian speaker. His services are already included in the price.</p>
            <h2 className="text-center font-bold text-xl mb-5 py-5">Marko Vukelić</h2>
            <p className="text-justify mb-5">Marko Vukelic, 28 years old, grew up in Novi Vinodolski, father a forester, mother an architect. Naturally influenced by my mother, I have been fascinated by the construction and planning of houses since my early youth. Since I was 12, I helped my mother in the office. Later I oriented myself towards technical construction and enrolled at the Faculty of Civil Construction in Rijeka. As expected, I will receive my diploma shortly (2024).</p>
            <p className="text-justify mb-5">Croatia is now a very popular country for investors, especially from Central Europe. Since very few engineers here speak a foreign language, this is particularly my niche in the market. I would like to support foreign investors from the construction side to be supported here for their new houses. I will be your interface with Volker Hengst in the meetings, which will take place in Croatian. Both in the construction-related and linguistic areas.</p>
            <h2 className="text-center font-bold text-xl mb-5 py-5">Simone Stampa</h2>
            <p className="text-justify mb-5">If you want to have a house finished with interior design or fully furnished, Simone Stampa would be the lady I would recommend to you. In addition to her knowledge of interior design and practical suitability, she is also very well informed about promotions, discounts and qualities of the surrounding furniture stores and interior design studios. This service is not included in the price and is subject to negotiation. If you would like to include Ms. Stampa in your considerations, please also contact this website.</p>
            <p className="text-justify mb-5">If you would like to receive a turnkey or fully furnished house, we also offer this service. Prices and details for this as required and agreed upon.</p>
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
