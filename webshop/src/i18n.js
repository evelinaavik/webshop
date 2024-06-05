import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import estonian from "./i18n/estonian.json";
import english from "./i18n/english.json";
import german from "./i18n/german.json";
import russian from "./i18n/russian.json";


    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
   const resources = {
      en: {
        translation: english
      },
      ee: {
        translation: estonian
      },
      de: {
        translation: german
      },

    ru: {
        translation: russian
      }
    };

    
  i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("language") || "ee", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;

