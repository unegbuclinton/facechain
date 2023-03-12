import i18n from 'i18next'
import { initReactI18next } from "react-i18next";

import English from "./locals/english.json" 
import French from "./locals/french.json" 


const resources = {
    en:{
        translation: English
    },
    fr:{
        translation: French
    }
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
   
    resources,
    lng: [localStorage.lang], // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

export default i18n
