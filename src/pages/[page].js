import React from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { componentsStructure } from '@/utils/Data';

function DynamicPage() {
    const router = useRouter();
    const { section, page = 'house' } = router.query;
    const locale = router.locale;

    let PageComponent;

    if (page === 'house') {
        console.log(`Current locale: ${locale}`);
        switch (locale) {
            case 'en':
                PageComponent = section === 'villa' ? dynamic(() => import('@/components/house/en/Villa')) :
                    section === 'area' ? dynamic(() => import('@/components/house/en/Area')) :
                        section === 'about' ? dynamic(() => import('@/components/house/en/About')) :
                            section === 'info' ? dynamic(() => import('@/components/house/en/Info')) :
                                section === 'photos' ? dynamic(() => import('@/components/house/en/Photos')) :
                                    dynamic(() => import('@/components/house/en/DefaultComponent'));
                break;
            case 'de':
                PageComponent = section === 'villa' ? dynamic(() => import('@/components/house/de/Villa')) :
                    section === 'area' ? dynamic(() => import('@/components/house/de/Area')) :
                        section === 'about' ? dynamic(() => import('@/components/house/de/About')) :
                            section === 'info' ? dynamic(() => import('@/components/house/de/Info')) :
                                section === 'photos' ? dynamic(() => import('@/components/house/de/Photos')) :
                                    dynamic(() => import('@/components/house/de/DefaultComponent'));
                break;
            case 'hr':
                PageComponent = section === 'villa' ? dynamic(() => import('@/components/house/hr/Villa')) :
                    section === 'area' ? dynamic(() => import('@/components/house/hr/Area')) :
                        section === 'about' ? dynamic(() => import('@/components/house/hr/About')) :
                            section === 'info' ? dynamic(() => import('@/components/house/hr/Info')) :
                                section === 'photos' ? dynamic(() => import('@/components/house/hr/Photos')) :
                                    dynamic(() => import('@/components/house/hr/DefaultComponent'));
                break;
            default:
                PageComponent = dynamic(() => import('@/components/house/en/DefaultComponent'));
                break;
        }
    } else if (page === 'services') {
        switch (locale) {
            case 'en':
                PageComponent = section === 'offer' ? dynamic(() => import('@/components/services/en/Offer')) :
                    section === 'vita' ? dynamic(() => import('@/components/services/en/Vita')) :
                        section === 'building' ? dynamic(() => import('@/components/services/en/Building')) :
                            section === 'team' ? dynamic(() => import('@/components/services/en/Team')) :
                                section === 'contract' ? dynamic(() => import('@/components/services/en/Contract')) :
                                    dynamic(() => import('@/components/services/en/DefaultComponent'));
                break;
            case 'de':
                PageComponent = section === 'offer' ? dynamic(() => import('@/components/services/de/Offer')) :
                    section === 'vita' ? dynamic(() => import('@/components/services/de/Vita')) :
                        section === 'building' ? dynamic(() => import('@/components/services/de/Building')) :
                            section === 'team' ? dynamic(() => import('@/components/services/de/Team')) :
                                section === 'contract' ? dynamic(() => import('@/components/services/de/Contract')) :
                                    dynamic(() => import('@/components/services/de/DefaultComponent'));
                break;
            case 'hr':
                PageComponent = section === 'offer' ? dynamic(() => import('@/components/services/hr/Offer')) :
                    section === 'vita' ? dynamic(() => import('@/components/services/hr/Vita')) :
                        section === 'building' ? dynamic(() => import('@/components/services/hr/Building')) :
                            section === 'team' ? dynamic(() => import('@/components/services/hr/Team')) :
                                section === 'contract' ? dynamic(() => import('@/components/services/hr/Contract')) :
                                    dynamic(() => import('@/components/services/hr/DefaultComponent'));
                break;
            default:
                PageComponent = dynamic(() => import('@/components/services/en/DefaultComponent'));
                break;
        }
    } else {
        PageComponent = dynamic(() => import('@/components/house/en/Villa'));
    }

    if (!PageComponent) return <div>Page or Section not found</div>;
    return <PageComponent />;
}

export default DynamicPage;


export async function getStaticPaths({ locales }) {
    const pages = Object.keys(componentsStructure);
    const paths = locales.flatMap(locale =>
        pages.map(page => ({ params: { page }, locale }))
    );

    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ locale, defaultLocale }) {
    locale = locale || defaultLocale;

    const translations = await import(`../../locales/${locale}/translation.json`)
        .then(module => module.default)
        .catch(() => ({}));

    return {
        props: {
            translations,
        },
    };
}
