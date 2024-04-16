<template>
    <div class="w-full overflow-x-auto">
        <table class="w-full whitespace-no-wrap">
            <thead>
                <tr
                    class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                    <th class="px-3 py-3">Tareas pendientes</th>
                    <th class="px-3 py-3">Prioridad</th>
                    <th class="px-3 py-3">Estado</th>
                    <th class="px-3 py-3">Fecha limite</th>
                    <th class="px-3 py-3 hidden md:table-cell">Proyecto</th>
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
                        <span
                            class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                            Baja
                        </span>
                    </td>
                    <td class="px-3 py-3 text-xs">
                        <span
                            class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                            Baja
                        </span>
                    </td>
                    <td class="px-3 py-3 text-sm">{{ tarea.date_end }}</td>
                    <td class="px-3 py-3 text-sm hidden md:table-cell">Proyecto 1</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script lang="ts" setup>
import IconTaks from './icons/IconTaks.vue';
    const props = defineProps(['tareas']);
    console.log(props.tareas)
</script>
<style scoped></style>