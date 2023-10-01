<script setup>

</script>

<template>
    <section class="pt-36 pb-32">
        <div class="container">
            <div class="w-full">
                <div class="max-w-xl mx-auto text-center">
                    <h4 class="section-title">Hubungi Saya</h4>
                    <h2 class="section-subtitle mx-auto">Mari Jalin Relasi</h2>
                    <p class="section-text">
                        Mari berkarya dibidang teknologi bersama😊
                    </p>
                </div>
            </div>
            <form>
                <div class="px-4 w-full lg:w-2/3 lg:mx-auto">
                    <div class="w-full mb-4">
                        <label for="name" class="contact-label-text">
                            Nama lengkap
                        </label>
                        <input id="name" type="text" placeholder="Masukan nama lengkap" class="contact-input">
                    </div>
                    <div class="w-full mb-4">
                        <label for="email" class="contact-label-text">
                            Email
                        </label>
                        <input id="email" type="email" placeholder="Masukan email" class="contact-input">
                    </div>
                    <div class="w-full mb-4">
                        <label for="pesan" class="contact-label-text">
                            Pesan
                        </label>
                        <textarea id="pesan" type="text" rows="5" placeholder="Masukan pesan"
                            class="contact-input"></textarea>
                    </div>
                </div>
            </form>
            <div class="w-full px-4 flex justify-center">
                <button class="button-style px-8 mt-4">
                    Submit
                </button>
            </div>
        </div>
    </section>
</template>