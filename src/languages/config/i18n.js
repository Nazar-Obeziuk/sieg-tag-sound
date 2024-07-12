// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import translationEN from "../en/translation.json";
// import translationRU from "../ru/translation.json";

// const resources = {
//   en: {
//     translation: translationEN,
//   },
//   ru: {
//     translation: translationRU,
//   },
// };

// i18n
//   .use(initReactI18next)
//   .init({
//     resources,
//     fallbackLng: "en",
//     interpolation: {
//       escapeValue: false,
//     },
//   });

// export default i18n;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../en/translation.json";
import de from "../de/translation.json";
import ru from "../ru/translation.json";

i18n.use(initReactI18next).init({
  debug: false,
  fallbackLng: "de",
  lng: "de",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: en,
    },
    de: {
      translation: de,
    },
    ru: {
      translation: ru,
    },
  },
});

export default i18n;
