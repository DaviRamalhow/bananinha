<template>
  <div class="text-center bg-black">
    <nav>
      <router-link to="/"
        class="text-xl font-montserrat font-regular px-2 py-1 rounded-md m-1 text-white font-extralight">
        Home
      </router-link>

      <router-link to="/about" class="text-xl font-mono px-2 py-1 rounded-md m-1 text-white">Feed</router-link>

      <router-link to="/RegisterUser" v-if="!isLoggedIn" class="text-xl font-mono px-2 py-1 rounded-md m-1 text-white">
        Register</router-link>

      <router-link to="/SignIn" v-if="!isLoggedIn" class="text-xl font-mono px-2 py-1 rounded-md m-1 text-white">Sign In
      </router-link>

      <router-link to="/LoginToken" class="text-xl font-mono px-2 py-1 rounded-md m-1 text-white">LoginToken
      </router-link>

      <router-link to="/AccountPage" class="text-xl font-mono px-2 py-1 rounded-md m-1 text-white">AccountPage
      </router-link>

      <button @click="logout" v-if="isLoggedIn" class="bg-white text-xl font-mono px-2 py-1 rounded-md m-1">Sign
        Out</button>
    </nav>
    <router-view />
  </div>
</template>
      
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { Auth, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";
import utils, { Cookie } from "../utils/cookie";
const router = useRouter();
const isLoggedIn = ref(false);
let auth: Auth;

onMounted(() => {
  auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});


const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/");
  });
};


const OnSignOut = async () => {

  const token = Cookie.get("token");
  if (token) {
    const rawResponse = await fetch("http://server.andrewcaires.me:3050/api/auth/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
      },
    });
    const content = await rawResponse.json();
    console.log(content);
    Cookie.remove("token");
  }

};

const tokenCheck = ref(false);

const tokenActive = () => {
  const check = Cookie.check("token");
  if (check) {
    tokenCheck.value = check;
  } else {
    tokenCheck.value = !check;
  }
};

const logout = () => {
  OnSignOut();
  handleSignOut();
};
tokenActive();

</script>

<style lang="scss">
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: rgb(129, 65, 175);
    }
  }
}
</style>