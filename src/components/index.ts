import { App } from "vue";

import HelloWorld from "./HelloWorld.vue";
import modalForgetPassword from "./modalForgetPassword.vue";
import CompModal from "./CompModal.vue";

export const install = (app: App) => {
  app.component("HelloWorld", HelloWorld);
  app.component("ForgetPassword", modalForgetPassword);
  app.component("CompModal", CompModal);
};

export default install;
