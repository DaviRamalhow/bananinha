import { App } from "vue";

import HelloWorld from "./HelloWorld.vue";
import modalForgetPassword from "./modalForgetPassword.vue";

export const install = (app: App) => {
  app.component("HelloWorld", HelloWorld);
  app.component("ForgetPassword", modalForgetPassword);
};

export default install;
