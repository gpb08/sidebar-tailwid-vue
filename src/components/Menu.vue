<script setup>
    import { ref } from 'vue'

    defineProps({
        open: Boolean,
        search: String,
    })

    const menus = ref([
        {
            title: "Home",
            icon: "mdi mdi-home",
            link: "/"
        },
        {
            title: "Menu",
            icon: "mdi mdi-file",
            subMenu: true,
            subMenuOpen: false,
            subMenuItems: [
                {
                    title: "Submenu 1",
                    link: "/page"
                },
                {
                    title: "Submenu 2",
                    link: "/page-two"
                }
            ]
        },
    ])
</script>

<template>
    <ul class="pt-2">
        <li :class="[menu.spacing && 'mt-9']" v-for="(menu, index) in menus" :key="index">
            <router-link 
                v-if="!menu.subMenu"
                :to="menu.link ? menu.link : '/'"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-sky-800 dark:hover:bg-sky-800"
            >
                <i 
                    class="mdi mdi-24px w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    :class="menu.icon"
                ></i>
                <span :class="['ml-3', !open && 'hidden']">{{ menu.title }}</span>
            </router-link>
            <button 
                v-else 
                type="button" 
                class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-sky-800 dark:text-white dark:hover:bg-sky-800" 
                aria-controls="dropdown-example" 
                data-collapse-toggle="dropdown-example"
            >
                <i 
                    class="mdi mdi-24px w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    :class="menu.icon"
                ></i>
                <span class="flex-1 ml-3 text-left whitespace-nowrap" :class="[!open && 'hidden']" sidebar-toggle-item>{{ menu.title }}</span>
                <svg 
                    sidebar-toggle-item class="w-6 h-6" 
                    fill="currentColor" 
                    viewBox="0 0 20 20" 
                    xmlns="http://www.w3.org/2000/svg"
                    :class="['duration-300', menu.subMenuOpen && 'rotate-180']"
                    v-if="menu.subMenu && open" @click="menu.subMenuOpen = !menu.subMenuOpen"
                >
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
            </button>
            <ul v-if="menu.subMenu && menu.subMenuOpen && open" id="dropdown-example" :class="['py-2 space-y-2', !menu.subMenuOpen && 'hidden']">
                <li v-for="(submenuItem, sindex) in menu.subMenuItems" :key="sindex">
                    <router-link 
                        :to="submenuItem.link ? submenuItem.link : '/'"
                        class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-sky-800 dark:text-white dark:hover:bg-sky-800"
                    >
                        {{ submenuItem.title }}
                    </router-link>
                </li>
            </ul>
        </li>
        <!-- tutorial code -->
        <!-- <li
            :class="['text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-sky-800 rounded-md', menu.spacing ? 'mt-9' : 'mt-2']"
            v-for="(menu, index) in menus" :key="index"
        >
            <span class="text-2xl block float-left">
            <i class="mdi mdi-view-dashboard"></i>
            </span>
            <span 
            :class="['text-base font-medium flex-1 duration-200', !open && 'hidden']"
            >
            {{ menu.title }}
            </span>
            <ul class="" v-if="menu.subMenu && menu.subMenuOpen && open">
            <li class="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-sky-800 rounded-md" v-for="(submenuItem, sindex) in menu.subMenuItems" :key="sindex">
                {{ submenuItem.title }}
            </li>
            </ul>
            <i :class="['mdi mdi-chevron-down duration-300', menu.subMenuOpen && 'rotate-180']" v-if="menu.subMenu && open" @click="menu.subMenuOpen = !menu.subMenuOpen"></i>
        </li> -->
        <!-- end -->
    </ul>
</template>

<style scoped>

</style>
