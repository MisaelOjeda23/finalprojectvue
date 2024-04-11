<template>
    <div class="flex items-center min-h-screen p-6 bg-white-m dark:bg-dark-m">
        <div class="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white-m rounded-lg shadow-xl dark:bg-gray-800">
            <div class="flex flex-col overflow-y-auto md:flex-row">
                <div class="h-32 md:h-auto md:w-1/2 relative">
                    <img aria-hidden="true" class="object-cover w-full h-full dark:block bg-black opacity-60"
                        src="/img/picture-login.webp" alt="Office" />

                    <div class="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center ">
                        <h2 class="font-bold text-3xl pb-11 px-5 text-white">Empezar un nuevo dia es algo espectacular
                        </h2>
                        <p class="font-semibold text-2xl px-5 text-white">No dejes lo que puedes hacer hoy, porque el
                            mañana
                            no puede estar.</p>
                    </div>
                </div>
                <div class="flex items-center justify-center p-6 sm:p-12 sm:my-12 md:w-1/2">
                    <div class="w-full">
                        <h1 class="mb-4 text-xl font-semibold text-gray-700 dark:text-txt-white-m">
                            Bienvenido a TASKY
                        </h1>
                        <label class="block text-sm">
                            <span class="text-gray-700 dark:text-txt-white-m">Usuario</span>
                            <input
                                class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-primary-hover focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input px-4 py-2"
                                placeholder="Mi usuario" type="text" />
                        </label>
                        <label class="block mt-4 text-sm">
                            <span class="text-gray-700 dark:text-txt-white-m">Contraseña</span>
                            <input
                                class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-primary-hover focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input px-4 py-2"
                                placeholder="***************" type="password" />
                        </label>
                        <a class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-primary border border-transparent rounded-lg active:bg-primary-hover hover:bg-primary-hover focus:outline-none focus:shadow-outline-purple"
                            href="#">
                            Iniciar sesión
                        </a>

                        <hr class="my-8" />

                        <p class="mt-1">
                            <RouterLink to="/register"
                                class="text-sm font-medium text-primary-color dark:text-primary hover:underline">¿No
                                tienes
                                cuenta? Registrate</RouterLink>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { RouterLink } from 'vue-router'

</script>
<style scoped></style>