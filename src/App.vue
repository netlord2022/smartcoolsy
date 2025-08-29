<template>
  <div class="w-full">
    <HeaderComponent /> <!-- Your navigation -->
    <router-view />     <!-- Page content changes here -->
    <FooterComponent /> <!-- Your footer -->
  </div>
</template>

<script setup>
import HeaderComponent from './components/Header.vue'
import FooterComponent from './components/Footer.vue'
</script>