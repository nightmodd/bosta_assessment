import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import arMessages from "../locales/ar.json";
import enMessages from "../locales/en.json";

i18next.use(initReactI18next).init({
  lng: "ar",
  resources: {
    en: {
      translation: enMessages,
    },
    ar: {
      translation: arMessages,
    },
  },
});
