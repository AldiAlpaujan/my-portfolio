<script setup>
import AppAlert from './AppAlert.Vue';

import axios from 'axios'
import { ref } from 'vue';

const scriptURL = 'https://script.google.com/macros/s/AKfycbwDJGGpHiFuOKuhREFHx_cE8UMb4dyfvUmi6TnCL7ELQvmNv_V1JKnr-6HLKKbh2laO/exec';
const isLoading = ref(false);
const showAlert = ref(false);
const nameError = ref(false);
const emailError = ref(false);
const messageError = ref(false);

const formInput = {
    username: ref(''),
    email: ref(''),
    message: ref(''),
};


async function onSubmit() {
    var valid = validation();
    if (valid) {
        try {
            isLoading.value = true;
            await axios.post(scriptURL, {
                nama: formInput.username.value,
                email: formInput.email.value,
                pesan: formInput.message.value,
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            isLoading.value = false;
            showAlert.value = true;
            setTimeout(() => {
                showAlert.value = false;
            }, 3000);
            clearForm();
        } catch (error) {
            isLoading.value = false;
            console.error('Error!', error.message)
        }
    }
}

function clearForm() {
    formInput.username.value = "";
    formInput.email.value = "";
    formInput.message.value = "";
}

function validation() {
    let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formInput.email.value);
    if (formInput.username.value.length < 1) nameError.value = true; else nameError.value = false;
    if (valid) emailError.value = false; else emailError.value = true;
    if (formInput.message.value.length < 1) messageError.value = true; else messageError.value = false;
    return !nameError.value && !emailError.value && !messageError.value;
}

</script>

<template>
    <section class="pt-36 pb-32">
        <div class="container">
            <div class="w-full">
                <div class="max-w-xl mx-auto text-center">
                    <h4 class="section-title">Hubungi Saya</h4>
                    <h2 class="section-subtitle mx-auto">Mari Jalin Relasi</h2>
                    <p class="section-text mb-8">
                        Mari berkarya dibidang teknologi bersama😊
                    </p>
                </div>
            </div>

            <form>
                <div class="px-4 w-full lg:w-2/3 lg:mx-auto">
                    <app-alert :show-alert="showAlert" />
                    <div class="w-full" :class="nameError ? 'mb-2' : ''">
                        <label for="username" class="contact-label-text">
                            Nama lengkap
                        </label>
                        <input id="username" type="text" placeholder="Masukan nama lengkap" class="contact-input"
                            :class="nameError ? 'border-red-500' : 'border-primary'" v-model="formInput.username.value">
                        <div class="text-xs pt-2 pl-4 text-red-500 transition-all duration-500"
                            :class="nameError ? 'opacity-100' : 'opacity-0'">
                            Nama lengkap harus diisi!
                        </div>
                    </div>
                    <div class="w-full" :class="emailError ? 'mb-2' : ''">
                        <label for="email" class="contact-label-text">
                            Email
                        </label>
                        <input id="email" type="email" placeholder="Masukan email" class="contact-input"
                            :class="emailError ? 'border-red-500' : 'border-primary'" v-model="formInput.email.value">
                        <div class="text-xs pt-2 pl-4 text-red-500 transition-all duration-500"
                            :class="emailError ? 'opacity-100' : 'opacity-0'">
                            Masukan email valid!
                        </div>
                    </div>
                    <div class="w-full">
                        <label for=" pesan" class="contact-label-text">
                            Pesan
                        </label>
                        <textarea id="pesan" type="text" rows="5" placeholder="Masukan pesan" class="contact-input"
                            :class="messageError ? 'border-red-500' : 'border-primary'"
                            v-model="formInput.message.value"></textarea>
                        <div class="text-xs pt-1 pl-4 text-red-500 transition-all duration-500"
                            :class="messageError ? 'opacity-100' : 'opacity-0'">
                            Tinggalkan pesan untuk saya
                        </div>
                    </div>
                </div>
            </form>
            <div class="w-full px-4 flex justify-center">
                <button type="submit" @click="onSubmit" class="button-style px-8 mt-4">
                    <div v-if="isLoading" class="flex justify-center items-center">
                        <svg aria-hidden="true" class="w-6 h-6 mr-2 animate-spin text-white text-opacity-50 fill-white"
                            viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor" />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill" />
                        </svg>
                        <span class="text-sm">Loading...</span>
                    </div>
                    <div v-else>Submit</div>
                </button>
            </div>
        </div>
    </section>
</template>
