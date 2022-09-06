
import MainLayout from "../layouts/MainLayout.vue";
import AboutView from "../views/AboutView.vue";
import HomeView from "../views/HomeView.vue";
import LoginToken from "../views/LoginToken.vue";
import AccountPage from "../views/AccountPage.vue";
import TestVue from "../views/TestVue.vue";

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
        path: "/users",
        name: "AboutView",
        component: AboutView,
        meta: {
          auth: true,
        },
      },
      {
        path: "/LoginToken",
        name: "LoginToken",
        component: LoginToken,       
        meta: {
          guest: true,
        },
      },
      {
        path: "/AccountPage",
        name: "AccountPage",
        component: AccountPage,
        meta: {
          auth: true,
        },
      },
      {
        path: "/test",
        name: "TestVue",
        component: TestVue,
      },
    ],
  },
]; 


export default routes;
