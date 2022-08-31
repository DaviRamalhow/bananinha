<template>
  <div>

    <div class="flex justify-center items-center min-h-screen w-screen bg-indigo-500 position: absolute z-10">

      <!-- <h1 class="text-7xl text-white font-montserrat z-10">This is the Feed page <br> <br> You're Logged</h1> -->

      <ForgetPassword class="z-50"></ForgetPassword>
      <button>Token</button>
    </div>
    <div>

    </div>

  </div>

</template>

<script lang="ts" setup>

import { ref } from "vue";
import ForgetPassword from "../components/modalForgetPassword.vue";
import api from "../services/API";
const login = {
  username: "test01",
  password: "test01",

};


const token = ref({});



const doPost = () => {
  api.post("/login", login)
    .then(response => {
      login.password = "";
      login.username = "";
      console.log(response);
      token.value = response.data;
      console.log(token);
    })
    .catch((err) => {
      console.log(err);
    });

};

const printData = () => {
  api("/")
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

doPost();
printData();
</script>

<style lang="scss" scoped>
</style>