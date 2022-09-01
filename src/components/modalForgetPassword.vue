<template>
    <div class="flex flex-col items-center ">
        <button @click="isShowing = !isShowing" class="text-gray-400 hover:text-gray-200">
            Forget Your Password?
        </button>
        <div>
            <TransitionRoot appear :show="isShowing" as="template" enter="transform transition duration-[600ms]"
                enter-from="opacity-0 rotate-[-120deg] scale-50" enter-to="opacity-100 rotate-0 scale-100"
                leave="transform duration-200 transition ease-in-out" leave-from="opacity-100 rotate-0 scale-100 "
                leave-to="opacity-0 scale-95 ">
                <div class=" flex justify-center items-center  w-96 h-96 z-50">
                    <div class="flex-1">
                        <div class="grid grid-cols-1 grid-rows-1 grid-flow-row-dense opacity-100">

                            <div
                                class="p-4 pr-6 bg-white rounded-md shadow-2xl space-y-2 drop-shadow-2xl border-2 border-solid border-indigo-00">
                                <br>
                                <br>
                                <label for="email-adress" class="text-lg font-semibold leading-6 text-2xl font-mono">
                                    Confirm your E-mail</label>
                                <br>
                                <p class="text-md text-gray-400">We'll send you an email with ur new password</p>
                                <input id="email-adress" name="password" autocomplete="email" type="email"
                                    placeholder=" E-mail" v-model="email" required
                                    class="mx-2 font-mono text-xl border border-solid border-gray-300 rounded-lg w-full focus:border-indigo-300">
                                <br>
                                <br>
                                <button
                                    class="bg-indigo-600 rounded-md px-4 py-1.5 text-2xl font-mono text-white hover:bg-indigo-400"
                                    @click="isShowing = !isShowing">Confirm</button>
                                <br>

                                <br>
                            </div>

                        </div>
                    </div>
                </div>
            </TransitionRoot>
        </div>

    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { TransitionRoot } from "@headlessui/vue";

const isShowing = ref(false);
const email = ref("");
// function resetIsShowing() {
//   isShowing.value = false;

//   setTimeout(() => {
//     isShowing.value = true;
//   }, 500);
// }
</script>

<style lang="scss" scoped>
</style>