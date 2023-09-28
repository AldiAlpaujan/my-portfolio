<script setup>
import { ref } from 'vue';

const header = ref(null);
const menu = ref([
    'Home',
    'About Me',
    'Portfolio',
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
                        <h2 class="text-heading text-xl font-bold py-5">
                            Aldi <span class="text-primary">Alpaujan</span>
                        </h2>
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
                    <button class="py-[10px] px-[16px] my-2 text-primary border border-primary rounded-md
                    transition-all duration-500 hover:bg-primary hover:text-white
                    active:opacity-80 active:shadow-lg">
                        Hubungi Saya
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>
