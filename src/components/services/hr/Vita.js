import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';

export default function Vita() {

    const [showMore, setShowMore] = useState(false);

    const displayMoreText = "Pročitaj više";
    const displayLessText = "Prikaži manje";

    const previewContent = (

        <React.Fragment>
            <h1 className="font-bold text-3xl text-center my-4 uppercase">Moj životopis</h1>
            <ul>
                <li className="style-none"><ArrowLongRightIcon className="w-5 h-5 mr-1 text-sky-700 inline" />Rođen u Hamburgu 1967</li>
                <li className="style-none"><ArrowLongRightIcon className="w-5 h-5 mr-1 text-sky-700 inline" />Od 2021. sa stalnim boravkom u Kvarnerskom zaljevu, Hrvatska</li>
                <li className="style-none"><ArrowLongRightIcon className="w-5 h-5 mr-1 text-sky-700 inline" />Tečno govorim njemački i engleski</li>
                <li className="style-none"><ArrowLongRightIcon className="w-5 h-5 mr-1 text-sky-700 inline" />Nakon završene srednje škole po zanimanju sam bio biznismen, a zatim novinar i voditelj na radiju i televiziji (20 godina u Deutschlandfunk-u i 10 godina u Euronewsu)</li>
                <li className="style-none"><ArrowLongRightIcon className="w-5 h-5 mr-1 text-sky-700 inline" />Sada imam razne privatne i “građevinske” kontakte u regiji</li>
            </ul>

            <p className="text-justify mb-5 mt-5">Volker Hengst, rođen 1967. godine, emigrirao iz Njemačke 2021. godine, živi u Klenovici, Hrvatska, s primarnim prebivalištem, ima &quot;OIB&quot;, hrvatski porezni broj.</p>
            <p className="text-justify mb-5">Ozbiljan po profesiji (voditelj vijesti na Euronews, Norddeutscher Rundfunk) Bio sam i voditelj vijesti na Deutschlandfunk više od 20 godina, gdje sam bio stalni član spikerskog ansambla dok nisam zatražio dvogodišnju pauzu u vlastitom zahtjev u studenom 2021. To postoji i danas, ali stvari u Hrvatskoj dobro idu.</p>

        </React.Fragment>

    );

    const fullContent = (

        <React.Fragment>
            <p className="text-justify mb-5">Sad sam se potpuno integrirao, osim jezika, ponašam se sasvim normalno među domaćima. Ovdje sam zakonski zdravstveno osiguran i kao stolnotenisač u dva kluba STK Crikvenica i Novi Vinodolski imam kontakt s mještanima.</p>
            <p className="text-justify mb-5">Moj prvi partner u paru bio je dugogodišnji zaposlenik Lesnine XXL (namještajna kuća), a zadnjih 8 mjeseci moj stalni partner u paru je jedan od najiskusnijih i najvještijih policajaca na lokalnoj policijskoj postaji u Crikvenici, koja je također zadužena za cijelo okolno područje.</p>
            <p className="text-justify mb-5">Osim toga, sada postoji oko 500 dodatnih kontakata kroz istraživanje izgradnje kuća, susjeda i poznanika poznanika.</p>
            <p className="text-justify mb-5">A kontakti su ovdje neizmjerno važni - pogotovo u Hrvatskoj. Prvo zato što ti kontakti mogu izravno pomoći, a drugo zato što se svaki Hrvat osjeća kao da ima 100 jako dobrih prijatelja koji Vam mogu pomoći.</p>
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
