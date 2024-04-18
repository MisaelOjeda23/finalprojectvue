<template>
    <div class="w-full overflow-x-auto">
        <div v-if="tareas.length <= 0" class=" text-white text-2xl flex flex-col items-center justify-center my-10">

            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-notes-off">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 3h10a2 2 0 0 1 2 2v10m0 4a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14" />
                <path d="M11 7h4" />
                <path d="M9 11h2" />
                <path d="M9 15h4" />
                <path d="M3 3l18 18" />
            </svg>
            <strong class=" flex justify-center text-gray-700 dark:text-gray-200">No tienes tareas pendientes</strong>
        </div>
        <table class="w-full whitespace-no-wrap" v-else>
            <thead>
                <tr
                    class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                    <th class="px-3 py-3">Tareas pendientes</th>
                    <th class="px-3 py-3">Prioridad</th>
                    <th class="px-3 py-3">Estado</th>
                    <th class="px-3 py-3">Fecha Inicial</th>
                    <th class="px-3 py-3">Fecha limite</th>
                    <th class="px-3 py-3 hidden md:table-cell">Proyecto</th>
                    <th class="px-3 py-3">Acciones</th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                <tr v-for="(tarea, index) in tareas" :key="index" class="text-gray-700 dark:text-gray-400">
                    <td class="px-3 py-3">
                        <div class="flex items-center text-sm">
                            <div class="flex relative justify-center w-8 h-8 mr-3 rounded-full md:block">
                                <IconTaks />
                                <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                            </div>
                            <div>
                                <p class="font-semibold">{{ tarea.name }}</p>

                            </div>
                        </div>
                    </td>
                    <td class="px-3 py-3 text-xs">
                        <span :class="tarea.prioridad.toLowerCase()">
                            {{ tarea.prioridad }}
                        </span>
                    </td>
                    <td class="px-3 py-3 text-xs">
                        <span :class="tarea.estado.toLowerCase()">
                            {{ tarea.estado }}
                        </span>
                    </td>
                    <td class="px-4 py-3 text-sm">{{ tarea.date }}</td>
                    <td class="px-4 py-3 text-sm">{{ tarea.date_end }}</td>
                    <td class="px-4 py-3 text-sm">{{ tarea.name_proyecto }}</td>
                    <td class="px-4 py-3">
                        <div class="flex items-center space-x-4 text-sm">
                            <button
                                    class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-primary rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                    aria-label="Complete" v-on:click="completarTarea(tarea)">
                                    <svg xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-checkbox w-5 h-5"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 11l3 3l8 -8" /><path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" /></svg>
                            </button>
                            <button
                                    class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-primary rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                    aria-label="Complete" v-on:click="detallesTarea(tarea)">
                                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-sticker-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4h12a2 2 0 0 1 2 2v7h-5a2 2 0 0 0 -2 2v5h-7a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2z" /><path d="M20 13v.172a2 2 0 0 1 -.586 1.414l-4.828 4.828a2 2 0 0 1 -1.414 .586h-.172" /></svg>
                            </button>
                        </div>
                    </td>
                    
                </tr>
                

            </tbody>
        </table>
    </div>
</template>

<script lang="ts" setup>
import IconTaks from './icons/IconTaks.vue';
import AlertService from '@/services/AlertService';
import type { ITarea } from '@/interfaces/ITarea';

const props = defineProps(['tareas']);
const alertService = new AlertService()

const completarTarea = ( async (tarea: ITarea) => {
        await alertService.mostrarAlertPreguntar('¿Tarea completa?', '¿Estas seguro de querer marcar como completa esta tarea?', 'question', 'Si, completar', 'No', tarea)
})

const detallesTarea = ( async(tarea: ITarea) => {
    await alertService.mostrarDetalles(tarea)
})

</script>

<style scoped>
.baja {
    @apply px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100
}

.media {
    @apply px-2 py-1 font-semibold leading-tight text-orange-700 bg-orange-100 rounded-full dark:text-white dark:bg-orange-600
}

.alta {
    @apply px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700
}

.completo {
    @apply px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100
}

.incompleto {
    @apply px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700
}
</style>