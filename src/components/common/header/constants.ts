// Locales
import { translations } from "@/translations";
import { getTranslateMessage } from "@/translations/messages";

/* Navigation */
export const NAV_KEYS = {
  HOME: "home",
  ABOUT: "about_me",
  PROJECT: "projects",
  CONTACT: "contact",
} as const;

export const NAVIGATION = {
  [NAV_KEYS.HOME]: {
    key: NAV_KEYS.HOME,
    to: "/",
    text: getTranslateMessage(translations.navigation.home),
  },
  [NAV_KEYS.ABOUT]: {
    key: NAV_KEYS.ABOUT,
    to: "/about-me",
    text: getTranslateMessage(translations.navigation.about),
  },
  [NAV_KEYS.PROJECT]: {
    key: NAV_KEYS.PROJECT,
    to: "/projects",
    text: getTranslateMessage(translations.navigation.project),
  },
  [NAV_KEYS.CONTACT]: {
    key: NAV_KEYS.CONTACT,
    to: "/contact-me",
    text: getTranslateMessage(translations.navigation.contact),
  },
};
