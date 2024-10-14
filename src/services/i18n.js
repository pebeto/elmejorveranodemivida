import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import {en, es} from '../assets/languages.json';

i18n.use(initReactI18next).init({
    resources: {
        en: en,
        es: es,
    },
    lng: 'es',
    fallbackLng: 'en',

    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
