<template>
    <div class="w-full overflow-x-auto">
        <div v-if="tareas.length <= 0" class=" text-white text-2xl flex flex-col items-center justify-center my-10">

            <svg  xmlns="http://www.w3.org/2000/svg"  width="60"  height="60"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-notes-off"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 3h10a2 2 0 0 1 2 2v10m0 4a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14" /><path d="M11 7h4" /><path d="M9 11h2" /><path d="M9 15h4" /><path d="M3 3l18 18" /></svg>
            <strong class=" flex justify-center"> No tienes tareas pendientes </strong>
        </div>
        <table class="w-full whitespace-no-wrap" v-else >
            <thead>
                <tr
                    class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                    <th class="px-4 py-3">Tareas pendientes</th>
                    <th class="px-4 py-3">Prioridad</th>
                    <th class="px-4 py-3">Estado</th>
                    <th class="px-4 py-3">Fecha limite</th>
                    <th class="px-4 py-3">Proyecto</th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                <tr v-for="(tarea, index) in tareas" :key="index" class="text-gray-700 dark:text-gray-400">
                    <td class="px-4 py-3">
                        <div class="flex items-center text-sm">
                            <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                <img class="object-cover w-full h-full rounded-full"
                                    src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                                    alt="" loading="lazy" />
                                <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                            </div>
                            <div>
                                <p class="font-semibold">{{ tarea.name }}</p>

                            </div>
                        </div>
                    </td>
                    <td class="px-4 py-3 text-xs">
                        <span
                            :class="tarea.prioridad.toLowerCase()" >
                            {{ tarea.prioridad }}
                        </span>
                    </td>
                    <td class="px-4 py-3 text-xs">
                        <span
                            :class="tarea.estado.toLowerCase()">
                            {{ tarea.estado }}
                        </span>
                    </td>
                    <td class="px-4 py-3 text-sm">{{ tarea.date_end }}</td>
                    <td class="px-4 py-3 text-sm">{{ tarea.name_proyecto }}</td>
                </tr>
                

            </tbody>
        </table>
    </div>
</template>
<script lang="ts" setup>
    const props = defineProps(['tareas']);
    console.log(props.tareas)
</script>
<style scoped>
    .baja{
        @apply px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100
    }

    .media{
        @apply px-2 py-1 font-semibold leading-tight text-orange-700 bg-orange-100 rounded-full dark:text-white dark:bg-orange-600
    }

    .alta{
        @apply px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700
    }

    .completo{
      @apply px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100
    }

    .incompleto{
      @apply px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700
  }
</style>