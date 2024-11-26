<template>
    <div>
        <Navbar />
        <div class="py-10">
            <router-view />
        </div>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'
</script>