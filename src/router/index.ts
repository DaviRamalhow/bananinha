import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import routes from "./routes";


const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {
  const title = to.name;
  if (title) {
    document.title = title.toString() + " - " + import.meta.env.VITE_APP_TITLE;
    return true;
  }
  document.title = import.meta.env.VITE_APP_TITLE;
  return true;
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },

      reject
    );
  });
};

router.beforeEach(async(to, from, next) => {
  if(to.matched.some((record) => record.meta.requiresAuth)) {
    if(await getCurrentUser()){
      next();
    } else {
      alert("you dont have access!");
      next("/");
    }
  }else {
    next();
  }
});



export default router;
