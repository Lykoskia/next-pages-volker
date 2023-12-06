import React, { useState } from 'react';
import Card from '@/components/Card';
import { CheckCircleIcon } from '@heroicons/react/24/solid';


export default function Team() {

    const [showMore, setShowMore] = useState(false);

    const displayMoreText = "Pročitaj više";
    const displayLessText = "Prikaži manje";

    const previewContent = (

        <React.Fragment>
            <h1 className="font-bold text-2xl lg:text-3xl text-center my-4 uppercase">Vaš Tim</h1>
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-4 lg:px-48 my-8">
                <Card
                    title="Volker"
                    content=""
                    imageUrl="/img/volker2.jpg"
                />
                <Card
                    title="Marko"
                    content=""
                    imageUrl="/img/300x500.gif"
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
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 mr-1 text-green-700 inline" />Zaštita podataka</li>
                <li className="style-none"><CheckCircleIcon className="w-5 h-5 mr-1 text-green-700 inline" />Garancija za moje usluge</li>
            </ul>

            <p className="text-justify mb-5 mt-5">Impresum: Volker Hengst, Gaj 47, 51252 Klenovica, Hrvatska, telefon: 0049 176 64 299 398 i 00385 95 526 56 28.</p>
            <p className="text-justify mb-5">Izvršavam svoje naredbe prema svom najboljem znanju i uvjerenju. Sve što je ključno za vašu investiciju ću pismeno potvrditi na licu mjesta. Kupit ću, potpisati i ispuniti SAMO uz vaše izričito PISMENO odobrenje/odobrenje.</p>
            <p className="text-justify mb-5">Dakle, ako nešto istražim za vas, jamčim za točnost informacija koje sam vam dao, u onoj mjeri u kojoj su informacije dane meni.</p>
            <p className="text-justify mb-5">Ako umjesto Vas sudjelujem na sastancima s Nadzorom ili građevinskom tvrtkom, zastupat ću Vaše želje kako smo se prethodno pismeno dogovorili. Kada vas izvješćujem o napretku izgradnje na gradilištu, činim to o svim stvarima koje ste prethodno od mene tražili.</p>
            <p className="text-justify mb-5">Ne snosim odgovornost za pogreške koje naprave tvrtke u svojim informacijama, kašnjenjima ili izvršenju. Međutim, dat ću sve od sebe da u vaše ime ispravim nedostatke na vašu štetu.</p>

            <p className="text-justify mb-5">Kako bih mogao sudjelovati na za Vas ključnim sastancima s Nadzorom, građevinskim tvrtkama i obrtnicima, surađujem s partnerom Marcom Vukelićem iz građevinske branše koji mi pomaže u sastancima i razgovorima. Na tim susretima se govori hrvatski i bilo mi je važno da timski djelujem s nekim izvornim govornikom hrvatskog. Njegove usluge su već uključene u cijenu.</p>
            <h2 className="text-center font-bold text-xl mb-5 py-5">Marko Vukelić</h2>
            <p className="text-justify mb-5">Marko Vukelić, 28 godina, odrastao u Novom Vinodolskom, otac šumar, majka arhitektica. Pod prirodnim utjecajem svoje majke, od rane sam mladosti bio fasciniran gradnjom i planiranjem kuća. Od svoje 12. godine pomagao sam majci u uredu. Kasnije sam se orijentirao na tehničko građenje i upisao Građevinski fakultet u Rijeci. Kao što se očekuje, diplomu ću dobiti uskoro (2024.).</p>
            <p className="text-justify mb-5">Hrvatska je danas vrlo popularna zemlja za investitore, posebno iz centralne Europe. Budući da vrlo malo inženjera ovdje govori strani jezik, ovo je posebno moja niša na tržištu. Htio bih podržati strane investitore s građevinske strane da ih se ovdje podrži za njihove nove kuće. Bit ću vaše sučelje s Volkerom Hengstom na sastancima koji će se odvijati na hrvatskom jeziku. I u graditeljskom i u lingvističkom području.</p>
            <h2 className="text-center font-bold text-xl mb-5 py-5">Simone Stampa</h2>
            <p className="text-justify mb-5">Ako želite imati kuću dovršenu s unutarnjim dizajnom ili potpuno namještenu, Simone Stampa bi bila dama koju bih vam preporučio. Osim znanja o dizajnu interijera i praktičnosti, vrlo je dobro informirana o akcijama, popustima i kvalitetama okolnih trgovina namještajem i studija za dizajn interijera. Ova usluga nije uključena u cijenu i podložna je dogovoru. Ako želite uključiti gospođu Stampa u svoja razmatranja, obratite se i ovoj web stranici.</p>
            <p className="text-justify mb-5">Ako želite dobiti kuću po sistemu ključ u ruke ili kompletno namještenu, nudimo i ovu uslugu. Cijene i detalji za ovo po potrebi i dogovoru.</p>
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
