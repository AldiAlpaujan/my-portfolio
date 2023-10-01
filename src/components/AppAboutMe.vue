<script setup>
import IconInstagram from './icons/IconInstagram.vue';
import IconGithub from './icons/IconGithub.vue';
import IconLinkedin from './icons/IconLinkedin.vue';
import IconTelegram from './icons/IconTelegram.vue';
import IconWa from './icons/IconWa.vue'

</script>

<template>
    <section class="pt-28 pb-32">
        <div class="container">
            <div class="flex flex-wrap items-center">
                <div class="w-full px-4 self-start md:w-1/2 lg:w-1/3 lg:relative">
                    <img src="../assets/img/aboutme.svg" alt="" class="mb-12 md:mb-0">
                    <!-- <img src="../assets/img/aboutme.png" alt=""
                        class="bg-transparent w-full mb-12 md:mb-0 lg:absolute lg:scale-105"> -->
                </div>
                <div class="w-full px-4 md:w-1/2 lg:ml-20">
                    <h4 class="font-bold uppercase text-primary text-lg mb-3 lg:text-xl">
                        Tentang Saya
                    </h4>
                    <h2 class="font-bold text-heading text-3xl max-w-sm mb-4 lg:text-4xl ">
                        Mari, bangun aplikasi bersama saya!
                    </h2>
                    <p class="font-medium text-base text-body mb-8 lg:text-lg">
                        Hallo Semua👋, Perkenalakan saya Aldi Muhamad Alpaujan Saya adalah seorang Flutter developer dengan
                        semangat besar untuk mengembangkan aplikasi mobile yang menarik. Dengan pengalaman
                        selama 1 tahun dalam membangun aplikasi menggunakan Flutter, saya telah bekerja pada berbagai proyek
                        yang melibatkan UI yang elegan, fungsionalitas yang kuat.
                    </p>
                    <h4 class="font-bold  text-heading text-2xl mb-3 lg:text-3xl">
                        Mari Berteman dan Berkolaborasi!
                    </h4>
                    <p class="font-medium text-base text-body mb-4 lg:text-lg">
                        Saya sangat antusias untuk berkolaborasi dengan individu dan tim yang memiliki visi untuk
                        menciptakan aplikasi yang luar biasa. Jika Anda memiliki proyek yang ingin dibangun menggunakan
                        Flutter atau ingin berbicara lebih lanjut tentang kemungkinan kerja sama, saya akan sangat senang
                        mendengarnya. Jangan ragu untuk menghubungi saya!
                    </p>
                    <div class="flex items-center">
                        <a href="https://www.instagram.com/AldiAlpaujan/" target="_blank" class="social-icon">
                            <IconInstagram />
                        </a>
                        <a href="https://wa.me/+62895412744493" target="_blank" class="social-icon">
                            <IconWa />
                        </a>
                        <a href="https://t.me/ProyekAldi" target="_blank" class="social-icon">
                            <IconTelegram />
                        </a>
                        <a href="https://github.com/AldiAlpaujan" target="_blank" class="social-icon">
                            <IconGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/aldi-m-alpaujan-a265b426a/" target="_blank"
                            class="social-icon">
                            <IconLinkedin />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>