<template>
    <SectionContainer>
        <main>
            <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">Tareas</h2>

            <section class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                <WidgetInfo />
                <WidgetInfo />
                <WidgetInfo />
                <WidgetInfo />
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

    const userStore = useUserStore()
    const taskStores = useTaskStore()
    const apiService = new ApiService()

    onMounted( async () => {
        await apiService.obtenerTareas(userStore.idUsuario)
        console.log(taskStores.tareas);
    })

</script>
<style scoped></style>