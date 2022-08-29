<template>
    <div class="flex justify-center items-center z-50 position: absolute">
        <button v-if="submited == false" @click="submited = true" class="text-gray-400 hover:text-gray-200">
            Forget Your Password?
        </button>
        <div class=" flex justify-center items-center bg-slate-900 bg-opacity-80 w-screen h-screen z-50 position:
            absolute" v-if="submited == true">
            <div class="flex-1 max-w-xl p-16">
                <div class="grid grid-cols-1 grid-rows-1 gap-4 grid-flow-row-dense opacity-100">

                    <div class="p-4 pr-6 bg-white rounded-md shadow-2xl space-y-2">
                        <br>
                        <br>
                        <label for="email-adress" class="text-lg font-semibold leading-6 text-2xl font-mono">
                            Confirm your E-mail</label>
                        <br>
                        <p class="text-md text-gray-400">We'll send you an email with ur new password</p>
                        <input id="email-adress" name="password" autocomplete="email" type="email" placeholder=" E-mail"
                            v-model="email" required
                            class="mx-2 font-mono text-xl border border-solid border-gray-300 rounded-lg w-full focus:border-indigo-300">
                        <br>
                        <br>
                        <button
                            class="bg-indigo-600 rounded-md px-4 py-1.5 text-2xl font-mono text-white hover:bg-indigo-400"
                            @click="submited = false">Confirm</button>
                        <br>

                        <br>
                    </div>

                </div>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import { ref, toRefs } from "vue";
import { Email } from "../utils/types";

const submited = ref(false);
const email = ref("");
</script>

<style scoped>
</style>