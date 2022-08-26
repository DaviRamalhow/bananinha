<template>
    <div class="flex justify-center items-center bg-slate-900 bg-opacity-80 w-screen h-screen z-50 position: absolute">
        <div class="flex-1 max-w-xl p-16">
            <div class="grid grid-cols-1 grid-rows-1 gap-4 grid-flow-row-dense opacity-100">

                <div class="p-4 pr-6 bg-white rounded-md shadow-2xl space-y-2">
                    <br>
                    <br>
                    <label for="email-adress" class="text-lg font-semibold leading-6 text-2xl font-mono">
                        Confirm your E-mail</label>
                    <br>
                    <input id="email-adress" name="password" autocomplete="email" type="email" placeholder=" E-mail"
                        v-model="email" required
                        class="mx-2 font-mono text-xl border border-solid border-gray-300 rounded-lg w-full focus:border-indigo-300">
                    <br>
                    <br>
                    <button
                        class="bg-indigo-600 rounded-md px-4 py-1.5 text-2xl font-mono text-white hover:bg-indigo-400"
                        @click="login">Confirm</button>
                    <br>

                    <br>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const login = ref();
const email = ref("");


</script>

<style scoped>
</style>