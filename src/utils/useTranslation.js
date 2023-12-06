export const useTranslation = (locale) => {
    try {
        const translations = require(`../../locales/${locale}/translation.json`);
        return translations;
    } catch (error) {
        console.error('Translation file not found', error);
        return {};
    }
};
