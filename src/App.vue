<script setup>
import AppHeader from './components/AppHeader.vue'
import AppHome from './components/AppHome.vue'
import AppAbout from './components/AppAboutMe.vue';
import AppPortfolio from './components/AppPortfolio.vue';
import AppContactMe from './components/AppContactMe.vue';
import AppFooter from './components/AppFooter.vue';
import "aos/dist/aos.css";
import AOS from "aos";
import { onMounted } from 'vue';

function onMenuHeaderClick(menu) {
  document.getElementById(menu).scrollIntoView({ behavior: 'smooth' });
}

onMounted(() => {
  AOS.init();
})
</script>

<template>
  <app-header @on-menu-header-click="onMenuHeaderClick" />
  <app-home id="Home" />
  <app-about id="About Me" />
  <app-portfolio id="Portfolio" />
  <app-contact-me id="Contact Me" />
  <app-footer />
</template>