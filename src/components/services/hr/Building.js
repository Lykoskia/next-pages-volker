import React, { useState } from 'react';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';

export default function Building() {

    const [showMore, setShowMore] = useState(false);

    const displayMoreText = "Pročitaj više";
    const displayLessText = "Prikaži manje";

    const previewContent = (

        <React.Fragment>
            <h1 className="font-bold text-2xl lg:text-3xl text-center my-4 uppercase">Gradnja moje vile</h1>
            <ul>
                <li className="style-none"><ArrowLongRightIcon className="w-5 h-5 mr-1 text-sky-700 inline" />Tražio i našao nekretninu</li>
                <li className="style-none"><ArrowLongRightIcon className="w-5 h-5 mr-1 text-sky-700 inline" />Tražio i našao arhitekte</li>
                <li className="style-none"><ArrowLongRightIcon className="w-5 h-5 mr-1 text-sky-700 inline" />Tražio i našao Nadzor (nadzornika gradilišta)</li>
                <li className="style-none"><ArrowLongRightIcon className="w-5 h-5 mr-1 text-sky-700 inline" />Tražio i našao građevinsku tvrtku</li>
                <li className="style-none"><ArrowLongRightIcon className="w-5 h-5 mr-1 text-sky-700 inline" />Tražio i našao razne majstore</li>
                <li className="style-none"><ArrowLongRightIcon className="w-5 h-5 mr-1 text-sky-700 inline" />Tražio i našao web developera</li>
            </ul>

            <p className="text-justify mb-5 mt-5">U svibnju 2021. bio sam prvi put u životu u Hrvatskoj, jer je moj odmor u Italiji morao biti otkazan zbog korone - jer je Italija još uvijek imala zatvorene granice.</p>
            <p className="text-justify mb-5">Ali u Hrvatskoj je sve ležernije (iako sam se morao naviknuti na sporost...) pa sam s partnericom otišao na &quot;alternativni odmor&quot;. Zaljubio sam se u zemlju i kupio nekretninu tamo gdje mi se zapravo najviše svidjelo - naime u lučkom gradu Crikvenici.</p>
        </React.Fragment>

    );

    const fullContent = (

        <React.Fragment>
            <p className="text-justify mb-5 mt-5">Slijedila je potraga za arhitektom, za Nadzorom (građevinski stručnjak koji je obavezan po zakonu, a kojeg vi kao investitor sami morate platiti i koji u isključivom interesu investitora brine o ispunjavanju svih zakona i arh. ureda u skladu s građevinskim radovima.projekt zadovoljava željene kvalitete), za građevinsku tvrtku za ljuskaru, za dobru tvrtku za prozore, gips, keramičar, fasader, soboslikar, majstor za knauf, vodoinstalater, elektro, geodet,. .. itd, itd.</p>
            <p className="text-justify mb-5">Najvažnije su, međutim, moja iskustva s građevinskim vlastima. Uvijek sam dobivao razne ponude za sve i sada to znanje mogu koristiti i prenositi drugima.</p>
            <p className="text-justify mb-5">Moja su iskustva raznolika, ali ograničavam ih na obalu između Jadranova i Klenovice; Tu spadaju i mjesta kao što su Novi Vinodolski, Selce, Dramalj i posebno Crikvenica, gdje se nalazi važan ured za graditeljstvo (kao i porezni ured i zemljišnoknjižni ured) koji su nadležni upravo za ovu regiju.</p>
            <p className="text-justify mb-5">Nakon svih odluka koje sam za sebe morao donijeti, sada gradim kuću u Crikvenici i od ožujka sam na trećem katu svoje ljušture. Kuća će biti gotova u ljeto 2023.</p>
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
