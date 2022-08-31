<template>
    <div class="flex justify-center items-center min-h-screen bg-indigo-500">
        <div class="font-mono text-5xl font-semibold text-white">Login <br> Account</div>

        <div class="flex-1 max-w-xl max-h-2xl p-16">

            <div class="grid grid-cols-1 grid-rows-1 gap-4 grid-flow-row-dense">

                <div class="p-4 pr-6 bg-white rounded-md shadow-2xl space-y-2">

                    <br>
                    <label for="email-adress" class="text-lg font-semibold leading-6 text-2xl font-mono">E-mail</label>
                    <br>
                    <input id="email-adress" name="password" autocomplete="email" type="email" placeholder=" E-mail"
                        v-model="email" required
                        class="mx-2 font-mono text-xl border border-solid border-gray-200 rounded-lg w-full focus:border-indigo-300">
                    <br>
                    <br>

                    <label for="password" class="text-lg font-semibold leading-6 text-2xl font-mono">Password</label>
                    <br>
                    <input id="password" name="password" type="password" autocomplete="current-password"
                        placeholder=" Password" v-model="password" required
                        class="mx-2 font-mono text-xl border border-solid border-gray-200 rounded-lg w-full focus:border-indigo-300">
                    <p v-if="errMsg">{{  errMsg  }}</p>
                    <br>
                    <input type="checkbox" id="remember" class="accent-pink-500">
                    <label for="remember" class="text-gray-500 mx-1">Remember Me</label>
                    <br>

                    <ForgetPassword></ForgetPassword>
                    <br>
                    <br>
                    <button
                        class=" bg-indigo-600 rounded-md px-4 py-1.5 text-2xl font-mono text-white hover:bg-indigo-400"
                        @click="login, OnAuth">Login</button>
                    <br>
                    <button
                        class="bg-indigo-600 rounded-md px-4 py-1.5 text-2xl font-sans text-white hover:bg-indigo-400"
                        @click="signInWithGoogle">
                        Login With Google
                    </button>
                    <br>
                    <br>
                </div>


            </div>
        </div>


    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from "vue";
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useRouter } from "vue-router";
import utils, { Cookie } from "../utils/cookie";
const email = ref("");
const password = ref("");
const errMsg = ref("");
const router = useRouter();

const login = () => {
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
            console.log("Succesfully Logged!");
            router.push("/about");
        })
        .catch((error) => {
            console.log(error.code);
            switch (error.code) {
                case "auth/invalidemail":
                    errMsg.value = "Invalid email";
                    break;
                case "auth/user-not-found":
                    errMsg.value = "No account with that email was found";
                    break;
                case "auth/wrong-password":
                    errMsg.value = "Incorrect password";
                    break;
                default:
                    errMsg.value = "Email or password was incorrect";
                    break;
            }

        });
};
const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
        .then((result) => {
            console.log("result.user");
            router.push("/about");
        });

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
        const content = await rawResponse.json();

        console.log(content);
    }

};

</script>

<style>
</style>