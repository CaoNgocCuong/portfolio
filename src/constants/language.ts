export const LOCALES = {
  EN: "en",
  VI: "vi",
} as const;

export const LANGUAGES = {
  [LOCALES.EN]: {
    nativeName: "English",
    locale: LOCALES.EN,
  },
  [LOCALES.VI]: {
    nativeName: "Vietnamese",
    locale: LOCALES.VI,
  },
} as const;
