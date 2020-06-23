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

function initialize_i18n(langCode = 'en') {
  return i18n.use(initReactI18next).init({
    resources,
    fallbackLng: 'en',
    lng: langCode,
    interpolation: {
      escapeValue: false,
    },
  });
}

export {initialize_i18n};