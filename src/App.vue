<template>
  <div>
    <router-view />

  </div>

</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { Cookie } from "./utils";

onMounted(() => {
  Cookie.remove("token");
});
</script>

<style lang="scss">
</style>