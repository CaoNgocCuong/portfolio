// Libraries
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

// Types
import type { Resource } from "i18next";

// JSONS
import EN from "./translations/en.json";
import VI from "./translations/vi.json";

// Constants
import { LOCALES } from "./constants";

// Utils
import { getInitialLocale } from "./utils";

const resources: Resource = {
  [LOCALES.EN]: {
    translation: EN,
  },
  [LOCALES.VI]: {
    translation: VI,
  },
};

i18next.use(initReactI18next).init({
  fallbackLng: LOCALES.EN,
  lng: getInitialLocale(),
  resources,
});

export default i18next;
