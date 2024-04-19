<template>
    <div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
        <div class="p-4 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="35"  height="35"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-folder">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" />
            </svg>
        </div>
        <div>
            <p class="mb-2 text-base font-medium text-gray-600 dark:text-gray-400">
                {{ proyecto.name_proyecto }}
            </p>
            <p class="text-sm font-semibold text-gray-700 dark:text-gray-200">
                Tareas: {{ proyecto.tareas.length }}
            </p>
            <p class="text-sm font-semibold text-gray-700 dark:text-gray-200">
                Barra
            </p>
                <button type="button" v-on:click="verMas(proyecto)" class="text-white mt-5 h-10 bg-black hover:bg-gray-500/90 focus:ring-4 focus:outline-none focus:ring-gray-500/50 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center dark:focus:ring-orange-500/55 me-2 mb-2">
                    Ver mas
                </button>

        </div>
    </div>
</template>
<script lang="ts" setup>
import AlertService from '@/services/AlertService';

    const props = defineProps(['proyecto'])

    const alertService = new AlertService()
    
    const verMas = ((proyecto: any) => {
        alertService.modalVerMas(proyecto)
    })

</script>
<style scoped></style>