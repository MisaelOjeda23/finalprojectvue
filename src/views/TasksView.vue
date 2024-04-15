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
                <TableEdit />
            </section>
        </main>
    </SectionContainer>
</template>
<script lang="ts" setup>
import SectionContainer from '@/components/SectionContainer.vue';
import WidgetInfo from '@/components/WidgetInfo.vue';
import TableEdit from '@/components/TableEdit.vue';
</script>
<style scoped></style>