import { Cookie } from "@andrewcaires/cookie";
import { App } from "vue";

Cookie.options({
  expires: 12 * 30 * 86400,
});

export const install = (app: App) => {
  app.config.globalProperties.$cookie = Cookie;
};

export { Cookie };

export default install;
