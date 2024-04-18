import { readFileSync } from "fs";
import { parse } from "path";
import { transpileModule } from "typescript";
import { compilerOptions } from "../../tsconfig.json";

import stringifyTranslationObjects from "./stringifyTranslations.js";

export const input = [
  "src/**/**.{ts,tsx}",
  "!**/node_modules/**",
  "!src/**/*.test.{ts,tsx}",
];
export const output = "./";
export const options = {
  debug: false,
  removeUnusedKeys: false,
  func: {
    list: ["t"],
    extensions: [""], // We dont want this extension because we manually check on transform function below
  },
  lngs: ["en", "vi"],
  defaultLng: "en",
  defaultNs: "translations",
  resource: {
    loadPath: "src/{{ns}}/{{lng}}.json",
    savePath: "src/{{ns}}/{{lng}}.json",
    jsonIndent: 2,
    lineEnding: "\n",
  },
  keySeparator: ".", // char to separate keys
  nsSeparator: ":", // char to split namespace from key
  interpolation: {
    prefix: "{{",
    suffix: "}}",
  },
};
export function transform(file, enc, done) {
  const extensions = [".ts", ".tsx"];

  const { base, ext } = parse(file.path);
  if (extensions.includes(ext) && !base.includes(".d.ts")) {
    const content = readFileSync(file.path, enc);
    const shouldStringfyObjects = base === "messages.ts";
    parseContent(content, this.parser, shouldStringfyObjects);
  }

  done();
}
function parseContent(content, parser, shouldStringfyObjects = true) {
  const { outputText } = transpileModule(content, {
    compilerOptions: compilerOptions,
  });
  let cleanedContent = outputText;
  if (shouldStringfyObjects) {
    cleanedContent = stringifyTranslationObjects(outputText);
  }
  parser.parseFuncFromString(cleanedContent);
}

const _parseContent = parseContent;
export { _parseContent as parseContent };
