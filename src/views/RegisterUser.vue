<template>
    <div class="flex justify-center items-center min-h-screen bg-indigo-500">
        <div class="font-mono text-5xl font-semibold text-white">Register <br> Account</div>

        <div class="flex-1 max-w-xl max-h-2xl p-16">

            <div class="grid grid-cols-1 grid-rows-1 gap-4 grid-flow-row-dense">

                <div class="p-4 pr-6 bg-white rounded-md shadow-2xl space-y-2">

                    <br>
                    <label class="text-lg font-semibold leading-6 text-2xl font-mono">Name</label>
                    <br>
                    <input type="name" placeholder=" Name"
                        class="mx-2 font-mono text-xl border border-solid border-gray-200 rounded-lg w-full focus:border-indigo-300">
                    <br>
                    <br>
                    <br>

                    <label class="text-lg font-semibold leading-6 text-2xl font-mono">E-mail</label>
                    <br>
                    <input type="e-mail" placeholder=" E-mail"
                        class="mx-2 font-mono text-xl border border-solid border-gray-200 rounded-lg w-full focus:border-indigo-300"
                        v-model="email">
                    <br>
                    <br>
                    <br>
                    <label class="text-lg font-semibold leading-6 text-2xl font-mono">Password</label>
                    <br>
                    <input type="password" placeholder=" Password"
                        class="mx-2 font-mono text-xl border border-solid border-gray-200 rounded-lg w-full focus:border-indigo-300"
                        v-model="password">
                    <br>
                    <br>
                    <br>
                    <label class="text-lg font-semibold leading-6 text-2xl font-mono">Confirm Password</label>
                    <br>
                    <input type="password" placeholder=" Password"
                        class="mx-2 font-mono text-xl border border-solid border-gray-200 rounded-lg w-full focus:border-indigo-300">
                    <br>
                    <br>
                    <br>
                    <button
                        class="bg-indigo-600 rounded-md px-4 py-1.5 text-2xl font-sans text-white hover:bg-indigo-400"
                        @click="register">Register</button>
                    <br>
                    <button
                        class="bg-indigo-600 rounded-md px-4 py-1.5 text-2xl font-sans text-white hover:bg-indigo-400"
                        @click="signInWithGoogle">
                        Sign In With Google
                    </button>

                </div>


            </div>
        </div>


    </div>
</template> 

<script setup lang="ts">
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, } from "firebase/auth";
import { useRouter } from "vue-router";
const email = ref("");
const password = ref("");
const router = useRouter();

const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
            console.log("Succesfully registered!");
            router.push("/about");
        })
        .catch((error) => {
            console.log(error.code);
            alert(error.message);
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

</script>

<style>
</style>