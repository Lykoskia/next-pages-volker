import React, { useState } from 'react';
import Image from 'next/image';

export default function Area() {

    const [showMore, setShowMore] = useState(false);

    const displayMoreText = "Pročitaj više";
    const displayLessText = "Prikaži manje";

    const previewContent = (

        <React.Fragment>
            <h1 className="font-bold text-2xl lg:text-3xl text-center my-4 uppercase">Sjeverna Hrvatska, kvarnerski zaljev i Crikvenica</h1>
            <figure className="flex justify-center my-4">
                <Image 
                    src="/img/ck.jpg"
                    alt="Crikvenica"
                    layout="responsive"
                    width={1275}
                    height={850}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 800px"
                    priority
                    className="my-4 max-w-screen-lg p-2 shadow-lg border border-gray-300 dark:border-gray-700"
                />
            </figure>
            <p className="text-justify mb-5">&quot;Crikvenica: Najpopularnije mjesto po broju noćenja u najpopularnijoj regiji Hrvatske, Kvarnerskom zaljevu&quot;</p>
            <p className="text-justify mb-5">Hrvatska je najnovija država članica Europske unije i sa 1800 kilometara obale fantastična je prilika za odmor. Ova jadranska zemlja posljednjih godina bilježi sve veći broj turista.</p>
            <p className="text-justify mb-5">Najviše stranih noćenja ostvarili su Nijemci (24,9 milijuna), zatim Slovenci (10,1 milijun) i Austrijanci (8,2 milijuna). Hrvati su dobro pripremljeni za turiste koji govore njemački, uglavnom vam engleski nije ni potreban, jer mnogi Hrvati razumiju njemački i sami ga mogu govoriti.</p>
            <p className="text-justify mb-5">S kristalno čistim morem, obližnjim planinama i sveukupno prekrasnim krajolikom, Hrvatska je posebno popularna među kupačima, ljubiteljima jedrenja i ljubiteljima prirode.</p>
        </React.Fragment>

    );

    const fullContent = (

        <React.Fragment>
            <p className="text-justify mb-5">I Hrvatska cvjeta: prošle, 2022. godine jadranska je zemlja zabilježila ukupno 104,8 milijuna noćenja. Plus 11 posto. Prihodi od turizma za gastronomiju, pansione i vlasnike kuća premašili su očekivanja. Prvotna prognoza Hrvatske središnje banke (HNB) za cijelu 2022. godinu premašena je nakon samo devet mjeseci.</p>
            <p className="text-justify mb-5">S nedavnim uvođenjem eura i ulaskom u schengensko područje od siječnja 2023., zemlja je sada još optimističnija; osobito u Istri iu Kvarnerskom zaljevu; budući da brojni gosti iz Njemačke, Austrije i Slovenije putuju kratko. Putnici na odmoru nemaju granične kontrole, a nekadašnja naplatna zamjena novca u hrvatske kune također više nije potrebna.</p>
            <p className="text-justify mb-5">Hrvatsku turističku privredu u novoj 2023. godini očekuju nove rekordne brojke uključujući i rekordna noćenja, čime bi se prvi put trebali oboriti i pretkoronski rekordi. Dakle, najviše ikad.</p>
            <p className="text-justify mb-5">Kvarnerski zaljev na sjeveru zemlje jedno je od najposjećenijih odredišta za odmor u Hrvatskoj. Tu se nalazi drugi najveći grad u Hrvatskoj, Rijeka. U lučkoj metropoli imate sve što vam je potrebno, bilo 3 velika trgovačka centra uključujući kina, razne trgovine željezarije, dobro opskrbljene auto kuće, lučko šetalište, veliku pješačku zonu s raznim buticima i kafićima u luci,... 20 minuta. automobilom iz Rijeke Crikvenice, poznate i kao hrvatski St. Tropez zbog brojnih palmi na lučkom šetalištu.</p>
            <p className="text-justify mb-5">Cijeli zaljev zaštićen je od jakih vjetrova visokim planinskim lancima i s do 2500 sunčanih sati godišnje ima izvrsnu klimu i izvrsnu kvalitetu vode. U Kvanerskom zaljevu Platak je i jedno od rijetkih skijališta s kojeg se na skijanju vidi Sredozemno more.</p>
            <p className="text-justify mb-5">Ideja o raznolikim mogućnostima koje priroda stvara s planinama uz more nudi potpuno novu sportsku disciplinu; naime dvoboj jedara i skija. Prvog vikenda u ožujku 2023. na plažama u Kvarnerskom zaljevu i na Platku održana je Utrka šljuka i skija u kojoj su sudionici u petak najprije nastupili u veleslalomu na Platku, a zatim u jedriličarskoj regati u primorskom mjestu. Kostrene u subotu i nedjelju završilo ovo natjecanje.</p>
            <p className="text-justify mb-5">Samo 6 sati vožnje od Münchena je najpopularnije mjesto na Kvarneru za turiste po broju noćenja: Crikvenica.</p>
            <p className="text-justify mb-5">Crikvenička rivijera iz snova, obrubljena brojnim palmama, proteže se na 8 kilometara.</p>
            <p className="text-justify mb-5">Crikvenica se već više od 125 godina polako i pažljivo prilagođava turizmu, pa nudi ugodan spoj lokalnih tradicija koje su ostale, poput javnih vaterpolo utakmica u crikveničkoj luci ili vlastiti karneval obalnog grada, a s druge strane širok raspon aktivnosti, osobito duž duge šetnice uz plažu s barovima i restoranima. A ako imate dovoljno vremena, možete produžiti plažom do susjednih mjesta Dramlja i Selca.</p>
            <p className="text-justify mb-5">Kristalno čisto more, svježi zrak i fantastično lijepe plaže, kao i nebrojene mogućnosti za sport i zabavu na vodi, atributi su koji Crikvenicu čine najpopularnijim ljetovalištem na Kvarneru. Apsolutni vrhunac je zlatno-žuta pješčana plaža &quot;Gradska Kupalište&quot;, koja je nagrađena &quot;Plavom zastavom&quot;.</p>
            <p className="text-justify mb-5">Mnogi misle da Crikvenica ima šarm Azurne obale, ali uz još uvijek umjerene cijene.</p>
            <p className="text-justify mb-5">A ako vam pogled odluta plažom, Vis a Vis s otokom Krkom pred vama je također prekrasna panorama.</p>
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
