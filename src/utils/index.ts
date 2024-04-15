// Constants
import { LOCALES, NICK_NAME } from "@/constants";

export const getInitialLocale = () => {
  const savedLocale = localStorage.getItem(`${NICK_NAME}-locale`);
  return savedLocale || LOCALES.EN;
};
