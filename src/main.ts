import { createApp } from "vue";
import App from "./App.vue";

import "./assets/css/index.css";

import utils, {Cookie} from "./utils";


import router from "./router";
import store from "./store";

import components from "./components";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5w2qJ1ZKpvmyarZMQn4hvv5S_dN8Xo74",
  authDomain: "vue-firebase-auth-5a687.firebaseapp.com",
  projectId: "vue-firebase-auth-5a687",
  storageBucket: "vue-firebase-auth-5a687.appspot.com",
  messagingSenderId: "493345001940",
  appId: "1:493345001940:web:989309a279b8225c5a4641"
};


initializeApp(firebaseConfig);

const app = createApp(App);

app.use(utils);

app.use(router);
app.use(store);

app.use(components);

app.mount("#app");

const login = {
  username: "test01",
  password: "test01",

};


const OnLogin = async () => {
  const rawResponse = await fetch("http://server.andrewcaires.me:3050/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(login)
  });
  const content = await rawResponse.json();

  console.log(content);
  Cookie.set("token",content.token);

};



const OnAuth = async () => {
  
  const token = Cookie.get("token");
  if(token){
      const rawResponse = await fetch("http://server.andrewcaires.me:3050/api/auth", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": token,
    },
  });
  const content = await rawResponse.json();

  console.log(content);
  }

};

(async ()=> {
  await OnLogin();
  await OnAuth();
  Cookie.remove("token");
})();