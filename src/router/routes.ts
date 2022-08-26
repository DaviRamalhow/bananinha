import router from ".";
import MainLayout from "../layouts/MainLayout.vue";

import AboutView from "../views/AboutView.vue";
import HomeView from "../views/HomeView.vue";
import RegisterUser from "../views/RegisterUser.vue";
import SignIn from "../views/SignIn.vue";

export const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "/",
        name: "HomeView",
        component: HomeView,
      },
      {
        path: "/about",
        name: "AboutView",
        component: AboutView,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/RegisterUser",
        name: "RegisterUser",
        component: RegisterUser,
      },
      {
        path: "/SignIn",
        name: "SignIn",
        component: SignIn,
      },
    ],
  },
]; 


export default routes;
