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
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </section>

      <section class="w-full overflow-hidden rounded-lg shadow-xs">
        <div class="w-full overflow-x-auto">
          <table class="w-full whitespace-no-wrap">
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
              <tr class="text-gray-700 dark:text-gray-400">
                <td class="px-4 py-3">
                  <div class="flex items-center text-sm">
                    <!-- Avatar with inset shadow -->
                    <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                      <img class="object-cover w-full h-full rounded-full"
                        src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                        alt="" loading="lazy" />
                      <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                    </div>
                    <div>
                      <p class="font-semibold">Hans Burger</p>
                      
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3 text-sm">$ 863.45</td>
                <td class="px-4 py-3 text-xs">
                  <span
                    class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                    Approved
                  </span>
                </td>
                <td class="px-4 py-3 text-sm">6/10/2020</td>
                <td class="px-4 py-3 text-sm">Proyecto 1</td>
              </tr>

              <tr class="text-gray-700 dark:text-gray-400">
                <td class="px-4 py-3">
                  <div class="flex items-center text-sm">
                    <!-- Avatar with inset shadow -->
                    <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                      <img class="object-cover w-full h-full rounded-full"
                        src="https://images.unsplash.com/photo-1566411520896-01e7ca4726af?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                        alt="" loading="lazy" />
                      <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                    </div>
                    <div>
                      <p class="font-semibold">Hitney Wouston</p>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3 text-sm">$ 863.45</td>
                <td class="px-4 py-3 text-xs">
                  <span
                    class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                    Approved
                  </span>
                </td>
                <td class="px-4 py-3 text-sm">6/10/2020</td>
                <td class="px-4 py-3 text-sm">Proyecto 1</td>
              </tr>

              <tr class="text-gray-700 dark:text-gray-400">
                <td class="px-4 py-3">
                  <div class="flex items-center text-sm">
                    <!-- Avatar with inset shadow -->
                    <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                      <img class="object-cover w-full h-full rounded-full"
                        src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                        alt="" loading="lazy" />
                      <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                    </div>
                    <div>
                      <p class="font-semibold">Hans Burger</p>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3 text-sm">$ 863.45</td>
                <td class="px-4 py-3 text-xs">
                  <span
                    class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                    Approved
                  </span>
                </td>
                <td class="px-4 py-3 text-sm">6/10/2020</td>
                <td class="px-4 py-3 text-sm">Proyecto 1</td>
              </tr>
            </tbody>
          </table>
        </div>
        
      </section>
  </SectionContainer>
</template>
<script lang="ts" setup>
import SectionContainer from '@/components/SectionContainer.vue';
import CardComponent from '@/components/CardComponent.vue';
</script>
<style scoped></style>