<template>
  <div class="w-screen h-screen bg-slate-900 flex flex-col items-center justify-center">
    <div class=" flex justify-center items-center w-xl h-xl z-50">
      <div class="flex-1">
        <div class="grid grid-cols-1 grid-rows-1 grid-flow-row-dense opacity-100">
          <div class="p-4 pr-6 bg-white rounded-md shadow-2xl space-y-2 drop-shadow-2xl">
            <li v-for="(valor, chave) in data" :key="valor" class="font-mono text-xl">
              {{ chave }} = {{ valor }}
            </li>
            <br>
            <br>
            <button @click="OnSignOut"
              class="bg-gradient-to-r from-red-500 to-red-500 rounded-xl text-lg font-sans font-semibold px-2 py-1 m-1 p-2 w-lg h-min-md">
              Sign Outasas
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import utils, { Cookie } from "../utils/cookie";
import { ref } from "vue";
import router from "../router";
const batatinha = ref(false);

const data = ref({

});

const OnAuth = async () => {
  const token = Cookie.get("token");
  if (token) {
    const rawResponse = await fetch("http://server.andrewcaires.me:3050/api/auth", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
      },
    });
    data.value = await rawResponse.json();

    console.log(data);
  }
};
OnAuth();

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
    router.push("/LoginToken");
  }

};

</script>

<style scoped>
</style>