<template>
    <SectionContainer>
        <main>            
            <section class=" flex justify-between text-white mt-0 py-0">
            <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">Mis Proyectos</h2>
            
            <button type="button" v-on:click="alertService.modalCrearProyecto()" class="text-white mt-5 h-12 bg-orange-500 hover:bg-orange-500/90 focus:ring-4 focus:outline-none focus:ring-orange-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-orange-500/55 me-2 mb-2">
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-folder-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 19h-7a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v3.5" />
                    <path d="M16 19h6" />
                    <path d="M19 16v6" />
                </svg>
                Crear Proyecto
            </button>

            </section>

            <section class="grid gap-6 mb-8 mt-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
                <CardProject v-for="(proyecto, index) in proyectos" :key="index" :proyecto="proyecto"/>
            </section>

<!--             <section class="w-full overflow-hidden rounded-lg shadow-xs">
                <TableEdit />
            </section> -->
        </main>
    </SectionContainer>
</template>
<script lang="ts" setup>
import SectionContainer from '@/components/SectionContainer.vue';
import WidgetInfo from '@/components/WidgetInfo.vue';
import TableEdit from '@/components/TableEdit.vue';
import CardProject from '@/components/CardProject.vue';
import AlertService from '@/services/AlertService';
import { useTaskStore } from '@/stores/task';
import { onMounted } from 'vue';

const alertService = new AlertService()
const taskStore = useTaskStore()
const proyectos = taskStore.proyectos

onMounted(() => {
    console.log(taskStore.proyectos);
    
})

</script>
<style scoped></style>