/**
 * Created by ermak on 04.07.16.
 */
import i18next from 'i18next';
import XHR from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '../locales/en/panel.json';
import ru from '../locales/ru/panel.json';

i18next
    .use(XHR)
    .use(LanguageDetector)
    .init({
        fallbackLng: 'en',

        // have a common namespace used around the full app
        ns: [
            'top'
        ],
        resources: {
            en,
            ru
        },
        defaultNS: 'common',

        debug: true,

        interpolation: {
            escapeValue: false // not needed for react!!
        }
    });

//console.log(i18next);

export default i18next;