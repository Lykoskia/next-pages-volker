import React, { useEffect } from 'react';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import { DarkModeProvider } from '@/contexts/DarkModeContext';
import { SelectedPageProvider } from '@/contexts/SelectedPageContext';
import BackToTopButton from '@/components/BackToTopButton';
import { useRouter } from 'next/router';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/react';

export default function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const { translations = {}, seo } = pageProps;
    const { locale, asPath } = router;

    const capitalize = (str) => str ? str.charAt(0).toUpperCase() + str.slice(1) : '';

    const page = router.query.page ? ` | ${capitalize(router.query.page)}` : '';
    const section = router.query.section ? ` - ${capitalize(router.query.section)}` : '';
    const title = `Volker Hengst ${translations[page.toLowerCase()] || page}${translations[section.toLowerCase()] || section}`;

    useEffect(() => {
        document.title = title;
    }, [title]);

    const seoConfig = {
        en: {
            title: title,
            description: "Luxurious family house for sale in Crikvenica (30km from Rijeka)!",
            keywords: "Crikvenica luxury property, Villa with pool in Crikvenica, Luxury house sale Crikvenica, Real estate consulting Croatia, Building advice and support, Residential construction Croatia, Luxury properties in Croatia, Construction project support Crikvenica",
            locale: "en_US"
        },
        de: {
            title: title,
            description: "Luxusfamilienvilla mit Pool zum Verkauf in Crikvenica (30km von Rijeka)!",
            keywords: "Crikvenica Luxusimmobilie, Villa mit Pool in Crikvenica, Luxus Hausverkauf Crikvenica, Immobilienberatung Kroatien, Bauberatung und Unterstützung, Wohnbau Kroatien, Luxusimmobilien in Kroatien, Bauprojekt Unterstützung Crikvenica",
            locale: "de_DE"
        },
        hr: {
            title: title,
            description: "Prodaje se luksuzna obiteljska kuća s bazenom u Crikvenici (30km od Rijeke)!",
            keywords: "Crikvenica luksuzna nekretnina, Vila s bazenom u Crikvenici, Prodaja luksuznih kuća Crikvenica, Savjetovanje o nekretninama Hrvatska, Savjeti i podrška za gradnju, Stambena gradnja Hrvatska, Luksuzne nekretnine u Hrvatskoj, Podrška za građevinske projekte Crikvenica",
            locale: "hr_HR"
        }
    };

    const currentSEO = seo || seoConfig[locale] || seoConfig['en'];

    const alternateUrls = {
        en: 'https://www.volkerhengst.com',
        de: 'https://www.volkerhengst.com/de',
        hr: 'https://www.volkerhengst.com/hr',
    };

    return (
        <React.Fragment>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="google-site-verification" content="Wy3pwQcuao_CRkx7mrlmlTDwJKFytVtXO1b6UoGsBWE" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://api.openweathermap.org" crossorigin />
                <link rel="preload" href="/img/ck.jpg" as="image" />
                {Object.entries(alternateUrls).map(([lang, url]) => (
                    <link
                        rel="alternate"
                        hreflang={lang}
                        href={`${url}${asPath}`}
                        key={lang}
                    />
                ))}
                {locale === 'en' && (
                    <link
                        rel="canonical"
                        href={`https://volkerhengst.com${asPath}`}
                    />
                )}
            </Head>

            <DefaultSeo
                title={title}
                description={currentSEO.description}
                additionalMetaTags={[
                    {
                        name: 'keywords',
                        content: currentSEO.keywords
                    },
                    {
                        name: 'author',
                        content: 'Alan Frančišković'
                    },
                    {
                        name: 'robots',
                        content: 'index, follow'
                    },
                ]}
                openGraph={{
                    type: 'website',
                    locale: currentSEO.locale,
                    url: `https://www.volkerhengst.com/${locale === 'en' ? '' : locale}`,
                    title: currentSEO.title,
                    description: currentSEO.description,
                    site_name: 'Volker Hengst',
                }}
            />
            <SelectedPageProvider>
                <DarkModeProvider>
                    <Navbar />
                    <section className="flex flex-col min-h-screen">
                        <main className="flex-grow text-gray-900 bg-gray-100 dark:text-gray-100 dark:bg-gray-950 px-4 lg:px-20">
                            <Component {...pageProps} />
                        </main>
                    </section>
                    <Footer />
                    <BackToTopButton />
                    <Analytics />
                    <SpeedInsights />
                </DarkModeProvider>
            </SelectedPageProvider>
        </React.Fragment>
    );
}
