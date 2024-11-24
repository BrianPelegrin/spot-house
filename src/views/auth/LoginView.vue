<template>
    
    <v-card max-width="600" class="mx-auto mt-10">
        <v-card-title class="text-h3 text-center text-brown-lighten-3">
            <div class="text-h3 mdi mdi-home" ></div>
            <div class="pt-2" style="font-family: 'Great Vibes'" >
                Spot House
            </div>
        </v-card-title>
        <v-card-subtitle class="text-center">
            Inicia Sesion con tu cuenta
        </v-card-subtitle>

        <v-card-text>
            <v-form @submit.prevent="submit">
                <v-container>
                    <v-alert 
                        v-if="auth.errorMessage" 
                        :text="auth.errorMessage" 
                        type="error" 
                        closable 
                        variant="tonal" 
                        class="mb-4" 
                    />
                    <v-text-field
                        v-model="email.value.value"
                        :error-messages="email.errorMessage.value"
                        :loading="false"                          
                        label="Correo Electronico"
                        variant="outlined" 
                        type="email"
                        class="mb-2"
                    />
                    <v-text-field
                        v-model="password.value.value"
                        :error-messages="password.errorMessage.value"
                        :loading="false"                         
                        label="Contraseña" 
                        variant="outlined" 
                        type="password"
                        class="mb-2"
                    />
                    <v-row>
                        <v-col>
                            <v-btn
                                type="submit"
                                class="bg-brown-lighten-3 text-white w-100 mb-4"
                            >
                                Iniciar Sesion
                                <template v-slot:loader>
                                    <span class="mx-2">Iniciando Sesion </span>
                                    <v-progress-circular :size="20"
                                        indeterminate
                                    ></v-progress-circular>
                                </template>
                            </v-btn>
                        </v-col>
                        <v-col>
                            <v-btn class="bg-brown-lighten-3 text-white w-100">
                                Registrate
                            </v-btn>
                        </v-col>
                    </v-row>
                    
                </v-container>
            </v-form>
        </v-card-text>        
    </v-card>
</template>

<script setup lang="ts">
import { useField, useForm } from "vee-validate"
import loginSchema from "../../validations/loginSchema";
import { IAuthCredentials } from "../../interfaces/authentication";
import authStore from "../../stores/auth";

const auth = authStore();
const { handleSubmit } = useForm<IAuthCredentials>({
    validationSchema:loginSchema
});

const email = useField<string>('email');
const password = useField<string>('password');

const submit = handleSubmit((values) => {
    auth.login(values);
    console.log(values)
})

</script>

<style scoped>

</style>