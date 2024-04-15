// Constants
import { LANGUAGES } from "@/constants";
import { i18n } from "i18next";

export type Language = keyof typeof LANGUAGES;
export interface LanguageContextProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: any;
  i18n: i18n;
  languages: typeof LANGUAGES;
  handleClickChangeLanguage: (lang: Language) => void;
}
