<script setup>
import data from '../data.js'

function contactMe() {
    document.getElementById("Contact Me").scrollIntoView({ behavior: 'smooth' });
}

</script>

<template>
    <section class="pt-36 pb-32 bg-bgShade ">
        <div class="container">
            <div class="flex flex-wrap items-center">
                <div class="w-full px-4 lg:w-1/2">
                    <h3 data-aos="fade-right" :data-aos-duration="400" class="little-text-section">
                        Hallo, saya Aldi 👋
                    </h3>
                    <h2 data-aos="fade-right" :data-aos-duration="800"
                        class="font-bold text-3xl mb-3 max-w-sm md:text-4xl md:max-w-md xl:text-5xl xl:max-w-full">
                        Saya seorang <span class="text-primary">Mobile Developer</span>
                    </h2>
                    <p data-aos="fade-right" :data-aos-duration="1200"
                        class="text-body text-base mb-8 max-w-full md:text-lg md:max-w-md  xl:text-xl xl:max-w-lg">
                        Berkarya dengan Flutter. Transformasi Ide menjadi Aplikasi yang Menakjubkan😊.
                    </p>
                    <div>
                        <button @click="downloadCv" data-aos="fade-right" :data-aos-duration="1600" class="button-style">
                            <a :href="data.cvLink" target="_blank">Download
                                CV </a>
                        </button>
                        <button @click="contactMe" data-aos="fade-right" :data-aos-duration="2000"
                            class="button-outline-style lg:hidden">
                            Hubungi Saya
                        </button>
                    </div>
                </div>
                <div data-aos="fade-left" :data-aos-duration="1500" class="w-full px-4 self-end lg:w-1/2">
                    <img src="../assets/img/home.svg" alt="img" class="mt-16 w-full lg:mt-0">
                </div>
            </div>
        </div>
    </section>
</template>