import React from 'react';
import i18n from 'i18n-js';

export const supportedLanguages = [
  { tag: 'en', name: 'English', isRtl: false },
  { tag: 'ua', name: 'Українська', isRtl: false },
];

export const getSystemDefaultLocale = () => {
  return 'ua';
};

const translations = {
  en: require('./locales/en.json'),
  ua: require('./locales/ua.json'),
};

export const LocalizationContext = React.createContext();

export const initTranslations = () => {
  i18n.translations = translations;
};
