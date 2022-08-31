<script setup>
    import { ref } from 'vue'
    import Sidebar from './components/Sidebar.vue';
    
</script>

<template>
    <div class="flex">
        <Sidebar/>
        <div class="flex-initial w-full p-7">
            <router-view></router-view>
        </div>
    </div>
</template>

<style scoped>

</style>
