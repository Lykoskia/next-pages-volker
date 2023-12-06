import React, { useState } from 'react';
import ContactForm from '@/components/ContactForm';

export default function Contract() {

    const [showMore, setShowMore] = useState(false);

    const displayMoreText = "Pročitaj više";
    const displayLessText = "Prikaži manje";

    const previewContent = (

        <React.Fragment>
            <h1 className="font-bold text-3xl text-center my-4 uppercase">Naš ugovor</h1>
            <p className="text-justify mb-5 pt-5">Sklapamo ugovor između nas na njemačkom jeziku, u kojem jamčim da ću djelovati kao sučelje između vas i svih građevinskih tvrtki, arhitekata i Super Visor (Nadzor). Ja sam kontakt osoba za vas kao i za tvrtke koje izvode građevinske radove. Uvjet je, međutim, da odaberete Nadzornika koji govori barem loš engleski ili njemački, jer će mi komunikacija s njim biti najvažnija na gradilištu. S pravnog stajališta, on zastupa vaše interese prema izvršnim tvrtkama.</p>
            <p className="text-justify mb-5">Budući da je Nadzor odgovoran samo za provjeru kvalitete, ali ne i za tajming ili izgled djelatnika, ja ulazim u igru. Obraćam pozornost i na moguće “sukobe interesa” između Nadzora i, posebice, Vašeg fiktivnog građevinskog poduzeća. Ovdje možete dobiti više i bolje informacije nego od vašeg hrvatskog nadzora. Nadalje, ako želite, moj posao počinje traženjem arhitekta, Nadzora i građevinske tvrtke (uz &quot;Predmjernik radova&quot;).</p>
            <p className="text-justify mb-5">Moja pomoć ograničena je na regiju Kvarnerskog zaljeva između Jadranova i Klenovice, što posebno uključuje popularne obalne gradove Crikvenicu, Novi Vinodolski i Selce.</p>
            <p className="text-justify mb-5">Vaša cijena je 100 eura po metru bruto prema odobrenom nacrtu, a minimalno 20.000 eura.</p>
            <p className="text-justify mb-5">Narudžba je vremenski neograničena, postavlja se za fazu izgradnje ljuske i završava preuzimanjem ljuske od strane tvrtke Nadzor od strane tvrtke za izradu ljuske. Ukoliko želite da pratim Vašu kuću do završetka unutarnjih radova (kao što su ograde, kvake, pločice, bojanje, estrih i sl.), pobrinut ću se za sve do primopredaje &quot;Uporabne dozvole&quot; i završetak svih dijelova interijera po sistemu ključ u ruke 180 eura po m² bruto. I ovdje vam mogu pomoći raznim preporukama obrtnika iz regije.</p>
        </React.Fragment>

    );

    const fullContent = (

        <React.Fragment>
            <h1 className="font-bold text-xl lg:text-2xl text-center my-8 uppercase">Pošaljite nam poruku</h1>
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
