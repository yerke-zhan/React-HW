import React, { createContext, useContext, useState } from 'react';

const translations = {
  kk: {
    message: 'Миссия түнде басталады',
  },
  ru: {
    message: 'Миссия начинается в полночь', 
  },
  en: {
    message: 'Mission starts at midnight',
  },
};

export const useLanguage = () => useContext(LanguageContext);
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('kk');

  const changeLanguage = (lang) => setLanguage(lang);

  return (
    <LanguageContext.Provider value={{
      language,
      changeLanguage,
      audar: translations[language]
    }}>
      {children}
    </LanguageContext.Provider>
  );
};


