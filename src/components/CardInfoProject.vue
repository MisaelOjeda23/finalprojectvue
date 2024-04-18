<template>
    <div class="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
        <h4 class="mb-4 font-semibold text-gray-800 dark:text-gray-300">
            Proyectos en Curso
        </h4>
        <div class="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400">
            <table class="w-full whitespace-no-wrap">
                <thead>

                    <tr
                        class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                        <th class="px-4 py-3">Nombre del Proyecto</th>
                        <th class="px-4 py-3">Progreso</th>
                        <th class="px-4 py-3">Estado</th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                    <tr class="text-gray-700 dark:text-gray-400" v-for="(proyecto, index) in proyectos" :key="index">
                        <td class="px-4 py-3">
                            <div class="flex items-center text-sm">
                                <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-folders"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 4h3l2 2h5a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" /><path d="M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h2" /></svg>
                                    <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                </div>
                                <div>
                                    <p class="font-semibold">{{ proyecto.name_proyecto }}</p>

                                </div>
                            </div>
                        </td>
                        <td class="px-4 py-3 text-sm">{{ proyecto.tareas.length }}</td>
                        <td class="px-4 py-3 text-xs">
                            <span
                                class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100" :class="proyecto.estado">
                                {{ proyecto.estado ? 'Activo' : 'Inactivo' }}
                            </span>
                        </td>
                    </tr>

                    <tr class="text-gray-700 dark:text-gray-400" v-if="proyectos.length > 4">

                    </tr>

                </tbody>
            </table>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { IEquipo } from '@/interfaces/IEquipo';
import type { IProyecto } from '@/interfaces/IProyecto';
import ApiService from '@/services/ApiService';
import UserService from '@/services/UserService';
import { useTaskStore } from '@/stores/task';
import { onMounted, ref, type Ref } from 'vue';

const apiService = new ApiService()
const userService = new UserService()

const taskStore = useTaskStore()
const user = userService.getUsuario()
const proyectos:Ref<IProyecto[]> = ref([])

onMounted( async () => {
    proyectos.value = await taskStore.proyectos
})

</script>

<style scoped>

.activo {
    @apply px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100
}

.inactivo {
    @apply px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700
}

</style>