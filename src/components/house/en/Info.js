import React, { useState } from 'react';
import ContactForm from '@/components/ContactForm';

export default function Info() {

    const [showMore, setShowMore] = useState(false);

    const displayMoreText = "Read more";
    const displayLessText = "Show less";

    const previewContent = (

        <React.Fragment>
            <h1 className="font-bold text-2xl lg:text-3xl text-center my-4 uppercase">The procedure of sale</h1>
            <p className="text-justify mb-5 mt-5">In Croatia it is of course possible to purchase a property without an agent. This saves you your 3 percent brokerage fee (around 25,000 euros).</p>
            <p className="text-justify mb-5">You will only incur costs in the three-digit range for translations from Croatian into German, which would otherwise be included in the broker&apos;s fees. We will help you with everything that is necessary for the purchase.</p>
            <p className="text-justify mb-5">The most important thing: Only when the purchase contract is registered in the land registry (for our house in Crikvenica: Ulica Kralja Tomislava in Crikvenica), you have legally acquired 100% of the property and are therefore the sole owner.</p>
            <p className="text-justify mb-5">Before that, you will receive from us the papers required for the purchase, such as extract from the land register, energy performance certificate, existing building permit, usage permit, ... There will then be a preliminary purchase contract, in which you pay 10% of the purchase price and have received a priority notice of ownership in the land register.</p>
            <p className="text-justify mb-5">If you prefer a local broker for reasons of neutrality, we can recommend one for you.</p>
            <p className="text-justify mb-5">In any case, we can discuss which way you prefer.</p>
        </React.Fragment>

    );

    const fullContent = (

        <React.Fragment>
            <h1 className="font-bold text-xl lg:text-2xl text-center my-8 uppercase">Contact us</h1>
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
