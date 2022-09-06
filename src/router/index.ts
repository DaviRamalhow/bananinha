import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import routes from "./routes";
import Cookie from "@andrewcaires/cookie";


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

// const getCurrentUser = () => {
//   return new Promise((resolve, reject) => {
//     const removeListener = onAuthStateChanged(
//       getAuth(),
//       (user) => {
//         removeListener();
//         resolve(user);
//       },

//       reject
//     );
//   });
// };

// router.beforeEach(async(to, from, next) => {
//   if(to.matched.some((record) => record.meta.requiresAuth)) {
//     if(await getCurrentUser()){
//       next();
//     } else {
//       alert("you dont have access!");
//       next("/SignIn");
//     }
//   }else {
//     next();
//   }
// });


router.beforeEach(async(to, from, next) => {
  const token = Cookie.check("token");
  if(to.matched.some((record) => record.meta.auth)) {
    if (token){
      next();
    } else {
      //console.log ("nope");
      next("/LoginToken");
    }
  }else {
    next();
  }
});

router.beforeEach(async(to, from, next) => {
  const onAuth = Cookie.check("token");
  if(to.matched.some((record) => record.meta.guest)) {
    if (onAuth){
      // alert ("Alrea");
      next("/AccountPage");
    } else {
      next();
    }
  }else {
    next();
  }
});


export default router;
