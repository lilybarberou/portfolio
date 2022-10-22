import fr from '../langs/fr.json';
import en from '../langs/en.json';

export const t = (key, lang = 'fr-FR') => {
    return lang === 'fr-FR' ? fr[key] : en[key];
};
