<template>
    <v-layout>
        <header>
            <v-app-bar class="bg-brown-lighten-3 text-white">
                <template v-slot:prepend>
                    <div  class="text-h4 text-white d-flex align-center" style="text-decoration: none;" >
                        <div class="text-h3 mdi mdi-home" ></div>
                        <div class="pt-2" style="font-family: 'Great Vibes'" >
                            Spot House
                        </div>
                    </div>
                </template>                 
            </v-app-bar>
        </header>
        <v-main>
            <v-container>
                <RouterView />
            </v-container>
        </v-main>

    </v-layout>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>