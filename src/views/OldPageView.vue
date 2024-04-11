<template>
    <section class="flex justify-between p-11">
      <SideBar />
      <div>
        <h3 class="text-4xl font-semibold">Lunes</h3>
        <p>Marzo 22, 2024 | 10:05 AM</p>
      </div>
      <button>Play</button>
    </section>
  
    <section class="flex flex-row">
      <div class="flex-1">
        <h3>Tareas pendientes</h3>
        <p>10</p>
      </div>
  
      <div class="flex-1">
        <h3>Tareas atrasadas</h3>
        <p>21</p>
      </div>
  
      <div class="flex-1">
        <h3>Proyectos totales</h3>
        <p>05</p>
      </div>
    </section>
  
    <section class="overflow-x auto">
      <table class="min-w-full divide-y ">
        <thead class="">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Taras
              pendientes</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Prioridad</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha
              de entrega</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Proyecto</th>
          </tr>
        </thead>
        <tbody class="">
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">Comprar leche</td>
            <td class="px-6 py-4 whitespace-nowrap">Alta</td>
            <td class="px-6 py-4 whitespace-nowrap">Pendiente</td>
            <td class="px-6 py-4 whitespace-nowrap">Marzo 22, 2024</td>
            <td class="px-6 py-4 whitespace-nowrap">Compras</td>
          </tr>
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">Comprar leche</td>
            <td class="px-6 py-4 whitespace-nowrap">Alta</td>
            <td class="px-6 py-4 whitespace-nowrap">Pendiente</td>
            <td class="px-6 py-4 whitespace-nowrap">Marzo 22, 2024</td>
            <td class="px-6 py-4 whitespace-nowrap">Compras</td>
          </tr>
        </tbody>
      </table>
    </section>
  
    <section class="flex flex-row">
      <div class="flex-1 mr-4">
        <h3 class="text-lg font-semibold mb-4">Miembos</h3>
        <table class="min-w-full divide-y ">
          <thead>
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Miembro</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tarea
                asignada</th>
              <th scope="col" class="bpx-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">Antonio</td>
              <td class="px-6 py-4 whitespace-nowrap">Comprar leche</td>
              <td class="px-6 py-4 whitespace-nowrap">Pendiente</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">Antonio</td>
              <td class="px-6 py-4 whitespace-nowrap">Comprar leche</td>
              <td class="px-6 py-4 whitespace-nowrap">Pendiente</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex-1">
        <h3 class="text-lg font-semibold mb-4">Proyectos</h3>
        <table class="min-w-full divide-y ">
          <tbody>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">Proyecto</td>
              <td class="px-6 py-4 whitespace-nowrap">Fecha entrega</td>
              <td class="px-6 py-4 whitespace-nowrap">Pendiente</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">Antonio</td>
              <td class="px-6 py-4 whitespace-nowrap">Fecha entrega</td>
              <td class="px-6 py-4 whitespace-nowrap">Pendiente</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  
  </template>
  <script lang="ts" setup>
  import SideBar from '@/components/SideBar.vue';
  </script>
  <style scoped></style>