<script setup>
import IconInstagram from './icons/IconInstagram.vue';
import IconGithub from './icons/IconGithub.vue';
import IconLinkedin from './icons/IconLinkedin.vue';
import IconTelegram from './icons/IconTelegram.vue';
import IconWa from './icons/IconWa.vue'
import data from '../data';

</script>

<template>
    <section class="pt-28 pb-32">
        <div class="container">
            <div class="flex flex-wrap items-center">
                <div class="w-full px-4 self-start md:w-1/2">
                    <h4 data-aos="fade-up" data-aos-duration="1200" class="section-title">
                        Tentang Saya
                    </h4>
                    <h2 data-aos="fade-up" data-aos-duration="1400" class="section-subtitle">
                        Mari, bangun aplikasi bersama saya!
                    </h2>
                    <p data-aos="fade-up" data-aos-duration="1600" class="section-text mb-8">
                        Hallo Semua👋, Perkenalakan saya Aldi Muhamad Alpaujan Saya adalah seorang Flutter developer dengan
                        semangat besar untuk mengembangkan aplikasi mobile yang menarik. Dengan pengalaman
                        selama 1 tahun dalam membangun aplikasi menggunakan Flutter, saya telah bekerja pada berbagai proyek
                        yang melibatkan UI yang elegan, fungsionalitas yang kuat.
                    </p>
                </div>
                <div class="w-full px-4 md:w-1/2">
                    <h4 data-aos="fade-up" data-aos-duration="1800"
                        class="font-bold  text-heading text-2xl mb-3 lg:text-3xl">
                        Mari Berteman dan Berkolaborasi!
                    </h4>
                    <p data-aos="fade-up" data-aos-duration="2000" class="font-medium text-base text-body mb-4 lg:text-lg">
                        Saya sangat antusias untuk berkolaborasi dengan individu dan tim yang memiliki visi untuk
                        menciptakan aplikasi yang luar biasa. Jika Anda memiliki proyek yang ingin dibangun menggunakan
                        Flutter atau ingin berbicara lebih lanjut tentang kemungkinan kerja sama, saya akan sangat senang
                        mendengarnya. Jangan ragu untuk menghubungi saya!
                    </p>
                    <div class="flex items-center">
                        <a data-aos="fade-up" data-aos-duration="2000" :href="data.igLink" target="_blank"
                            class="social-icon">
                            <IconInstagram />
                        </a>
                        <a data-aos="fade-up" data-aos-duration="2100" :href="data.waLink" target="_blank"
                            class="social-icon">
                            <IconWa />
                        </a>
                        <a data-aos="fade-up" data-aos-duration="2200" :href="data.teleLink" target="_blank"
                            class="social-icon">
                            <IconTelegram />
                        </a>
                        <a data-aos="fade-up" data-aos-duration="2300" :href="data.githubLink" target="_blank"
                            class="social-icon">
                            <IconGithub />
                        </a>
                        <a data-aos="fade-up" data-aos-duration="2400" :href="data.linkedinLink" target="_blank"
                            class="social-icon">
                            <IconLinkedin />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>