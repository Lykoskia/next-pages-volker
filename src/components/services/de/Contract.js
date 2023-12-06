import React, { useState } from 'react';
import ContactForm from '@/components/ContactForm';

export default function Contract() {

    const [showMore, setShowMore] = useState(false);

    const displayMoreText = "Weiter lesen";
    const displayLessText = "Verbergen";

    const previewContent = (

        <React.Fragment>
            <h1 className="font-bold text-3xl text-center my-4 uppercase">Unser Vertrag</h1>
            <p className="text-justify mb-5 pt-5">Wir gehen untereinander einen Vertrag in deutscher Sprache ein, worin ich Ihnen garantiere, als Schnittstelle zwischen Ihnen und allen Baufirmen, Architekten und Super Visor (Nadzor) zu agiere. Ich bin für Sie ebenso Ansprechpartner wie für die ausführenden Firmen auf dem Bau. Die Bedingung ist allerdings, dass Sie sich für einen Nadzor entscheiden, der zumindest gebrochen Englisch oder Deutsch spricht, da meine Kommunikation mit ihm die wichtigste auf der Baustelle sein wird. Juristisch betrachtet, vertritt er Ihre Interessen gegenüber den ausführenden Firmen.</p>
            <p className="text-justify mb-5">Da der Nadzor aber lediglich für die Qualitätsüberprüfung verantwortlich ist, nicht aber für die zeitliche Abstimmung bzw. das Erscheinen der Mitarbeitter komme ich ins Spiel. Außerdem achte ich auf mögliche &quot;Interessen-Konflikte&quot; zwischen Nadzor und insbesondere Ihrem Rohbau-Unternehmen. Hier erhalten Sie evtl. mehr und bessere Informationen, als von Ihrem kroatischen Nadzor. Außerdem beginnt mein Auftrag falls Sie mögen - bereits bei der Suche nach Architekt, Nadzor und Rohbau-Firma (mit der &quot;Bill of quantity&quot;).</p>
            <p className="text-justify mb-5">Meine Hilfe ist auf die Region der Kvarner Bucht zwischen Jadranovo und Klenovica beschränkt, wozu also insbesondere die beliebten Küstenorte Crikvenica, Novi Vinodolski und Selce gehören.</p>
            <p className="text-justify mb-5">Ihr Preis liegt bei 100 Euro pro Brutto-qm nach genehmigtem Projekt-Entwurf, bei 20.000 Euro Minimum.</p>
            <p className="text-justify mb-5">Der Auftrag ist zeitlich unbegrenzt, wird für die Rohbau-Phase erteilt und endet mit der Abnehme des Rohbaus durch Sie und den Nadzor von der Rohbau-Firma. Soll ich Ihr Haus auch bis zur Fertigstellung der Innenausbauten (wie Spuka, Knauf, Fliesen, Malen, Esstrich, etc.) begleiten, nehme ich komplett für alles bis zur Übergabe der &quot;Using-Permission&quot; und der Fertigstellung aller Innen-Komponenten a la schlüsselfertig 180 Euro pro Brutto-qm. Auch hier kann ich Ihnen mit diversen Handwerker-Empfehlungen aus der Region weiterhelfen.</p>
        </React.Fragment>

    );

    const fullContent = (

        <React.Fragment>
            <h1 className="font-bold text-xl lg:text-2xl text-center my-8 uppercase">Senden Sie uns eine Nachricht</h1>
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
