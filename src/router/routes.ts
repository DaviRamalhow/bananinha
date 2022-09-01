
import MainLayout from "../layouts/MainLayout.vue";

import AboutView from "../views/AboutView.vue";
import HomeView from "../views/HomeView.vue";
import RegisterUser from "../views/RegisterUser.vue";
import SignIn from "../views/SignIn.vue";
import LoginToken from "../views/LoginToken.vue";
import AccountPage from "../views/AccountPage.vue";

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
        meta: {
          requiresUnAuth: true,
        },
      },
      {
        path: "/SignIn",
        name: "SignIn",
        component: SignIn,
        meta: {
          requiresUnAuth: true,
        },
      },
      {
        path: "/LoginToken",
        name: "LoginToken",
        component: LoginToken,
      },
      {
        path: "/AccountPage",
        name: "AccountPage",
        component: AccountPage,
        meta: {
          auth: true,
        },
      },
    ],
  },
]; 


export default routes;
