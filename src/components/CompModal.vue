<template>
    <div class="flex flex-col items-center absolute">

        <div>
            <TransitionRoot appear :show="isShowing" as="template" enter="transform transition duration-[600ms]"
                enter-from="opacity-0 rotate-[-120deg] scale-50" enter-to="opacity-100 rotate-0 scale-100"
                leave="transform duration-200 transition ease-in-out" leave-from="opacity-100 rotate-0 scale-100 "
                leave-to="opacity-0 scale-95">
                <div class=" flex justify-center items-center  w-96 h-96 z-50">
                    <div class="flex-1">
                        <div class="grid grid-cols-1 grid-rows-1 grid-flow-row-dense opacity-100">

                            <div
                                class="p-4 pr-6 bg-white rounded-md shadow-2xl space-y-2 drop-shadow-2xl border-2 border-solid border-indigo-00">
                                <slot></slot>
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

<script setup lang="ts">
import { ref } from "vue";
import { TransitionRoot } from "@headlessui/vue";

const isShowing = ref(true);
</script>

<style scoped>
</style>