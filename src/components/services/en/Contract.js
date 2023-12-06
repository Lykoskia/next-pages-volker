import React, { useState } from 'react';
import ContactForm from '@/components/ContactForm';

export default function Contract() {

    const [showMore, setShowMore] = useState(false);

    const displayMoreText = "Read more";
    const displayLessText = "Show less";

    const previewContent = (

        <React.Fragment>
            <h1 className="font-bold text-3xl text-center my-4 uppercase">Our Contract</h1>
            <p className="text-justify mb-5 pt-5">We enter into a contract between us in German, in which I guarantee that I will act as an interface between you and all construction companies, architects and Super Visor (Nadzor). I am the contact person for you as well as for the companies carrying out the construction work. The condition, however, is that you choose a Nadzor who speaks at least broken English or German, as my communication with him will be the most important on the construction site. From a legal point of view, he represents your interests towards the executing companies.</p>
            <p className="text-justify mb-5">Since the Nadzor is only responsible for the quality check, but not for the timing or the appearance of the employees, I come into play. I also pay attention to possible “conflicts of interest” between Nadzor and, in particular, your shell construction company. Here you may get more and better information than from your Croatian Nadzor. Furthermore, if you like, my job begins with the search for the architect, Nadzor and shell construction company (with the &quot;Bill of quantity&quot;).</p>
            <p className="text-justify mb-5">My help is limited to the Kvarner Bay region between Jadranovo and Klenovica, which includes in particular the popular coastal towns of Crikvenica, Novi Vinodolski and Selce.</p>
            <p className="text-justify mb-5">Your price is 100 euros per gross square meter according to the approved project draft, with a minimum of 20,000 euros.</p>
            <p className="text-justify mb-5">The order has no time limit, is placed for the shell construction phase and ends with the acceptance of the shell by you and Nadzor from the shell construction company. If you would like me to accompany your house until the completion of the interior work (such as hauntings, knobs, tiles, painting, screed, etc.), I will take care of everything up to the handover of the &quot;Using Permission&quot; and the completion of all interior components a la turnkey 180 euros per gross sqm. Here too I can help you with various tradesman recommendations from the region.</p>
        </React.Fragment>

    );

    const fullContent = (

        <React.Fragment>
            <h1 className="font-bold text-xl lg:text-2xl text-center my-8 uppercase">Send us a message</h1>
            <ContactForm />
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
