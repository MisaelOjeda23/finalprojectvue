<template>
    <SectionContainer>
        <main>
            <section class=" flex justify-between text-white mt-0 py-0">
      <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">Mis tareas</h2>

    </section>

            <section class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-3">
                <WidgetInfo :titulo="'Tareas Pendientes'" :contador="taskStores.tareas.length" />
                <WidgetInfo :titulo="'Tareas Atrasadas'" :contador="0" />
                <WidgetInfo :titulo="'Proyectos Totales'" :contador="0" />
            </section>

            <section class=" flex justify-between text-white mt-0 py-0">
                <h2></h2>
                <button type="button" v-on:click="alertService.modalCrearTarea()" class="text-white mt-5 h-12 bg-orange-500 hover:bg-orange-500/90 focus:ring-4 focus:outline-none focus:ring-orange-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-orange-500/55 me-2 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-plus">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                    <path d="M9 12h6" />
                    <path d="M12 9v6" />
                    </svg>
                Agregar tarea
                </button>
            </section>

            <section class="w-full overflow-hidden rounded-lg shadow-xs">
                <TableEdit :tareas="taskStores.tareas" />
            </section>
        </main>
    </SectionContainer>
</template>
<script lang="ts" setup>
import SectionContainer from '@/components/SectionContainer.vue';
import WidgetInfo from '@/components/WidgetInfo.vue';
import TableEdit from '@/components/TableEdit.vue';
import { useTaskStore } from '@/stores/task';
import { onMounted } from 'vue';
import ApiService from '@/services/ApiService';
import { useUserStore } from '@/stores/user';
import AlertService from '@/services/AlertService';

    const userStore = useUserStore()
    const taskStores = useTaskStore()
    const apiService = new ApiService()
    const alertService = new AlertService()

    onMounted( async () => {
        await apiService.obtenerTareas(userStore.idUsuario)
        console.log(taskStores.tareas);
    })

</script>
<style scoped></style>