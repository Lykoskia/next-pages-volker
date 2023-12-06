import React from 'react';
import dynamic from 'next/dynamic';

const componentsMap = {
    villa: (page, locale) => dynamic(() => import(`@/components/${page}/${locale}/Villa`)),
    area: (page, locale) => dynamic(() => import(`@/components/${page}/${locale}/Area`)),
    about: (page, locale) => dynamic(() => import(`@/components/${page}/${locale}/About`)),
    info: (page, locale) => dynamic(() => import(`@/components/${page}/${locale}/Info`)),
    photos: (page, locale) => dynamic(() => import(`@/components/${page}/${locale}/Photos`)),
    offer: (page, locale) => dynamic(() => import(`@/components/${page}/${locale}/Offer`)),
    vita: (page, locale) => dynamic(() => import(`@/components/${page}/${locale}/Vita`)),
    building: (page, locale) => dynamic(() => import(`@/components/${page}/${locale}/Building`)),
    team: (page, locale) => dynamic(() => import(`@/components/${page}/${locale}/Team`)),
    contract: (page, locale) => dynamic(() => import(`@/components/${page}/${locale}/Contract`)),
};

const PageComponent = ({ page, locale, componentNames }) => {
    return (
        <React.Fragment>
            {componentNames && componentNames.map((componentName) => {
                console.log(`Loading component: ${componentName} for page: ${page} and locale: ${locale}`);
                const DynamicComponent = componentsMap[componentName]
                    ? componentsMap[componentName](page, locale)
                    : null;

                return DynamicComponent ? <DynamicComponent key={componentName} /> : null;
            })}
        </React.Fragment>
    );
};

export default PageComponent;
