// Libraries
import i18next from "i18next";

/**
 * This function has two roles:
 * 1) If the `id` is empty it assigns something so does i18next doesn't throw error. Typescript should prevent this anyway
 * 2) It has a hand-picked name `_t` (to be short) and should only be used while using objects instead of strings for translation keys
 * `internals/extractMessages/stringifyTranslations.js` script converts this to `t('a.b.c')` style before `i18next-scanner` scans the file contents
 * so that our json objects can also be recognized by the scanner.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const _t = (id: string, ...rest: any[]): [string, ...any[]] => {
  if (!id) {
    id = "_NOT_TRANSLATED_";
  }
  return [id, ...rest];
};

export const getTranslateMessage = (
  id: string,
  defaultMessage: string = "",
  value: Record<string, unknown> = {},
) => {
  return i18next.t(_t(id, defaultMessage), value);
};
