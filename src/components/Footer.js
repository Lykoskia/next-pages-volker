import React from 'react';
import { useRouter } from 'next/router';
import { FaWhatsapp, FaEnvelope, FaHome, FaPhone, FaBookReader, FaUsers, FaBinoculars, FaBullhorn } from 'react-icons/fa';
import { SiHtml5, SiCss3, SiTailwindcss, SiBootstrap, SiJavascript, SiReact, SiNextdotjs, SiGithub } from 'react-icons/si';

export default function Footer() {
    const router = useRouter();
    const currentLocale = router.locale || 'en';

    const localeText = {
        en: {
            research: 'Research',
            meetings: 'Meetings',
            oversight: 'Oversight',
            reporting: 'Reporting',
        },
        de: {
            research: 'Forschung',
            meetings: 'Treffen',
            oversight: 'Überwachung',
            reporting: 'Berichterstattung',
        },
        hr: {
            research: 'Istraživanje',
            meetings: 'Sastanci',
            oversight: 'Nadzor',
            reporting: 'Izvještavanje',
        }
    }
        
    const footerLeftItems = [
        { href: "https://www.google.com/maps/search/?api=1&query=Gaj 47, 51252 Klenovica", Icon: FaHome, text: "Gaj 47, 51252 Klenovica" },
        { href: "mailto:volker.hengst@t-online.de", Icon: FaEnvelope, text: "volker.hengst@t-online.de" },
        { href: "https://wa.me/4917664299398", Icon: FaWhatsapp, text: "+ 49 176 64 299 398" },
        { href: "tel:00385955265628", Icon: FaPhone, text: "+ 385 95 526 56 28" },
    ];

    const footerRightItems = [
        { Icon: FaBookReader, text: localeText[currentLocale].research },
        { Icon: FaUsers, text: localeText[currentLocale].meetings },
        { Icon: FaBinoculars, text: localeText[currentLocale].oversight },
        { Icon: FaBullhorn, text: localeText[currentLocale].reporting },
    ];

    const footerBottomRow1Items = [
        { Icon: SiHtml5, text: "HTML5" },
        { Icon: SiCss3, text: "CSS3" },
        { Icon: SiTailwindcss, text: "Tailwind" },
        { Icon: SiBootstrap, text: "Bootstrap" },
    ];

    const footerBottomRow2Items = [
        { Icon: SiJavascript, text: "JavaScript" },
        { Icon: SiReact, text: "React" },
        { Icon: SiNextdotjs, text: "Next.js" },
        { Icon: SiGithub, text: "GitHub" },
    ];

    return (
        <footer className="relative lg:sticky bottom-0 w-full font-bold shadow-inner shadow-red-700 dark:shadow-sky-700 items-start justify-around bg-sky-100 text-red-700 hover:text-sky-700 dark:bg-gray-900 dark:text-sky-200 z-50">
            <section className="mx-auto px-1 py-1 sm:px-6 lg:px-4 w-full">
                <section className="flex flex-row justify-around mb-4 lg:grid lg:grid-cols-2 lg:grid-rows-1">
                    <section className="flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-2 h-full pt-2 items-start justify-between">
                        {footerLeftItems.map(({ href, Icon, text }) => (
                            <a key={href} className="text-red-700 hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-700 flex items-center justify-center" href={href} target="_blank" rel="noopener noreferrer">
                                <Icon className="mx-2" />
                                {text}
                            </a>
                        ))}
                    </section>
                    <section className="flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-2 h-full pt-2 items-start justify-between">
                        {footerRightItems.map(({ Icon, text }, index) => (
                            <section key={index} className="text-red-800 dark:text-sky-300 flex items-center justify-center">
                                <Icon className="mx-2" />
                                {text}
                            </section>
                        ))}
                    </section>
                </section>
                {/*
                <section className="flex flex-wrap lg:flex-nowrap h-full pb-2 justify-around">
                    {[...footerBottomRow1Items, ...footerBottomRow2Items].map(({ Icon, text }, index) => (
                        <section key={index} className="text-red-900 dark:text-sky-300 flex items-center justify-center w-1/4 lg:w-1/8">
                            <Icon className="mx-2" />
                            {text}
                        </section>
                    ))}
                </section>
                */}
            </section>
        </footer>
    );
}
