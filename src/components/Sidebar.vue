<script setup>
import { ref } from 'vue'
import Menu from './Menu.vue';

const open = ref(true)

function setOpen(status) {
    open.value = status
}
</script>

<template>
    <div :class="['bg-sky-900 h-screen p-5 pt-8 duration-300 relative', open ? 'w-72' : 'w-20']">
            <i 
                :class="['mdi mdi-arrow-left bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer', !open && 'rotate-180']"
                @click="setOpen(!open)"
            ></i>
            <div class="inline-flex">
                <i :class="['mdi mdi-map-marker bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-500', open && 'rotate-[360deg]']"></i>
                <h1 :class="['text-white origin-left font-medium text-2xl duration-300', !open && 'scale-0']">
                    Tailwind
                </h1>
            </div>
            <div 
                :class="['flex items-center rounded-md bg-sky-800 mt-6 py-2', !open ? 'px-2.5' : 'px-4']"
            >
                <i 
                    :class="['mdi mdi-magnify text-white text-lg block float-left cursor-pointer', open && 'mr-2']"
                ></i>
                <input 
                    type="search" 
                    placeholder="Search" 
                    :class="['text-base bg-transparent w-full text-white focus:outline-none', !open && 'hidden']"
                >
            </div>
            <Menu :open="open"/>
        </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
