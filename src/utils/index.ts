// Constants
import { LOCALES } from "@/constants";

export const getInitialLocale = () => {
  const savedLocale = localStorage.getItem("locale");
  return savedLocale || LOCALES.EN;
};
