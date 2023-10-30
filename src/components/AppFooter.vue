<script setup>
import IconWa from './icons/IconWa.vue';
import IconTelegram from './icons/IconTelegram.vue';
import IconInstagram from './icons/IconInstagram.vue';

import data from '../data.js'
import { ref } from 'vue';
const menu = ref([
    'Home',
    'About Me',
    'Portfolio',
]);


function test() {
    console.log(data.waLink)
}

</script>

<template>
    <footer>

    </footer>
</template>