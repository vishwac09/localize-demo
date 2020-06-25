/** @format */

import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import {en_source, de_source, fr_source} from './locale';

const resources = {
  en: {
    translation: en_source,
  },
  fr: {
    translation: fr_source,
  },
  de: {
    translation: de_source,
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