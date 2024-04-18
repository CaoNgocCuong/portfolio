// Libraries
import { i18n } from "i18next";

// Constants
import { LANGUAGES } from "@/constants";

export type Language = keyof typeof LANGUAGES;
export interface LanguageContextProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: any;
  i18n: i18n;
  languages: typeof LANGUAGES;
  handleClickChangeLanguage: (lang: Language) => void;
}

export type ConvertedToObjectType<T> = {
  [P in keyof T]: T[P] extends string ? string : ConvertedToObjectType<T[P]>;
};

/**
 
If you don't want non-existing keys to throw ts error you can simply do(also keeping the intellisense)

export type ConvertedToObjectType<T> = {
  [P in keyof T]: T[P] extends string ? string : ConvertedToObjectType<T[P]>;
} & {
  [P: string]: any;
};

*/

// Selecting the json file that our intellisense would pick from
export type TranslationJsonType = typeof import("../translations/en.json");
