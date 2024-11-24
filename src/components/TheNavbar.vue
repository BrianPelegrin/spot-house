<template>
    <v-app-bar class="bg-brown-lighten-3 text-white"  elevation="3" >
        <template v-slot:prepend>
            <router-link :to="{name:'home'}"  class="text-h4 text-white d-flex align-center" style="text-decoration: none;" >
                <div class="text-h3 mdi mdi-home" ></div>
                <div class="pt-2" style="font-family: 'Great Vibes'" >
                    Spot House
                </div>
            </router-link>
        </template> 
        <template v-slot:append>
            <div class="d-flex ga-2">
                <v-btn variant="outlined" :to="{name:'home'}">
                Inicio
            </v-btn>
            <v-btn variant="outlined" :to="{name:'login'}">
                Iniciar Sesion
            </v-btn>
            </div>
        </template>       
    </v-app-bar>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>