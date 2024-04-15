<template>

  <SectionContainer>
  
    <section class="flex justify-between text-white pb-11">
      <div>
        <h3 class="text-4xl font-semibold">{{ fecha[0] }}</h3>
        <p class="text-base">{{ fecha[1] }} | 10:05 AM</p>
      </div>
    </section>

    <section class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
      <WidgetInfo />
      <WidgetInfo />
      <WidgetInfo />
      <WidgetInfo />
    </section>

    <section class=" flex justify-between text-white mt-0 py-0">
      <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">Tareas</h2>
      
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
      <TableInfo :tareas="tareas" />
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
import { onBeforeUnmount, onMounted, ref, type Ref } from 'vue';
import { useUserStore } from '@/stores/user';
import UserService from '@/services/UserService';
import ApiService from '@/services/ApiService';
import AlertService from '@/services/AlertService';
import type { ITarea } from '@/interfaces/ITarea';

const userService = new UserService()
const apiService = new ApiService()
const alertService = new AlertService()

const userStore = useUserStore()
const user = userService.getUsuario()
const idUser = userService.getIdUsuario()

const fecha = userStore.diaSemana().split(',')

const tareas:Ref<ITarea[]> = ref([])

onMounted(async () => {

  tareas.value = await apiService.obtenerTareas(user.value.idUser)
  console.log(tareas.value);
  console.log(idUser.value);
  
  
})


</script>
<style scoped></style>