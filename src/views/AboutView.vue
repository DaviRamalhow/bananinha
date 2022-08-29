<template>
  <div>

    <div class="flex justify-center items-center min-h-screen w-screen bg-indigo-500 position: absolute">

      <h1 class="text-7xl text-white font-montserrat">This is the Feed page <br> <br> You're Logged</h1>

      <ForgetPassword></ForgetPassword>

    </div>
    <div>

    </div>

  </div>

</template>

<script lang="ts" setup>
import { ref, Ref } from "vue";
import ForgetPassword from "../components/modalForgetPassword.vue";


const submited = false;
</script>

<style lang="scss" scoped>
</style>