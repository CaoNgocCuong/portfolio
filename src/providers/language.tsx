// Libraries
import { ReactNode, createContext, useContext } from "react";
import { useTranslation } from "react-i18next";

// Constants
import { LANGUAGES } from "@/constants";

// Types
import { Language, LanguageContextProps } from "@/types";

export const LanguageContext = createContext({} as LanguageContextProps);

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguageContext = () => useContext(LanguageContext);

interface LanguageContextProviderProps {
  children: ReactNode;
}

export const LanguageContextProvider = ({
  children,
}: LanguageContextProviderProps) => {
  const { t, i18n } = useTranslation();

  const handleClickChangeLanguage = (lng: Language) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("locale", lng);
  };

  return (
    <LanguageContext.Provider
      value={{ t, i18n, languages: LANGUAGES, handleClickChangeLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
