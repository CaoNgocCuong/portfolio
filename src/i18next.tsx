// Libraries
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Types
import type { Resource } from "i18next";

// JSONS
import EN from "./translations/en.json";
import VI from "./translations/vi.json";

// Constants
import { LOCALES } from "./constants";

// Utils
import { getInitialLocale } from "./utils";
import { convertLanguageJsonToObject } from "./translations";

// Create the 'translations' object to provide full intellisense support for the static json files.
convertLanguageJsonToObject(EN);

const resources: Resource = {
  [LOCALES.EN]: {
    translation: EN,
  },
  [LOCALES.VI]: {
    translation: VI,
  },
};

i18next
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: LOCALES.EN,
    lng: getInitialLocale(),
    resources,
  });

export default i18next;
