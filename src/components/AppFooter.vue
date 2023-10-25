<script setup>
import { ref } from 'vue';
const menu = ref([
    'Home',
    'About Me',
    'Portfolio',
]);

</script>

<template>
    <footer class="pt-24 pb-12 bg-bgShade">
        <div class="container">
            <div class="">
                <div class="px-4">
                    <a href="" class="">
                        <h2 class="text-heading text-xl font-bold pb-8">
                            Aldi <span class="text-primary">Alpaujan</span>
                        </h2>
                    </a>
                </div>
                <div class="px-4">
                    <ul>
                        <li v-for="(item, index) in menu" :key="index" class="mb-4">
                            <a href="#">{{ item }}</a>
                        </li>
                    </ul>
                </div>
                <div class="px-4">
                </div>
            </div>
        </div>
    </footer>
</template>