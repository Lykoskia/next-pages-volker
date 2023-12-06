import React, { useState } from 'react';
import ContactForm from '@/components/ContactForm';

export default function Info() {

    const [showMore, setShowMore] = useState(false);

    const displayMoreText = "Pročitaj više";
    const displayLessText = "Prikaži manje";

    const previewContent = (

        <React.Fragment>
            <h1 className="font-bold text-2xl lg:text-3xl text-center my-4 uppercase">Procedura prodaje</h1>
            <p className="text-justify mb-5 mt-5">U Hrvatskoj je naravno moguće kupiti nekretninu bez posrednika. To vam štedi vašu brokersku naknadu od 3 posto (oko 25.000 eura).</p>
            <p className="text-justify mb-5">Za prijevode s hrvatskog na njemački snosit ćete troškove samo u troznamenkastom rasponu, koji bi inače bili uključeni u brokerske naknade. Pomoći ćemo vam oko svega što je potrebno za kupnju.</p>
            <p className="text-justify mb-5">Najvažnije: Tek kada je kupoprodajni ugovor upisan u zemljišne knjige (za našu kuću u Crikvenici: Ulica Kralja Tomislava u Crikvenici), vi ste legalno stekli 100% vlasništva i dakle jedini vlasnik.</p>
            <p className="text-justify mb-5">Prije toga ćete od nas dobiti papire potrebne za kupnju kao što su izvadak iz zemljišne knjige, energetski certifikat, postojeća građevinska dozvola, uporabna dozvola,... biti predugovor o kupoprodaji, u kojem plaćate 10% kupoprodajne cijene i imate upisan prvenstveni list vlasništva u zemljišnim knjigama.</p>
            <p className="text-justify mb-5">Ako preferirate lokalnog brokera iz razloga neutralnosti, možemo vam ga preporučiti.</p>
            <p className="text-justify mb-5">U svakom slučaju, možemo razgovarati o tome koji način želite.</p>
        </React.Fragment>

    );

    const fullContent = (

        <React.Fragment>
            <h1 className="font-bold text-xl lg:text-2xl text-center my-8 uppercase">Kontaktirajte nas</h1>
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