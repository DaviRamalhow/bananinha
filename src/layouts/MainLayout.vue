<template>
  <div class="text-center">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">Feed</router-link> |
      <router-link to="/RegisterUser">Register</router-link> |
      <router-link to="/SignIn">Sign In</router-link> |
      <button @click="handleSignOut" v-if="isLoggedIn">Sign Out</button>
    </nav>
    <router-view />
  </div>
</template>
      
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { Auth, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";

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

</script>

<style lang="scss">
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>