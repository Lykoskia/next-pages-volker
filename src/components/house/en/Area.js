import React, { useState } from 'react';
import Image from 'next/image';

export default function Area() {

    const [showMore, setShowMore] = useState(false);

    const displayMoreText = "Read more";
    const displayLessText = "Show less";

    const previewContent = (

        <React.Fragment>
            <h1 className="font-bold text-2xl lg:text-3xl text-center my-4 uppercase">North Croatia, The Kvarner bay and Crikvenica</h1>
            <figure className="flex justify-center my-4">
                <Image 
                    src="/img/ck.jpg"
                    alt="Crikvenica"
                    layout="responsive"
                    width={1275}
                    height={850}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 800px"
                    priority
                    className="my-4 max-w-screen-md p-2 shadow-lg border border-gray-300 dark:border-gray-700"
                />
            </figure>
            <p className="text-justify mb-5">&quot;Crikvenica: The most popular place in terms of overnight stays in the most popular region of Croatia, the Kvarner Bay&quot;</p>
            <p className="text-justify mb-5">Croatia is the newest member state of the European Union and with 1800 kilometers of coastline it is a fantastic holiday opportunity. The Adriatic country has recorded increasing numbers of tourists in recent years.</p>
            <p className="text-justify mb-5">Most foreign overnight stays were made by Germans (24.9 million), followed by Slovenians (10.1 million) and Austrians (8.2 million). The Croatians are well prepared for German-speaking holidaymakers, mostly you don&apos;t even need English, since many Croatians understand German and can speak it themselves.</p>
            <p className="text-justify mb-5">With a crystal-clear sea, nearby mountains and an overall beautiful landscape, Croatia is particularly popular with bathers, sailing enthusiasts and nature lovers.</p>
        </React.Fragment>

    );

    const fullContent = (

        <React.Fragment>
            <p className="text-justify mb-5">And Croatia is booming: last year, 2022, the Adriatic country recorded a total of 104.8 million overnight stays. Plus 11 percent. Tourism revenues for gastronomy, pension and house owners exceeded expectations. The original forecast of the Croatian central bank (HNB) for the full year 2022 was exceeded after just nine months.</p>
            <p className="text-justify mb-5">With the recent introduction of the euro and entry into the Schengen area since January 2023, the country is now even more optimistic; especially in Istria and in the Kvarner Bay; since many guests from Germany, Austria and Slovenia have a short journey. The vacationers have no border controls and the former fee-consuming money exchange into Croatian kuna is also no longer necessary.</p>
            <p className="text-justify mb-5">For the new year 2023, the Croatian tourism industry is expecting new record numbers including record overnight stays, which should also break the pre-Corona records for the first time. So the highest ever.</p>
            <p className="text-justify mb-5">The Kvarner Bay in the north of the country is one of the most frequented holiday destinations in Croatia. It is home to the second largest city in Croatia, Rijeka. In the port metropolis you have everything you need, whether 3 large shopping malls including cinemas, various hardware stores, well-stocked car dealerships, a port promenade, a large pedestrian zone with various boutiques and cafes at the port,... 20 minutes by car from Rijeka Crikvenica, also known as Croatia&apos;s St. Tropez because of the many palm trees on the harbor promenade.</p>
            <p className="text-justify mb-5">The entire bay is protected from strong winds by high mountain ranges and, with up to 2,500 hours of sunshine a year, has an excellent climate and excellent water quality. In Kvaner Bay, Platak is also one of the few ski areas from where you can see the Mediterranean Sea while skiing.</p>
            <p className="text-justify mb-5">An idea of the diverse possibilities that nature creates with the mountains by the sea offers a whole new sport discipline; namely a duel of sails and skis. On the first weekend in March 2023, the Snipe and Ski Race was held on the beach in Kvarner Bay and in Platak, in which the participants first competed in giant slalom in Platak on Friday, before taking part in a sailing regatta in the coastal town of Kostrena on Saturday and Sunday completed this competition.</p>
            <p className="text-justify mb-5">Only a 6-hour drive from Munich is the most popular place in the Kvarner Bay for holidaymakers based on the number of overnight stays: Crikvenica.</p>
            <p className="text-justify mb-5">The dreamlike Crikvenica Riviera, lined with many palm trees, stretches over 8 kilometers.</p>
            <p className="text-justify mb-5">Crikvenica has been carefully and slowly adjusting to tourism for more than 125 years, so it offers a pleasant mix of local traditions that have remained, such as public water polo matches in the small port of Crikvenica or the coastal town&apos;s own carnival and on the other hand a wide range to stroll along, especially along the long beach promenade with the associated bars and restaurants. And if you have plenty of time, you can continue along the beach to the neighboring towns of Dramalj and Selce.</p>
            <p className="text-justify mb-5">Crystal-clear sea, fresh air and fantastically beautiful beaches, as well as countless water, sports and leisure opportunities are the attributes that make Crikvenica the most popular beach holiday resort in the Kvarner Bay. The absolute highlight is the golden-yellow sandy beach &quot;Gradska Kupaliste&quot;, which has been awarded the &quot;Blue Flag&quot;.</p>
            <p className="text-justify mb-5">Many think Crikvenica has the charm of the Cote d&apos;Azur, but at still moderate prices.</p>
            <p className="text-justify mb-5">And if you let your eyes wander on the beach, Vis a Vis with the island of Krk in front of you also has a wonderful panorama.</p>
        </React.Fragment>

    );

    return (

        <section className="text-black dark:text-sky-200 p-4">
            <div className="block">
                {previewContent}
            </div>
            <div className={`${showMore ? 'block' : 'hidden'}`}>
                {fullContent}
            </div>
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
