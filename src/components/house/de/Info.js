import React, { useState } from 'react';
import ContactForm from '@/components/ContactForm';

export default function Info() {

    const [showMore, setShowMore] = useState(false);

    const displayMoreText = "Weiter lesen";
    const displayLessText = "Verbergen";

    const previewContent = (

        <React.Fragment>
            <h1 className="font-bold text-2xl lg:text-3xl text-center my-4 uppercase">Die Prozedur des Verkaufs</h1>
            <p className="text-justify mb-5 mt-5">Auch in Kroatien ist es natürlich möglich, eine Immobilie ohne einen Makler zu erwerben. Das erspart Ihnen Ihre 3 Prozent Makler-Courtage (rund 25.000 Euro).</p>
            <p className="text-justify mb-5">Es werden lediglich Kosten im dreistelligen Bereich für Übersetzungen vom Kroatischen ins Deutsche für Sie anfallen, welche ansonsten bei den Makler-Gebühren inklusive wären. Bei allen Erledigungen, die für den Kauf notwendig sind, helfen wir Ihnen.</p>
            <p className="text-justify mb-5">Das Wichtigste: Erst wenn der Kaufvertrag im Grundbuchamt (für unsere Villa in Crikvenica: Ulica Kralja Tomislava in Crikvenica) registriert ist, haben Sie das Eigentum juristisch zu 100 % erworben und sind damit alleiniger Besitzer.</p>
            <p className="text-justify mb-5">Davor erhalten Sie von uns die für den Kauf notwendigen Papiere wie Grundbuch-Auszug, Energieausweis, vorhandene Baugenehmigung, Nutzungserlaubnis, ... Es wird dann einen Kauf-Vorvertrag geben, bei welchem Sie 10 % des Kaufpreises anzuzahlen haben und dafür eine Vormerkung des Eigentums im Grundbuch erhalten.</p>
            <p className="text-justify mb-5">Wenn Ihnen ein Makler vor Ort aus Neutralitätsgründen allerdings lieber ist, können wir Ihnen gerne einen empfehlen.</p>
            <p className="text-justify mb-5">Auf jeden Fall können wir uns absprechen, welcher Weg Ihnen lieber ist.</p>
        </React.Fragment>

    );

    const fullContent = (

        <React.Fragment>
            <h1 className="font-bold text-xl lg:text-2xl text-center my-8 uppercase">Kontaktiere uns</h1>
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