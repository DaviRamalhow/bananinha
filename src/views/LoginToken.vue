<template>
    <div class="flex justify-center items-center min-h-screen bg-indigo-500">
        <div class="flex-1 max-w-xl max-h-2xl p-16">

            <div class="grid grid-cols-1 grid-rows-1 gap-4 grid-flow-row-dense">

                <div class="p-4 pr-6 bg-white rounded-md shadow-2xl space-y-2">

                    <br>
                    <label for="email-adress"
                        class="text-lg font-semibold leading-6 text-2xl font-mono">Username</label>
                    <br>
                    <input id="email-adress" name="password" autocomplete="email" type="email" placeholder="Username"
                        v-model="login.username" required
                        class="mx-2 font-mono text-xl border border-solid border-gray-200 rounded-lg w-full focus:border-indigo-300">
                    <br>
                    <br>

                    <label for="password" class="text-lg font-semibold leading-6 text-2xl font-mono">Password</label>
                    <br>
                    <input id="password" name="password" type="password" autocomplete="current-password"
                        placeholder=" Password" v-model="login.password" required
                        class="mx-2 font-mono text-xl border border-solid border-gray-200 rounded-lg w-full focus:border-indigo-300">
                    <p v-if="errMsg">{{ errMsg }}</p>
                    <br>
                    <input type="checkbox" id="remember">
                    <label for="remember" class="text-gray-500 mx-1">Remember Me</label>
                    <br>

                    <ForgetPassword></ForgetPassword>
                    <br>
                    <br>
                    <button
                        class="bg-indigo-600 rounded-md px-4 py-1.5 text-2xl font-mono text-white hover:bg-indigo-400"
                        @click="banana()">Login</button>
                    <br>

                </div>


            </div>
        </div>
        <div v-if="batatinha == true" class="font-mono text-lg text-white">
            <li v-for="(valor, chave) in content01" :key="valor">
                {{ chave }} = {{ valor }}

            </li>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import utils, { Cookie } from "../utils/cookie";


const errMsg = ref("");

const login = {
    username: "",
    password: "",

};
const content01 = ref({
    // id: 0,
    // name: "",
    // email: "",
    // username: "",
    // permissions: []
});
const batatinha = ref(false);

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
    Cookie.set("token", content.token);

};
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

async function banana() {
    await OnLogin();
    await OnAuth();
    // Cookie.remove("token");
    batatinha.value = true;
}


</script>

<style scoped>
</style>