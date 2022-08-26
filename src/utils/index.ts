import { App } from "vue";

import cookie from "./cookie";
import fetch from "./fetch";
import translate from "./translate";
import ui from "./ui";

export const install = (app: App) => {
  app.use(cookie);
  app.use(fetch);
  app.use(translate);
  app.use(ui);
};

export * from "./cookie";
export * from "./fetch";
export * from "./translate";

export default install;
