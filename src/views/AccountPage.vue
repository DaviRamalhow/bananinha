<template>
    <div>
        <button @click="batatinha = true">Click here</button>
        <div v-if="batatinha == true" class="font-mono text-lg text-black">
            <li v-for="(valor, chave) in content01" :key="valor">
                {{ chave }} = {{ valor }}

            </li>
        </div>

    </div>
</template>

<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import utils, { Cookie } from "../utils/cookie";
import { ref } from "vue";
const batatinha = ref(false);

const content01 = ref({
    // id: 0,
    // name: "",
    // email: "",
    // username: "",
    // permissions: []
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
        content01.value = await rawResponse.json();

        console.log(content01);
    }

};
OnAuth();
</script>

<style scoped>
</style>