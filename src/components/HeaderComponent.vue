<template>

    <header class=" z-10 py-4 bg-white shadow-md dark:bg-gray-800">
        <div class="container flex items-center justify-between h-full px-6 mx-auto text-primary0 dark:text-primary">
            <!-- Mobile hamburger -->
            <button class="p-1 -ml-1 mr-5 rounded-md  focus:outline-none focus:shadow-outline-primary"
                aria-label="Menu"
                @click="$emit('abrirSide', true)">
                <IconMenuHam class="w-6 h-6" />
            </button>
            <!-- Buscador -->
            <div class="pr-6 text-gray-500 dark:text-gray-400 text-lg">
                <h2 class="hidden md:block justify-end text-gray-700 dark:text-gray-200">{{ $route.name }}</h2>
            </div>
            <div class="flex justify-center flex-1 lg:mr-32">
                <div class="relative w-full max-w-xl mr-6 focus-within:text-primary">
                    <div class="absolute inset-y-0 flex items-center pl-2">
                        <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <input
                        class="w-full py-1 pl-8 pr-2 text-base text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-white focus:border-primary focus:outline-none focus:shadow-outline-primary form-input"
                        type="text" placeholder="Buscar tareas..." aria-label="Search" />
                </div>
            </div>
            <div class="flex items-center flex-shrink-0 space-x-6">

                <div class="flex">
                    <ButtonTheme />
                </div>

                <div class="relative flex flex-row">
                    <div class="flex flex-col px-6 text-gray-500 dark:text-gray-400 text-base ">
                        <span class="hidden md:block font-semibold">{{ user.name }}</span>
                        <span class="hidden md:block font-light">{{ user.email }}</span>
                    </div>
                    <div class="align-middle rounded-full focus:shadow-outline-primary focus:outline-none"
                        aria-label="Account" aria-haspopup="true">
                        <details>
                            <summary class="flex cursor-pointer"><img class="object-cover w-8 h-8 rounded-full"
                                    src="/img/profile.webp" alt="" aria-hidden="true" /></summary>
                            <ul class="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:border-gray-700 dark:text-gray-300 dark:bg-gray-700"
                                aria-label="submenu">
                                <li class="flex">
                                    <RouterLink to="/profile"
                                        class="inline-flex items-center w-full px-2 py-1 text-base font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200">
                                        <IconProfile class="w-4 h-4 mr-3" />
                                        <span>Mi perfil</span>
                                    </RouterLink>
                                </li>
                                <li class="flex" v-on:click="cerrarSesion">
                                    <RouterLink to="/"
                                        class="inline-flex items-center w-full px-2 py-1 text-base font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200">
                                        <IconLogOut class="w-4 h-4 mr-3" />
                                        <span>Cerrar sesión</span>
                                    </RouterLink>
                                </li>
                            </ul>
                        </details>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<script lang="ts" setup>
import IconLogOut from '@/components/icons/IconLogOut.vue';
import IconMenuHam from '@/components/icons/IconMenuHam.vue';
import IconProfile from '@/components/icons/IconProfile.vue';
import ButtonTheme from '@/components/buttons/ButtonTheme.vue';
import UserService from '@/services/UserService';

import { RouterLink } from 'vue-router';

const userService = new UserService()
const user = userService.getUsuario()

const cerrarSesion = () => {
    userService.borrarUsuarioLS()
}

</script>
<style scoped></style>