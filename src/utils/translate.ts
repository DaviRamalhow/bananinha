import { Translate } from "@andrewcaires/translate";
import { App } from "vue";

import en from "../locales/en";
import pt from "../locales/pt";

Translate.options({
  locale: "pt",
  locales: { en, pt },
});

export const install = (app: App) => {
  app.config.globalProperties.$t = Translate.translate;
};

export const translate = Translate.translate;

export default install;
