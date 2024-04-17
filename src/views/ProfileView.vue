<template>
    <SectionContainer>
        <div class="container mx-auto py-8">
            <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
                <div class="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4">
                    <div class="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
                        <div class="flex flex-col items-center sm:flex-row sm:justify-between">
                            <div class="flex items-center sm:mr-4">
                                <img src="/img/profile.webp"
                                    class="w-32 h-32 bg-gray-300 rounded-full mb-4 sm:mb-0" />
                                <div class="ml-4">
                                    <h2 class="text-xl font-bold text-gray-800 dark:text-white">{{ user.name }}</h2>
                                    <p class="text-gray-700 dark:text-gray-300">{{ user.email }}</p>
                                </div>
                            </div>
                            <div class="mt-6 sm:mt-0">
                                <a href="#"
                                    class="bg-orange-500 hover:bg-orange-500/90 text-white py-2 px-4 rounded focus:ring-4 focus:outline-none focus:ring-orange-500/50">Editar
                                    información</a>
                            </div>
                        </div>
                        <hr class="my-6 border-t border-gray-300 dark:border-gray-700">
                        <div>
                            <span
                                class="text-base font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 dark:text-gray-400">Información
                                personal</span>
                            <ul class="mt-4">
                                <li class="mb-2 flex items-center text-gray-700 dark:text-gray-200"><span
                                        class="mr-2 font-semibold">ID:</span> {{ user.idUser }}</li>
                                <li class="mb-2 flex items-center text-gray-700 dark:text-gray-200"><span
                                        class="mr-2 font-semibold">Nombre:</span> {{ user.name }}</li>
                                <li class="mb-2 flex items-center text-gray-700 dark:text-gray-200"><span
                                        class="mr-2 font-semibold">Email:</span> {{ user.email }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </SectionContainer>
</template>
<script lang="ts" setup>
import SectionContainer from '@/components/SectionContainer.vue';
import UserService from '@/services/UserService';

const userService = new UserService()
const user = userService.getUsuario()


</script>
<style scoped></style>