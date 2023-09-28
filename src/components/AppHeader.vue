<script setup>
import { ref } from 'vue';

const header = ref(null);
const menu = ref([
    'Home',
    'Portfolio',
    'About Me',
    'Testimonials',
]);
const menuActive = ref('Home');
const menuIsActive = ref(false);

function onMenuClick(menu) {
    menuActive.value = menu;
    menuIsActive.value = false;
}

function onHamburgerClick() {
    var value = menuIsActive.value;
    menuIsActive.value = !value;
}

</script>

<template>
    <header ref="header" class="bg-white fixed top-0 left-0 w-full flex items-center z-10 shadow-lg">
        <div class="container">
            <div class="flex items-center justify-between relative">
                <div class="px-4">
                    <a href="" class="">
                        <img src="../assets/img/Logo.png" alt="logo" class="w-32 py-5">
                    </a>
                </div>
                <div class="flex items-center px-4">
                    <button @click="onHamburgerClick" :class="menuIsActive ? 'hamburger-active' : ''"
                        class="block absolute right-4 lg:hidden">
                        <span class="hamburger-line origin-top-left transition-all duration-500"></span>
                        <span class="hamburger-line origin-left transition-all duration-500"></span>
                        <span class="hamburger-line origin-bottom-left transition-all duration-500"></span>
                    </button>
                    <nav :class="menuIsActive ? 'block' : 'hidden'" class="absolute bg-white py-4 px-5 w-[250px] top-full right-4 rounded-md shadow-md 
                        lg:block lg:static lg:bg-white lg:w-full lg:shadow-none lg:px-0 ">
                        <ul class="block lg:flex ">
                            <li v-for="(item, index) in menu" :key="index"
                                :class="index == (menu.length - 1) ? 'lg:mr-0' : ''" class="menu-style">
                                <a href="#" @click="onMenuClick(item)" :class="item == menuActive ? 'text-primary' : ''"
                                    class="transition-all duration-500">
                                    {{ item }}
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="hidden px-4 lg:block">
                    <button class="py-[12px] px-[14px] text-primary border border-primary rounded-md
                    transition-all duration-500 hover:bg-primary hover:text-white
                    active:opacity-80 active:shadow-lg">
                        Contact Me
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>
