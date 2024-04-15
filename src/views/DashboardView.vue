<template>
  <SectionContainer>
    <section class="flex justify-between text-white pb-11">
      <div>
        <h3 class="text-4xl font-semibold">Lunes</h3>
        <p class="text-base">Marzo 22, 2024 | 10:05 AM</p>
      </div>
      <button>Play</button>
    </section>

    <section class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
      <WidgetInfo />
      <WidgetInfo />
      <WidgetInfo />
      <WidgetInfo />
    </section>

    <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">Tareas</h2>

    <section class="w-full overflow-hidden rounded-lg shadow-xs">
      <TableInfo />
    </section>

    <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
      Información
    </h2>

    <section class="grid gap-6 mb-8 md:grid-cols-2">
      <CardInfo />
      <CardInfo />
    </section>

  </SectionContainer>
</template>
<script lang="ts" setup>
import SectionContainer from '@/components/SectionContainer.vue';
import WidgetInfo from '@/components/WidgetInfo.vue';
import TableInfo from '@/components/TableInfo.vue';
import CardInfo from '@/components/CardInfo.vue';
import UserService from '@/services/UserService';
import { onMounted, ref } from 'vue';

const userService = new UserService()
const user = userService.getUsuario()

onMounted(async () => {
  console.log(user.value);
  
})


</script>
<style scoped></style>