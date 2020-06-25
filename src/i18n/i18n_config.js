/** @format */

import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import {en, de, fr} from './locale';

const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
  de: {
    translation: de,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});


export default i18n;