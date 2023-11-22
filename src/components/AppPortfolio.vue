<script setup>
import data from '../data';
</script>

<template>
    <section class="pt-36 pb-32 bg-bgShade">
        <div class="container">
            <div class="px-4 flex flex-col items-center justify-center text-center">
                <div class="max-w-md flex flex-col items-center mb-4">
                    <h4 class="section-title">Portfolio</h4>
                    <h2 class="section-subtitle ">Hasil Kerja Saya</h2>
                    <p class="section-text mb-8">
                        Lihat hasil karya saya di bawah ini, menarik bukan?😁
                    </p>
                </div>
                <div class="flex flex-wrap gap-8 items-center justify-center ">
                    <div v-for="(item, index) in  data.portfolios" :key="index" data-aos="fade-up"
                        :data-aos-duration="400 * (index + 1)"
                        class="bg-white h-80 rounded-md shadow-lg sm:w-1/2 md:w-1/3 xl:w-1/4 group">
                        <div class="rounded-t-md overflow-hidden">
                            <img :src="item.img" alt="project" class="w-full shadow-none transition group-hover:scale-110">
                        </div>
                        <div class="p-4 text-start">
                            <h3 class="font-semibold text-lg text-heading pb-2">
                                {{ item.name }}
                            </h3>
                            <p class="font-medium text-base text-body">
                                {{ item.caption }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>