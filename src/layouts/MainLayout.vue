<template>
  <div class="text-center bg-black">
    <nav>
      <router-link to="/" class="text-xl font-montserrat font-regular px-2 py-1 rounded-md m-1 text-white font-light">
        Home
      </router-link>

      <router-link to="/LoginToken" class="text-xl font-montserrat px-2 py-1 rounded-md m-1 text-white font-light">
        LoginToken
      </router-link>

      <router-link to="/AccountPage" class="text-xl font-montserrat font-light px-2 py-1 rounded-md m-1 text-white">
        AccountPage
      </router-link>
      <router-link to="/users" class="text-xl font-montserrat font-light px-2 py-1 rounded-md m-1 text-white">
        Users
      </router-link>
      <router-link to="/test" class="text-xl font-montserrat font-light px-2 py-1 rounded-md m-1 text-white">
        Test
      </router-link>

    </nav>
    <router-view />
  </div>
</template>
    
<script lang="ts" setup>
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