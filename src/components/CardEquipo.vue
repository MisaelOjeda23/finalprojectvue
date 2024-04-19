<template>
    <div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 my-4">
        <div class="p-4 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-users"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /><path d="M21 21v-2a4 4 0 0 0 -3 -3.85" /></svg>
        </div>
        <div>
            <p class="mb-2 text-2xl font-medium text-gray-600 dark:text-gray-400">
                {{ equipo.name_equipo }}
            </p>
            <p class="text-sm font-semibold text-gray-700 dark:text-gray-200">
                Estatus: {{ equipo.status }}
            </p>
            <p class="text-sm font-semibold text-gray-700 dark:text-gray-200">
                Integrantes: {{ equipo.miembros.length }}
            </p>
                <button type="button" v-on:click="verMas(equipo)" class="text-white mt-5 h-10 bg-black hover:bg-gray-500/90 focus:ring-4 focus:outline-none focus:ring-gray-500/50 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center dark:focus:ring-orange-500/55 me-2 mb-2">
                    Ver mas
                </button>

        </div>
    </div>
</template>
<script lang="ts" setup>
import AlertService from '@/services/AlertService';

    const props = defineProps(['equipo'])

    const alertService = new AlertService()
    
    const verMas = ((equipo: any) => {
        alertService.modalVerMasEquipo(equipo)
    })

</script>
<style scoped></style>