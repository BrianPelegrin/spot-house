<template>
    <v-layout>
        <header>
            <TheNavbar />
        </header>
        <v-main lass="d-flex align-center justify-center">
            <RouterView />
        </v-main>
    </v-layout>
</template>

<script setup lang="ts">
import TheNavbar from '../components/TheNavbar.vue';
</script>

<style scoped>

</style>